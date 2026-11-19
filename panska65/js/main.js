const SERVICES = {
  mani: [
    ['m1', 'Manicure hybrydowy', 'Gel polish manicure', 150, 75],
    ['m2', 'Manicure hybrydowy ze wzmocnieniem', 'Gel polish manicure with strengthening', 180, 75],
    ['m3', 'Manicure OPI Nature Strong', 'OPI Nature Strong manicure', 110, 60, 'Wegańska formuła', 'Vegan formula'],
    ['m4', 'Manicure męski', 'Men’s manicure', 100, 60],
    ['m5', 'Laminacja paznokci', 'Nail lamination', 100, 45, 'Dodatek do manicure', 'Manicure add-on']
  ],
  pedi: [
    ['p1', 'Pedicure hybrydowy', 'Gel polish pedicure', 180, 75],
    ['p2', 'Pedicure klasyczny', 'Classic pedicure', 160, 75],
    ['p3', 'Pedicure ekspres hybrydowy', 'Express gel polish pedicure', 140, 60],
    ['p4', 'Pedicure ekspres klasyczny', 'Express classic pedicure', 120, 40],
    ['p5', 'Pedicure męski', 'Men’s pedicure', 160, 60]
  ],
  sets: [
    ['s1', 'Mani + pedi hybrydowy, dwie stylistki', 'Gel mani + pedi, two stylists', 340, 75, 'Robimy jednocześnie', 'Done at the same time'],
    ['s2', 'Mani + pedi klasyczny, dwie stylistki', 'Classic mani + pedi, two stylists', 280, 75, 'Robimy jednocześnie', 'Done at the same time'],
    ['s3', 'Mani + pedi hybrydowy, jedna stylistka', 'Gel mani + pedi, one stylist', 330, 150],
    ['s4', 'Mani + pedi klasyczny, jedna stylistka', 'Classic mani + pedi, one stylist', 260, 135],
    ['s5', 'Mani + pedi męski', 'Men’s mani + pedi', 280, 60]
  ],
  gel: [
    ['g1', 'Założenie żelu z hybrydą', 'Gel extensions with gel polish', 290, 120],
    ['g2', 'Uzupełnienie żelu z hybrydą', 'Gel infill with gel polish', 200, 120],
    ['g3', 'Założenie akrylu', 'Acrylic extensions', 290, 120],
    ['g4', 'Uzupełnienie akrylu z hybrydą', 'Acrylic infill with gel polish', 200, 120],
    ['g5', 'Zdjęcie żelu lub akrylu', 'Gel or acrylic removal', 80, 60],
    ['g6', 'Rekonstrukcja jednego paznokcia', 'Single nail repair', 40, 15]
  ],
  brows: [
    ['b1', 'Laminacja brwi', 'Brow lamination', 140, 60, 'Z henną i regulacją', 'With tint and shaping'],
    ['b2', 'Henna brwi i rzęs z regulacją', 'Brow and lash tint with shaping', 100, 30],
    ['b3', 'Henna brwi z regulacją', 'Brow tint with shaping', 70, 20],
    ['b4', 'Henna rzęs', 'Lash tint', 50, 20]
  ],
  wax: [
    ['w1', 'Całe nogi', 'Full legs', 150, 45],
    ['w2', 'Łydki', 'Lower legs', 90, 30],
    ['w3', 'Pachy, wosk Lycon', 'Underarms, Lycon wax', 90, 20],
    ['w4', 'Całe ręce', 'Full arms', 100, 30],
    ['w5', 'Wąsik, wosk Lycon', 'Upper lip, Lycon wax', 40, 15]
  ]
};

