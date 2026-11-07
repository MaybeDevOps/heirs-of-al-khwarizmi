/* ===================== COURSES DATA ===================== */
const courses = {
  8: [
    ['🧠', 'Computer Science Foundations', 'Algoritmik fikrlash va kompyuter fanlari asoslari.'],
    ['💻', 'Web Full-stack Development', 'Frontend va backend yordamida to‘liq web ilovalar.']
  ],
  9: [
    ['✏️', 'UX/UI Design', 'Foydalanuvchiga qulay raqamli tajribalar.'],
    ['⚙️', 'Back-end Development', 'Server, API va ma’lumotlar bazalari.'],
    ['📱', 'Android Development', 'Android uchun mobil ilovalar.'],
    ['📊', 'Business Intelligence', 'Ma’lumotlardan foydali xulosalar.'],
    ['🎮', 'Game Design', 'O‘yin g‘oyasi, mexanikasi va prototiplari.'],
    ['📡', 'IoT', 'Aqlli qurilmalar va ulangan tizimlar.']
  ],
  10: [
    ['🐍', 'Python', 'Zamonaviy dasturlash va muammolarni yechish.'],
    ['🛡️', 'Cybersecurity', 'Raqamli tizimlar xavfsizligi asoslari.'],
    ['🎨', 'UX/UI', 'Ilova va web mahsulotlar dizayni.'],
    ['📲', 'Android Development', 'Ilg‘or mobil ilovalar va Android ekotizimi.'],
    ['🤖', 'Data Engineering & ML', 'Ma’lumotlar quvurlari va mashinaviy o‘rganish.'],
    ['☁️', 'DevOps', 'Dasturiy ta’minot va infratuzilma.']
  ],
  11: [
    ['🚀', 'Professional IT Development', 'Jamoaviy loyihalar, portfolio va ishga tayyorgarlik.']
  ]
};

