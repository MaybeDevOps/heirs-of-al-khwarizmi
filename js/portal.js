document.documentElement.dataset.theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

const expectedRole = document.body.dataset.role;
const title = document.getElementById('portalTitle');
const intro = document.getElementById('portalIntro');
const details = document.getElementById('portalDetails');
const status = document.getElementById('portalStatus');
const signOutButton = document.getElementById('signOut');

function getClient() {
  const config = window.APP_CONFIG;
  if (!window.supabase || !config || !config.supabaseUrl || !config.supabaseAnonKey
    || config.supabaseUrl.includes('YOUR_') || config.supabaseAnonKey.includes('YOUR_')) {
    throw new Error('Supabase sozlanmagan. js/supabase-config.js faylini to‘ldiring.');
  }
  return window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
}

function addDetail(label, value) {
  if (!value) return;
  const row = document.createElement('p');
  row.textContent = `${label}: ${value}`;
  details.append(row);
}

async function loadPortal() {
  const client = getClient();
  const { data: userData, error: userError } = await client.auth.getUser();
  if (userError) throw userError;
  if (!userData.user) {
    window.location.replace('auth.html?mode=login');
    return;
  }

  const { data: profile, error: profileError } = await client
    .from('profiles')
    .select('username, display_name, role, grade, subject, is_approved')
    .eq('id', userData.user.id)
    .single();

  if (profileError) throw new Error('Profilni yuklab bo‘lmadi. Supabase jadvali va RLS sozlamalarini tekshiring.');
  if (profile.role !== expectedRole) {
    title.textContent = 'Hisob turi mos emas';
    intro.textContent = 'Ushbu sahifaga bu hisob turi bilan kirish mumkin emas. To‘g‘ri kabinetga kirish uchun qayta tizimga kiring.';
    return;
  }

  title.textContent = `Xush kelibsiz, ${profile.display_name}!`;
  intro.textContent = expectedRole === 'teacher'
    ? 'O‘qituvchi hisobingiz va kabinet holati quyida ko‘rsatilgan.'
    : 'O‘quvchi hisobingiz muvaffaqiyatli ochildi.';
  details.hidden = false;
  addDetail('Foydalanuvchi nomi', profile.username);
  addDetail('Elektron pochta', userData.user.email);
  addDetail('Sinf', profile.grade ? `${profile.grade}-sinf` : '');
  addDetail('Mutaxassislik', profile.subject);

  if (expectedRole === 'teacher' && !profile.is_approved) {
    status.hidden = false;
    status.textContent = 'O‘qituvchi kabineti administrator tasdig‘idan so‘ng faollashadi.';
  }
}

signOutButton.addEventListener('click', async () => {
  signOutButton.disabled = true;
  try {
    const client = getClient();
    const { error } = await client.auth.signOut();
    if (error) throw error;
    window.location.replace('index.html');
  } catch (error) {
    intro.textContent = error.message || 'Hisobdan chiqib bo‘lmadi. Qayta urinib ko‘ring.';
    signOutButton.disabled = false;
  }
});

loadPortal().catch(error => {
  title.textContent = 'Kabinetni ochib bo‘lmadi';
  intro.textContent = error.message || 'Hisob ma’lumotlarini yuklab bo‘lmadi.';
});