const EN = {
  'skip': 'Skip to content',
  'nav.prices': 'Prices',
  'nav.team': 'Team',
  'nav.rules': 'How to book',
  'nav.contact': 'Contact',
  'hero.score': 'from 1072 reviews on Booksy',
  'hero.title': 'Nails that stay perfect for weeks.',
  'hero.lead': 'Gel polish manicure and pedicure, gel, acrylic, tinting and waxing. Unhurried, with sterilised tools, a few minutes from Rondo ONZ metro.',
  'cta.book': 'Book on Booksy',
  'cta.calc': 'Price your visit',
  'cta.bookShort': 'Book this',
  'hero.hint': 'Pick a colour. We will do the rest in the salon.',
  'facts.reviews': 'reviews on Booksy',
  'facts.team': 'stylists on the team',
  'facts.cancel': 'to reschedule for free',
  'facts.duo': 'stylists at once for mani + pedi',
  'prices.title': 'Prices and calculator',
  'prices.lead': 'Tick the services and you will see the price and length of your visit right away.',
  'cat.mani': 'Manicure',
  'cat.pedi': 'Pedicure',
  'cat.sets': 'Sets',
  'cat.gel': 'Gel and acrylic',
  'cat.brows': 'Brows and lashes',
  'cat.wax': 'Waxing',
  'sum.title': 'Your visit',
  'sum.empty': 'Nothing selected yet.',
  'team.title': 'Who does your nails',
  'ph.photo': 'Photo',
  'ph.work': 'Work photo',
  'team.sylwia': 'Co-owner. Manicure, pedicure, gel and acrylic.',
  'team.karolina': 'Co-owner. Manicure, pedicure, gel and acrylic.',
  'team.emilia': 'Gel polish manicure and pedicure.',
  'team.natalia': 'Tinting, brow lamination, waxing.',
  'ig.more': 'More work on Instagram',
  'rules.title': 'How to book',
  'rules.1t': 'Book online',
  'rules.1': 'On Booksy, any time. You see free slots for every stylist.',
  'rules.2t': 'Change your mind',
  'rules.2': 'Cancelling or rescheduling is free up to 24 hours before your visit.',
  'rules.3t': 'Come in and relax',
  'rules.3': 'You can pay by card. Wi-Fi on site, and pets are welcome.',
  'rules.note': 'For later cancellations or no-shows the deposit is not refunded.',
  'visit.metro': 'A few minutes’ walk from Rondo ONZ metro',
  'days.wd': 'Mon – Fri',
  'days.sat': 'Saturday',
  'days.sun': 'Sunday',
  'days.closed': 'closed',
  'map.show': 'Show map',
  'dock.label': 'Book'
};

const STATUS = {
  pl: {
    open: t => `Otwarte do ${t}`,
    today: t => `Zamknięte, otwieramy dziś o ${t}`,
    later: (d, t) => `Zamknięte, otwieramy ${d} o ${t}`,
    tomorrow: 'jutro',
    days: ['w niedzielę', 'w poniedziałek', 'we wtorek', 'w środę', 'w czwartek', 'w piątek', 'w sobotę']
  },
  en: {
    open: t => `Open until ${t}`,
    today: t => `Closed, opening today at ${t}`,
    later: (d, t) => `Closed, opening ${d} at ${t}`,
    tomorrow: 'tomorrow',
    days: ['on Sunday', 'on Monday', 'on Tuesday', 'on Wednesday', 'on Thursday', 'on Friday', 'on Saturday']
  }
};

const HOURS = [null, [9, 21], [9, 21], [9, 21], [9, 21], [9, 21], [9, 15]];
const MAP = 'https://www.google.com/maps?q=Salon+Pa%C5%84ska+65,+Pa%C5%84ska+65,+Warszawa&output=embed';
const ALL = Object.values(SERVICES).flat();

const nodes = [...document.querySelectorAll('[data-i18n]')];
const PL = {};
nodes.forEach(el => {
  PL[el.dataset.i18n] = el.innerHTML;
});

const picked = new Set();
let lang = 'pl';
let tab = 'mani';

const list = document.getElementById('list');

