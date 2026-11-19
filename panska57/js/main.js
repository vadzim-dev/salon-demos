const EN = {
  'skip': 'Skip to content',
  'sign.sub': 'hair salon',
  'nav.services': 'Services',
  'nav.team': 'Team',
  'nav.visit': 'Find us',
  'hero.title': 'A haircut before work? We open at seven.',
  'hero.lead': 'Hair and nail salon at Pańska 57, a short walk from Rondo ONZ. Haircuts for women and men, hair treatments and nails. No fuss, fair prices.',
  'cta.call': 'Call to book',
  'cta.services': 'See services',
  'board.now': 'Now',
  'board.state': 'Salon',
  'd.mon': 'Mo',
  'd.tue': 'Tu',
  'd.wed': 'We',
  'd.thu': 'Th',
  'd.fri': 'Fr',
  'd.sat': 'Sa',
  'd.sun': 'Su',
  'stripe': 'Women’s cuts · Men’s cuts · Colouring · Hair treatments · Manicure · Pedicure ·',
  'services.title': 'What we do',
  's.women': 'Women’s hair',
  's.womenP': 'Cuts, blow-dries, colouring and occasion styles.',
  's.men': 'Men’s hair',
  's.menP': 'Classic scissor and clipper cuts, quick and careful.',
  's.care': 'Treatments',
  's.careP': 'Nourishing and repairing hair treatments, plus beauty treatments.',
  's.nails': 'Manicure and pedicure',
  's.nailsP': 'Well-kept hands and feet, nail styling.',
  'price.from': 'from',
  'services.note': 'Prices to be filled in by the salon. The quickest way to book is by phone.',
  'trust.google': 'over 150 reviews on Google',
  'trust.orly': 'Orły Fryzjerstwa, Warsaw',
  'ph.salon': 'Salon photo',
  'ph.photo': 'Photo',
  'team.title': 'Team',
  'role.hair': 'hairdresser',
  'role.nails': 'manicure',
  'visit.title': 'Pańska 57',
  'visit.metro': 'Rondo ONZ metro, a few minutes on foot',
  'visit.tram': 'Trams and buses at Rondo ONZ',
  'map.show': 'Show on map'
};

const STATE = {
  pl: {
    open: t => `Otwarte do ${t}`,
    soon: t => `Otwieramy dziś o ${t}`,
    closed: (d, t) => `Zamknięte, otwieramy ${d} o ${t}`,
    tomorrow: 'jutro',
    days: ['w niedzielę', 'w poniedziałek', 'we wtorek', 'w środę', 'w czwartek', 'w piątek', 'w sobotę']
  },
  en: {
    open: t => `Open until ${t}`,
    soon: t => `Opening today at ${t}`,
    closed: (d, t) => `Closed, opening ${d} at ${t}`,
    tomorrow: 'tomorrow',
    days: ['on Sunday', 'on Monday', 'on Tuesday', 'on Wednesday', 'on Thursday', 'on Friday', 'on Saturday']
  }
};

const HOURS = [null, [7, 20], [7, 20], [7, 20], [7, 20], [7, 20], [8, 14]];
const MAP = 'https://www.google.com/maps?q=Salon+Fryzjerski,+Pa%C5%84ska+57,+Warszawa&output=embed';

const nodes = [...document.querySelectorAll('[data-i18n]')];
const PL = {};
nodes.forEach(el => {
  PL[el.dataset.i18n] = el.innerHTML;
});

let lang = 'pl';
let shown = '';

function warsawNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  const h = Number(get('hour')) % 24;
  const m = Number(get('minute'));
  return {
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')),
    hour: h + m / 60,
    text: `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}`
  };
}

function renderClock(text) {
  const clock = document.getElementById('clock');
  if (!clock.children.length) {
    [0, 1, 'sep', 2, 3].forEach(i => {
      const span = document.createElement('span');
      span.className = i === 'sep' ? 'flap flap--sep' : 'flap';
      span.textContent = i === 'sep' ? ':' : '';
      clock.appendChild(span);
    });
  }
  const digits = [...clock.querySelectorAll('.flap:not(.flap--sep)')];
  digits.forEach((el, i) => {
    if (el.textContent !== text[i]) {
      el.classList.remove('is-flip');
      void el.offsetWidth;
      el.classList.add('is-flip');
      setTimeout(() => {
        el.textContent = text[i];
      }, 220);
    }
  });
}

function render() {
  const now = warsawNow();
  if (now.text !== shown) {
    renderClock(now.text);
    shown = now.text;
  }
  const s = STATE[lang];
  const el = document.getElementById('state');
  const today = HOURS[now.day];
  if (today && now.hour >= today[0] && now.hour < today[1]) {
    el.textContent = s.open(`${today[1]}:00`);
    el.classList.add('is-open');
  } else if (today && now.hour < today[0]) {
    el.textContent = s.soon(`${today[0]}:00`);
    el.classList.remove('is-open');
  } else {
    let next = (now.day + 1) % 7;
    while (!HOURS[next]) next = (next + 1) % 7;
    const label = next === (now.day + 1) % 7 ? s.tomorrow : s.days[next];
    el.textContent = s.closed(label, `${HOURS[next][0]}:00`);
    el.classList.remove('is-open');
  }
  document.querySelectorAll('#week li').forEach(li => {
    li.classList.toggle('is-today', Number(li.dataset.day) === now.day);
  });
}

function setLang(next) {
  lang = next;
  const dict = lang === 'en' ? EN : PL;
  nodes.forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.langs button').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });
  render();
  try {
    localStorage.setItem('panska57.lang', lang);
  } catch (e) {}
}

document.querySelector('.langs').addEventListener('click', e => {
  const btn = e.target.closest('button[data-lang]');
  if (btn) setLang(btn.dataset.lang);
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open);
  nav.classList.toggle('is-open', open);
});

nav.addEventListener('click', e => {
  if (e.target.closest('a')) {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

document.getElementById('mapBtn').addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.src = MAP;
  frame.title = 'Pańska 57';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  document.getElementById('map').replaceChildren(frame);
});

let saved = null;
try {
  saved = localStorage.getItem('panska57.lang');
} catch (e) {}
const browser = (navigator.language || 'pl').slice(0, 2);
setLang(saved || (browser === 'pl' ? 'pl' : 'en'));
setInterval(render, 5000);