/* ===================== TRANSLATIONS ===================== */
const text = {
  /* ---------- O'zbekcha ---------- */
  uz: {
    announcement: 'Kelajak dasturchilari uchun yangi avlod ta’limi <b>· 8-sinf o‘quvchilari uchun qabul ochiq</b>',
    themeToDark: 'Tungi rejimga o‘tish',
    themeToLight: 'Kunduzgi rejimga o‘tish',
    navCourses: 'Kurslar',
    navJourney: 'O‘quv yo‘li',
    navAdmission: 'Qabul',
    navAbout: 'Loyiha haqida',
    login: 'Kirish',
    signup: 'Ro‘yxatdan o‘tish',
    eyebrow: '8-sinf o‘quvchilari uchun tanlov',
    heroTitle: 'Bugun o‘rgan.<br>Ertaga <span class="accent">yarat.</span>',
    heroCopy: 'Heirs of Al-Khwarizmi — maktab o‘quvchilarini dasturlash va ingliz tiliga o‘rgatib, kelajak kasblariga tayyorlaydigan to‘rt yillik ta’lim dasturi.',
    heroCta: 'Dastur bilan tanishish →',
    explore: 'Kurslarni ko‘rish',
    heroNote: 'Iqtidorli yoshlar uchun · 4 yillik dastur',
    stat1: '8-sinfdan 11-sinfgacha',
    stat2: 'Zamonaviy yo‘nalishlar',
    stat3: 'Dasturlash va ingliz tili',
    stat4: 'Bitiruvga tayyor ishlar',
    programKicker: 'O‘QUV DASTURI',
    programTitle: 'Qiziqishingizni kasbga aylantiring',
    programCopy: 'Har bir sinf uchun puxta tuzilgan yo‘nalishlar. Sinfni tanlang va o‘quv rejasini ko‘ring.',
    courseCta: 'Dasturga ariza topshirish →',
    journeyKicker: 'TO‘RT YILLIK YO‘L',
    journeyTitle: 'Maktabdan IT karyerasigacha',
    journeyCopy: 'Bosqichma-bosqich o‘rganing, haqiqiy loyihalar yarating va bitiruvga kelib o‘z portfolioingizga ega bo‘ling.',
    point1: 'Har hafta amaliy mashg‘ulotlar',
    point2: 'Dasturlash bilan birga ingliz tili',
    point3: 'Mentorlar va portfolio loyihalari',
    foundation: 'ASOSLAR',
    exploreTag: 'IZLANISH',
    specialize: 'IXTISOSLASHUV',
    career: 'KARYERAGA TAYYOR',
    y8: 'Poydevor yarating',
    y8copy: 'Computer Science, Full-stack va ingliz tili.',
    y9: 'Yo‘nalishingizni toping',
    y9copy: 'Dizayn, backend, Android, BI, o‘yinlar va IoT.',
    y10: 'Chuqur bilim oling',
    y10copy: 'Python, kiberxavfsizlik, ML, DevOps va boshqalar.',
    y11: 'Kelajakka qadam qo‘ying',
    y11copy: 'Professional IT, portfolio va ishga tayyorgarlik.',
    admissionKicker: 'QABUL JARAYONI',
    admissionTitle: 'Birinchi qadamni qo‘ying',
    admissionCopy: 'Dasturga qabul tanlov va bilimni aniqlash testi orqali amalga oshiriladi.',
    step1title: 'Ariza qoldiring',
    step1copy: 'O‘quvchi va ota-ona ma’lumotlarini kiriting. Biz keyingi bosqichlar haqida bog‘lanamiz.',
    step2title: 'Tanlov testidan o‘ting',
    step2copy: 'Mantiqiy fikrlash va tayyorgarlikni aniqlash uchun test topshiring.',
    step3title: 'O‘qishni boshlang',
    step3copy: 'Qabul qilingach, to‘rt yillik ta’lim va loyihalar olamiga qo‘shiling.',
    eligibility: '<strong>Kimlar topshira oladi?</strong> Faqat 8-sinf o‘quvchilari. Qabul tanlov asosida.',
    ctaTitle: 'Kelajakni birga quramizmi?',
    ctaCopy: 'Dastur haqida ko‘proq bilish va ariza qoldirish uchun ro‘yxatdan o‘ting.',
    ctaButton: 'Ariza topshirish →',
    copyright: '© 2025 Heirs of Al-Khwarizmi. Barcha huquqlar himoyalangan.',
    grade: '-sinf',
    duration: '8 oy',
    signupTitle: 'Dasturga ariza qoldiring',
    loginTitle: 'Xush kelibsiz!',
    signupSub: 'Ariza va tanlov bosqichlari haqida siz bilan bog‘lanamiz.',
    loginSub: 'Shaxsiy kabinetingizga kirish uchun ma’lumotlaringizni kiriting.',
    name: 'O‘quvchining to‘liq ismi',
    phone: 'Ota-ona telefon raqami',
    email: 'Elektron pochta',
    password: 'Parol',
    gradeLabel: 'Hozirgi sinf',
    choose: 'Sinfni tanlang',
    send: 'Arizani yuborish',
    enter: 'Kirish',
    switchLogin: 'Hisobingiz bormi? <button type="button" data-switch="login">Kirish</button>',
    switchSignup: 'Hisobingiz yo‘qmi? <button type="button" data-switch="signup">Ro‘yxatdan o‘tish</button>',
    success: 'Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.',
    loginSuccess: 'Demo: kirish so‘rovi yuborildi.'
  },

  /* ---------- Русский ---------- */
  ru: {
    announcement: 'Образование нового поколения для будущих разработчиков <b>· Набор открыт для учеников 8 класса</b>',
    themeToDark: 'Включить тёмную тему',
    themeToLight: 'Включить светлую тему',
    navCourses: 'Курсы',
    navJourney: 'Путь обучения',
    navAdmission: 'Поступление',
    navAbout: 'О проекте',
    login: 'Войти',
    signup: 'Подать заявку',
    eyebrow: 'Отбор учеников 8 класса',
    heroTitle: 'Учись сегодня.<br>Создавай <span class="accent">завтра.</span>',
    heroCopy: 'Heirs of Al-Khwarizmi — четырёхлетняя программа, обучающая школьников программированию и английскому языку для будущей карьеры.',
    heroCta: 'О программе →',
    explore: 'Все курсы',
    heroNote: 'Для талантливых школьников · программа на 4 года',
    stat1: 'С 8 по 11 класс',
    stat2: 'Современных направлений',
    stat3: 'Программирование и английский',
    stat4: 'Портфолио к выпуску',
    programKicker: 'ПРОГРАММА ОБУЧЕНИЯ',
    programTitle: 'Превратите интерес в профессию',
    programCopy: 'Направления для каждого класса. Выберите класс, чтобы посмотреть программу.',
    courseCta: 'Подать заявку →',
    journeyKicker: 'ПУТЬ ДЛИНОЙ В ЧЕТЫРЕ ГОДА',
    journeyTitle: 'От школы к карьере в IT',
    journeyCopy: 'Учитесь шаг за шагом, создавайте проекты и соберите портфолио к окончанию школы.',
    point1: 'Практика каждую неделю',
    point2: 'Английский вместе с программированием',
    point3: 'Наставники и проекты для портфолио',
    foundation: 'ОСНОВЫ',
    exploreTag: 'ПОИСК',
    specialize: 'СПЕЦИАЛИЗАЦИЯ',
    career: 'СТАРТ КАРЬЕРЫ',
    y8: 'Заложите фундамент',
    y8copy: 'Computer Science, Full-stack и английский.',
    y9: 'Выберите направление',
    y9copy: 'Дизайн, backend, Android, BI, игры и IoT.',
    y10: 'Углубите знания',
    y10copy: 'Python, кибербезопасность, ML, DevOps и другое.',
    y11: 'Подготовьтесь к будущему',
    y11copy: 'Профессиональная IT-разработка, портфолио и карьера.',
    admissionKicker: 'ПОСТУПЛЕНИЕ',
    admissionTitle: 'Сделайте первый шаг',
    admissionCopy: 'Отбор проходит на основе тестирования знаний и конкурсного отбора.',
    step1title: 'Оставьте заявку',
    step1copy: 'Укажите данные ученика и родителя. Мы свяжемся с вами по следующим этапам.',
    step2title: 'Пройдите отборочный тест',
    step2copy: 'Пройдите тест на логическое мышление и уровень подготовки.',
    step3title: 'Начните обучение',
    step3copy: 'После зачисления присоединитесь к четырёхлетней программе и проектам.',
    eligibility: '<strong>Кто может подать заявку?</strong> Только ученики 8 класса. Приём конкурсный.',
    ctaTitle: 'Построим будущее вместе?',
    ctaCopy: 'Зарегистрируйтесь, чтобы узнать больше о программе и оставить заявку.',
    ctaButton: 'Подать заявку →',
    copyright: '© 2025 Heirs of Al-Khwarizmi. Все права защищены.',
    grade: ' класс',
    duration: '8 мес.',
    signupTitle: 'Заявка на обучение',
    loginTitle: 'С возвращением!',
    signupSub: 'Мы свяжемся с вами по поводу заявки и отбора.',
    loginSub: 'Введите данные для входа в личный кабинет.',
    name: 'Полное имя ученика',
    phone: 'Телефон родителя',
    email: 'Электронная почта',
    password: 'Пароль',
    gradeLabel: 'Текущий класс',
    choose: 'Выберите класс',
    send: 'Отправить заявку',
    enter: 'Войти',
    switchLogin: 'Уже есть аккаунт? <button type="button" data-switch="login">Войти</button>',
    switchSignup: 'Нет аккаунта? <button type="button" data-switch="signup">Зарегистрироваться</button>',
    success: 'Спасибо! Ваша заявка принята. Мы скоро свяжемся с вами.',
    loginSuccess: 'Демо: запрос на вход отправлен.'
  },

  /* ---------- English ---------- */
  en: {
    announcement: 'Next-generation learning for tomorrow’s developers <b>· Applications open for grade 8 students</b>',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    navCourses: 'Courses',
    navJourney: 'Learning path',
    navAdmission: 'Admissions',
    navAbout: 'About us',
    login: 'Log in',
    signup: 'Sign up',
    eyebrow: 'Admissions for grade 8 students',
    heroTitle: 'Learn today.<br>Create <span class="accent">tomorrow.</span>',
    heroCopy: 'Heirs of Al-Khwarizmi is a four-year learning program teaching school students programming and English, preparing them for careers of the future.',
    heroCta: 'Explore the program →',
    explore: 'Browse courses',
    heroNote: 'For curious young minds · a 4-year program',
    stat1: 'Grades 8 through 11',
    stat2: 'Future-ready tracks',
    stat3: 'Programming & English',
    stat4: 'A portfolio by graduation',
    programKicker: 'THE CURRICULUM',
    programTitle: 'Turn your curiosity into a career',
    programCopy: 'Thoughtfully designed tracks for every grade. Choose a grade to explore the curriculum.',
    courseCta: 'Apply to the program →',
    journeyKicker: 'A FOUR-YEAR JOURNEY',
    journeyTitle: 'From school to an IT career',
    journeyCopy: 'Learn step by step, build real projects, and graduate with a portfolio you are proud of.',
    point1: 'Hands-on learning every week',
    point2: 'English alongside programming',
    point3: 'Mentors and portfolio projects',
    foundation: 'FOUNDATIONS',
    exploreTag: 'EXPLORE',
    specialize: 'SPECIALIZE',
    career: 'CAREER READY',
    y8: 'Build your foundation',
    y8copy: 'Computer Science, Full-stack and English.',
    y9: 'Find your direction',
    y9copy: 'Design, back-end, Android, BI, games and IoT.',
    y10: 'Go deeper',
    y10copy: 'Python, cybersecurity, ML, DevOps and more.',
    y11: 'Step into your future',
    y11copy: 'Professional IT development, portfolio and career prep.',
    admissionKicker: 'ADMISSIONS',
    admissionTitle: 'Take your first step',
    admissionCopy: 'Admission is based on a selection process and an assessment test.',
    step1title: 'Submit an application',
    step1copy: 'Share student and parent details. We’ll contact you about the next steps.',
    step2title: 'Take the selection test',
    step2copy: 'Complete an assessment of your logical thinking and readiness to learn.',
    step3title: 'Begin your journey',
    step3copy: 'Once admitted, join a four-year learning experience full of projects.',
    eligibility: '<strong>Who can apply?</strong> Grade 8 students only. Admission is competitive.',
    ctaTitle: 'Ready to build the future?',
    ctaCopy: 'Sign up to learn more about the program and submit an application.',
    ctaButton: 'Apply now →',
    copyright: '© 2025 Heirs of Al-Khwarizmi. All rights reserved.',
    grade: 'th grade',
    duration: '8 months',
    signupTitle: 'Apply to the program',
    loginTitle: 'Welcome back!',
    signupSub: 'We’ll be in touch about your application and selection steps.',
    loginSub: 'Enter your details to access your account.',
    name: 'Student full name',
    phone: 'Parent phone number',
    email: 'Email address',
    password: 'Password',
    gradeLabel: 'Current grade',
    choose: 'Select your grade',
    send: 'Submit application',
    enter: 'Log in',
    switchLogin: 'Already have an account? <button type="button" data-switch="login">Log in</button>',
    switchSignup: 'New here? <button type="button" data-switch="signup">Sign up</button>',
    success: 'Thank you! Your application has been received. We’ll be in touch soon.',
    loginSuccess: 'Demo: sign-in request submitted.'
  }
};