function duration(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function renderList() {
  list.replaceChildren(...SERVICES[tab].map(s => {
    const [id, pl, en, price, time, notePl, noteEn] = s;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'svc';
    btn.dataset.id = id;
    btn.setAttribute('aria-pressed', picked.has(id));
    const note = lang === 'en' ? noteEn : notePl;
    btn.innerHTML = `
      <span>
        <span class="svc__name">${lang === 'en' ? en : pl}</span>
        <span class="svc__note">${duration(time)}${note ? ` · ${note}` : ''}</span>
      </span>
      <span class="svc__price">${price} zł</span>
      <span class="svc__add" aria-hidden="true">+</span>`;
    return btn;
  }));
  list.style.animation = 'none';
  void list.offsetWidth;
  list.style.animation = '';
}

function renderSum() {
  const chosen = ALL.filter(s => picked.has(s[0]));
  const price = chosen.reduce((a, s) => a + s[3], 0);
  const time = chosen.reduce((a, s) => a + s[4], 0);
  document.getElementById('sumItems').replaceChildren(...chosen.map(s => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${lang === 'en' ? s[2] : s[1]}</span><span>${s[3]} zł</span>`;
    return li;
  }));
  document.getElementById('sumEmpty').hidden = chosen.length > 0;
  document.getElementById('sumPrice').textContent = `${price} zł`;
  document.getElementById('sumTime').textContent = duration(time);
  document.getElementById('dockSum').textContent = chosen.length ? `${price} zł · ${duration(time)}` : '';
  document.getElementById('dock').classList.toggle('is-on', chosen.length > 0);
}

list.addEventListener('click', e => {
  const btn = e.target.closest('.svc');
  if (!btn) return;
  const id = btn.dataset.id;
  if (picked.has(id)) picked.delete(id);
  else picked.add(id);
  btn.setAttribute('aria-pressed', picked.has(id));
  renderSum();
});

document.querySelector('.chips').addEventListener('click', e => {
  const btn = e.target.closest('[data-tab]');
  if (!btn) return;
  tab = btn.dataset.tab;
  document.querySelectorAll('.chips [role="tab"]').forEach(t => {
    t.setAttribute('aria-selected', t === btn);
  });
  btn.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  renderList();
});

const hand = document.getElementById('hand');
document.querySelector('.swatches').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  document.querySelectorAll('.swatches button').forEach(b => {
    b.setAttribute('aria-checked', b === btn);
  });
  hand.style.setProperty('--polish-now', getComputedStyle(btn).getPropertyValue('--c'));
  hand.classList.remove('is-painting');
  void hand.offsetWidth;
  hand.classList.add('is-painting');
});

function warsawNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, hour: Number(get('hour')) % 24 + Number(get('minute')) / 60 };
}

function renderStatus() {
  const el = document.getElementById('status');
  const s = STATUS[lang];
  const { day, hour } = warsawNow();
  const today = HOURS[day];
  if (today && hour >= today[0] && hour < today[1]) {
    el.textContent = s.open(`${today[1]}:00`);
    el.classList.add('is-open');
  } else if (today && hour < today[0]) {
    el.textContent = s.today(`${today[0]}:00`);
    el.classList.remove('is-open');
  } else {
    let next = (day + 1) % 7;
    while (!HOURS[next]) next = (next + 1) % 7;
    const label = next === (day + 1) % 7 ? s.tomorrow : s.days[next];
    el.textContent = s.later(label, `${HOURS[next][0]}:00`);
    el.classList.remove('is-open');
  }
  const rows = document.querySelectorAll('.hours div');
  rows.forEach(r => r.classList.remove('is-today'));
  rows[day === 0 ? 2 : day === 6 ? 1 : 0].classList.add('is-today');
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
  renderList();
  renderSum();
  renderStatus();
  try {
    localStorage.setItem('panska65.lang', lang);
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
  frame.title = 'Salon Pańska 65';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  document.getElementById('map').replaceChildren(frame);
});

let saved = null;
try {
  saved = localStorage.getItem('panska65.lang');
} catch (e) {}
const browser = (navigator.language || 'pl').slice(0, 2);
setLang(saved || (browser === 'pl' ? 'pl' : 'en'));
setInterval(renderStatus, 60000);
