param(
    [int]$Port = 8080
)

$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$rootPrefix = $root.TrimEnd('\') + '\'
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)

$contentTypes = @{
    '.css' = 'text/css; charset=utf-8'
    '.html' = 'text/html; charset=utf-8'
    '.ico' = 'image/x-icon'
    '.jpeg' = 'image/jpeg'
    '.jpg' = 'image/jpeg'
    '.js' = 'text/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png' = 'image/png'
    '.svg' = 'image/svg+xml'
}

$listener.Start()
Write-Output "Serving $root at http://localhost:$Port/"

try {
    while ($listener.Server.IsBound) {
        $client = $listener.AcceptTcpClient()

        try {
            $stream = $client.GetStream()
            $reader = [System.IO.StreamReader]::new(
                $stream,
                [System.Text.Encoding]::ASCII,
                $false,
                1024,
                $true
            )
            $requestLine = $reader.ReadLine()
            if ([string]::IsNullOrWhiteSpace($requestLine)) {
                continue
            }

            $requestParts = $requestLine.Split(' ')
            $method = $requestParts[0]
            $requestPath = $requestParts[1].Split('?')[0]
            $relativePath = [System.Uri]::UnescapeDataString($requestPath.TrimStart('/'))
            if ([string]::IsNullOrEmpty($relativePath)) {
                $relativePath = 'index.html'
            }

            while ($null -ne ($header = $reader.ReadLine()) -and $header.Length -gt 0) {}

            $status = '200 OK'
            $contentType = 'text/plain; charset=utf-8'
            $body = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
            $filePath = [System.IO.Path]::GetFullPath(
                [System.IO.Path]::Combine($root, $relativePath.Replace('/', '\'))
            )
            $isInsideRoot = $filePath.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)
            $isPrivatePath = -not $isInsideRoot
            if ($isInsideRoot) {
                $isPrivatePath = $filePath.Substring($rootPrefix.Length).Split('\')[0].StartsWith('.')
            }

            if ($method -notin @('GET', 'HEAD')) {
                $status = '405 Method Not Allowed'
                $body = [System.Text.Encoding]::UTF8.GetBytes('Method Not Allowed')
            }
            elseif ($isInsideRoot -and -not $isPrivatePath -and (Test-Path -LiteralPath $filePath -PathType Leaf)) {
                $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
                if ($contentTypes.ContainsKey($extension)) {
                    $contentType = $contentTypes[$extension]
                }
                else {
                    $contentType = 'application/octet-stream'
                }

                $status = '200 OK'
                $body = [System.IO.File]::ReadAllBytes($filePath)
            }
            else {
                $status = '404 Not Found'
            }

            $headers = "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`nX-Content-Type-Options: nosniff`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            if ($method -eq 'GET' -and $body.Length -gt 0) {
                $stream.Write($body, 0, $body.Length)
            }
            $stream.Flush()
        }
        finally {
            $client.Dispose()
        }
    }
}
finally {
    $listener.Stop()
}