/* ===================== STATE & HELPERS ===================== */
let lang = 'uz';

const tr = k => text[lang][k] || text.uz[k] || k;

/* ===================== THEME SWITCH ===================== */
const themeToggle = document.getElementById('themeToggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.textContent = isDark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', tr(isDark ? 'themeToLight' : 'themeToDark'));
  themeToggle.title = tr(isDark ? 'themeToLight' : 'themeToDark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeColor.content = isDark ? '#11121f' : '#11152b';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ===================== RENDER COURSES ===================== */
function renderCourses(n) {
  document.getElementById('courses').innerHTML = courses[n]
    .map(c => `<article class="course">
      <div class="icon">${c[0]}</div>
      <h3>${c[1]}</h3>
      <p>${c[2]}</p>
      <div class="meta">
        <span>${n}${tr('grade')}</span>
        <b>${tr('duration')}</b>
      </div>
    </article>`)
    .join('');
}

/* ===================== LANGUAGE SWITCH ===================== */
function setLanguage(l) {
  lang = l;
  document.documentElement.lang = l;
  setTheme(document.documentElement.dataset.theme);

  document.querySelectorAll('[data-i18n]').forEach(e => {
    let v = tr(e.dataset.i18n);
    if (v) e.innerHTML = v;
  });

  document.querySelectorAll('.tab').forEach(b => {
    b.textContent = `${b.dataset.grade}${tr('grade')}`;
  });

  renderCourses(document.querySelector('.tab.active').dataset.grade);

  if (backdrop.classList.contains('open')) {
    openAuth(document.getElementById('mode').value);
  }
}

/* ===================== GRADE TABS ===================== */
document.querySelectorAll('.tab').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderCourses(b.dataset.grade);
  });
});

