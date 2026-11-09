param(
    [int]$Port = 8080
)

$ErrorActionPreference = 'Stop'
$root = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$rootPrefix = $root.TrimEnd('\') + '\'
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")

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
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $response.KeepAlive = $false
        $response.Headers['X-Content-Type-Options'] = 'nosniff'

        $relativePath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart('/'))
        if ([string]::IsNullOrEmpty($relativePath)) {
            $relativePath = 'index.html'
        }

        $filePath = [System.IO.Path]::GetFullPath(
            [System.IO.Path]::Combine($root, $relativePath.Replace('/', '\'))
        )
        $isInsideRoot = $filePath.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)
        $isPrivatePath = -not $isInsideRoot
        if ($isInsideRoot) {
            $isPrivatePath = $filePath.Substring($rootPrefix.Length).Split('\')[0].StartsWith('.')
        }

        if ($request.HttpMethod -notin @('GET', 'HEAD')) {
            $response.StatusCode = 405
            $response.Headers['Allow'] = 'GET, HEAD'
            $body = [System.Text.Encoding]::UTF8.GetBytes('Method Not Allowed')
            $response.ContentType = 'text/plain; charset=utf-8'
        }
        elseif ($isInsideRoot -and -not $isPrivatePath -and (Test-Path -LiteralPath $filePath -PathType Leaf)) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
            if ($contentTypes.ContainsKey($extension)) {
                $response.ContentType = $contentTypes[$extension]
            }
            else {
                $response.ContentType = 'application/octet-stream'
            }

            $response.StatusCode = 200
            $body = [System.IO.File]::ReadAllBytes($filePath)
        }
        else {
            $response.StatusCode = 404
            $response.ContentType = 'text/plain; charset=utf-8'
            $body = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
        }

        $response.ContentLength64 = $body.Length
        if ($request.HttpMethod -eq 'GET' -and $body.Length -gt 0) {
            $response.OutputStream.Write($body, 0, $body.Length)
        }
        $response.Close()
    }
}
finally {
    $listener.Stop()
    $listener.Close()
}
