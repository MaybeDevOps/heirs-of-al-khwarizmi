const form = document.getElementById('authForm');
const roleInput = document.getElementById('role');
const signupFields = document.getElementById('signupFields');
const gradeInput = document.getElementById('grade');
const subjectInput = document.getElementById('subject');
const gradeLabel = document.getElementById('gradeLabel');
const subjectLabel = document.getElementById('subjectLabel');
const passwordInput = document.getElementById('password');
const message = document.getElementById('authMessage');
const params = new URLSearchParams(window.location.search);
let mode = params.get('mode') === 'signup' ? 'signup' : 'login';
if (['student', 'teacher'].includes(params.get('role'))) {
  roleInput.value = params.get('role');
}

document.documentElement.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

function showMessage(text, kind) {
  message.textContent = text;
  message.dataset.kind = kind || '';
}

function updateRoleFields() {
  const isStudent = roleInput.value === 'student';
  gradeInput.hidden = !isStudent;
  gradeLabel.hidden = !isStudent;
  gradeInput.required = isStudent && mode === 'signup';
  subjectInput.hidden = isStudent;
  subjectLabel.hidden = isStudent;
}

function updateMode(nextMode) {
  mode = nextMode;
  const isSignup = mode === 'signup';
  document.getElementById('authTitle').textContent = isSignup ? 'Hisob yaratish' : 'Xush kelibsiz!';
  document.getElementById('authIntro').textContent = isSignup
    ? 'O‘quvchi yoki o‘qituvchi sifatida ro‘yxatdan o‘ting.'
    : 'Hisobingizga kirish uchun elektron pochta va parolingizni kiriting.';
  document.getElementById('submitButton').textContent = isSignup ? 'Ro‘yxatdan o‘tish' : 'Kirish';
  document.getElementById('switchPrompt').textContent = isSignup ? 'Hisobingiz bormi?' : 'Hisobingiz yo‘qmi?';
  document.getElementById('switchMode').textContent = isSignup ? 'Kirish' : 'Ro‘yxatdan o‘tish';
  signupFields.disabled = !isSignup;
  passwordInput.autocomplete = isSignup ? 'new-password' : 'current-password';
  updateRoleFields();
  showMessage('');
}

function getClient() {
  const config = window.APP_CONFIG;
  if (!window.supabase || !config || !config.supabaseUrl || !config.supabaseAnonKey
    || config.supabaseUrl.includes('YOUR_') || config.supabaseAnonKey.includes('YOUR_')) {
    throw new Error('Supabase sozlanmagan. js/supabase-config.js fayliga loyiha URL manzili va publishable/anon kalitini kiriting.');
  }
  return window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
}

async function loadProfile(client, user, selectedRole) {
  const { data: profile, error } = await client
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (error) {
    throw new Error('Profilni yuklab bo‘lmadi. Supabase jadvali va RLS sozlamalarini tekshiring.');
  }
  if (profile.role !== selectedRole) {
    throw new Error('Tanlangan hisob turi ushbu foydalanuvchiga mos kelmaydi.');
  }
  window.location.assign(profile.role === 'teacher' ? 'teacher.html' : 'student.html');
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  showMessage('So‘rov yuborilmoqda…');

  try {
    const client = getClient();
    const values = new FormData(form);
    const email = String(values.get('email')).trim();
    const password = String(values.get('password'));
    const selectedRole = String(values.get('role'));

    if (mode === 'signup') {
      const emailRedirectTo = new URL('auth.html', window.location.href);
      emailRedirectTo.searchParams.set('mode', 'login');
      emailRedirectTo.searchParams.set('role', selectedRole);
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: emailRedirectTo.href,
          data: {
            role: selectedRole,
            username: String(values.get('username')).trim(),
            display_name: String(values.get('displayName')).trim(),
            grade: selectedRole === 'student' ? String(values.get('grade')) : null,
            subject: selectedRole === 'teacher' ? String(values.get('subject')).trim() : null
          }
        }
      });

      if (error) throw error;
      if (!data.session) {
        showMessage('Ro‘yxatdan o‘tish yakunlandi. Hisobni faollashtirish uchun elektron pochtangizni tasdiqlang.', 'success');
        return;
      }
      await loadProfile(client, data.user, selectedRole);
      return;
    }

    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    await loadProfile(client, data.user, selectedRole);
  } catch (error) {
    showMessage(error.message || 'So‘rovni bajarib bo‘lmadi. Qayta urinib ko‘ring.', 'error');
  } finally {
    submitButton.disabled = false;
  }
});

document.getElementById('switchMode').addEventListener('click', () => {
  updateMode(mode === 'signup' ? 'login' : 'signup');
});
roleInput.addEventListener('change', updateRoleFields);
updateMode(mode);