renderCourses(8);

document.getElementById('language').addEventListener('change', e => {
  setLanguage(e.target.value);
});

/* ===================== AUTH MODAL ===================== */
const backdrop = document.getElementById('backdrop');

function openAuth(mode) {
  const signup = mode === 'signup';

  document.getElementById('modalTitle').textContent = tr(signup ? 'signupTitle' : 'loginTitle');
  document.getElementById('modalSub').textContent = tr(signup ? 'signupSub' : 'loginSub');
  document.getElementById('message').textContent = '';

  document.getElementById('authForm').innerHTML = `
    <input type="hidden" id="mode" value="${mode}">
    ${signup ? `
      <label>${tr('name')}
        <input name="name" required autocomplete="name">
      </label>
      <label>${tr('phone')}
        <input name="phone" required type="tel" autocomplete="tel">
      </label>` : ''}
    <label>${tr('email')}
      <input name="email" required type="email" autocomplete="email">
    </label>
    <label>${tr('password')}
      <input name="password" required type="password" minlength="6" autocomplete="${signup ? 'new-password' : 'current-password'}">
    </label>
    ${signup ? `
      <label>${tr('gradeLabel')}
        <select name="grade" required>
          <option value="">${tr('choose')}</option>
          <option value="8">8${tr('grade')}</option>
        </select>
      </label>` : ''}
    <button type="submit" class="btn primary submit">${tr(signup ? 'send' : 'enter')}</button>`;

  document.getElementById('switchMode').innerHTML = tr(signup ? 'switchLogin' : 'switchSignup');

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    document.querySelector('#authForm input:not([type=hidden])')?.focus();
  }, 50);
}

/* ---------- Open / switch auth via data attributes ---------- */
document.addEventListener('click', e => {
  const a = e.target.closest('[data-auth]');
  if (a) {
    e.preventDefault();
    openAuth(a.dataset.auth);
  }

  const s = e.target.closest('[data-switch]');
  if (s) {
    openAuth(s.dataset.switch);
  }
});

/* ---------- Form submit (demo) ---------- */
document.getElementById('authForm').addEventListener('submit', e => {
  e.preventDefault();
  const mode = document.getElementById('mode').value;
  document.getElementById('message').textContent = tr(mode === 'signup' ? 'success' : 'loginSuccess');
  e.target.querySelector('button').disabled = true;
});

/* ---------- Close modal ---------- */
function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('close').addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ===================== MOBILE MENU ===================== */
document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('links').classList.toggle('show');
});

document.querySelectorAll('.links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('links').classList.remove('show');
  });
});