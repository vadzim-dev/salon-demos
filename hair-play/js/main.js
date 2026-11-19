const EN = {
  'skip': 'Skip to content',
  'logo.sub': 'hair salon',
  'nav.salon': 'Salon',
  'nav.prices': 'Prices',
  'nav.team': 'Team',
  'nav.contact': 'Contact',
  'cta.book': 'Book a visit',
  'cta.bookLong': 'Book on Booksy',
  'cta.prices': 'See prices',
  'cta.pickTime': 'Pick a time on Booksy',
  'hero.place': 'Al. Jerozolimskie 45 · Hotel Polonia Palace',
  'hero.title': 'Colour that grows out beautifully.',
  'hero.lead': 'A small salon run by Marzena Wiśniewska in the very centre of Warsaw. Balayage, colouring and cuts that still look good a month after your visit.',
  'proof.booksy': '657 reviews on Booksy',
  'proof.orly': 'gold medals, Orły Fryzjerstwa',
  'ph.interior': 'Salon interior photo',
  'ph.work': 'Balayage result',
  'ph.portrait': 'Portrait',
  'salon.title': 'A place with soul, not a conveyor belt.',
  'salon.p1': 'Hair Play is Marzena Wiśniewska’s own salon. We are a small team, so every visit gets time: first a talk and a colour consultation, then the work.',
  'salon.p2': 'The salon is inside Hotel Polonia Palace, opposite Warsaw Central Station. Our guests are locals from Śródmieście, hotel guests and people who travel across the city to see us.',
  'salon.t1': 'Colour consultation before every colouring',
  'salon.t2': 'Olaplex and Kérastase care',
  'salon.t3': 'Service in Polish and English',
  'prices.title': 'Prices',
  'prices.lead': 'Prices depend on hair length and thickness. We confirm the exact price at a consultation before the service.',
  'tab.color': 'Colour',
  'tab.cut': 'Haircuts',
  'tab.style': 'Styling',
  'tab.care': 'Care',
  'tab.keratin': 'Keratin',
  's.balayage': 'Balayage',
  's.balayageLong': 'Balayage, long hair',
  's.colorOne': 'Single-process colour',
  's.colorOneLong': 'Single-process colour, long hair',
  's.colorMulti': 'Multi-tone colour',
  's.decolor': 'Colour removal',
  's.cutW': 'Women’s haircut',
  's.cutM': 'Men’s haircut',
  's.cutMLong': 'Men’s haircut, hair 15 cm+',
  's.cutKid': 'Kids’ haircut, under 12',
  's.fringe': 'Fringe trim',
  's.blow': 'Blow-dry',
  's.blowLong': 'Blow-dry, long hair',
  's.waves': 'Curls and waves',
  's.updo': 'Occasion updo',
  's.olaAdd': 'Olaplex added to colour',
  's.olaRegen': 'Olaplex treatment',
  's.kerAdd': 'Kérastase add-on',
  's.kerIntense': 'Kérastase intensive treatment',
  's.kerPremiere': 'Kérastase Première',
  's.kerShort': 'Keratin smoothing, short hair',
  's.kerMid': 'Keratin smoothing, medium hair',
  's.kerLong': 'Keratin smoothing, long hair',
  'team.title': 'Who will take care of your hair',
  'team.marzena': 'Master hairdresser and salon owner. Colour, balayage, haircuts.',
  'team.grazyna': 'Hairdresser. Haircuts, blow-dries and updos.',
  'team.medals': 'Laureate of the Orły Fryzjerstwa poll in Warsaw, gold medals year after year.',
  'visit.title': 'Visit us',
  'visit.hotel': 'Hotel Polonia Palace',
  'days.wd': 'Monday – Friday',
  'days.sat': 'Saturday',
  'days.sun': 'Sunday',
  'days.closed': 'closed',
  'map.show': 'Show map',
  'map.note': 'Google Maps loads after you click'
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

const HOURS = [null, [9, 20], [9, 20], [9, 20], [9, 20], [9, 20], [9, 17]];
const MAP = 'https://www.google.com/maps?q=Hair+Play,+Aleje+Jerozolimskie+45,+Warszawa&output=embed';

const nodes = [...document.querySelectorAll('[data-i18n]')];
const PL = {};
nodes.forEach(el => {
  PL[el.dataset.i18n] = el.innerHTML;
});

let lang = 'pl';

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
  const rows = document.querySelectorAll('.hours tr');
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
  renderStatus();
  try {
    localStorage.setItem('hairplay.lang', lang);
  } catch (e) {}
}

document.querySelector('.langs').addEventListener('click', e => {
  const btn = e.target.closest('button[data-lang]');
  if (btn) setLang(btn.dataset.lang);
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.setAttribute('aria-selected', t === tab));
    document.querySelectorAll('[data-panel]').forEach(panel => {
      panel.hidden = panel.dataset.panel !== tab.dataset.tab;
    });
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
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
  frame.title = 'Hair Play';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  document.getElementById('map').replaceChildren(frame);
});

let saved = null;
try {
  saved = localStorage.getItem('hairplay.lang');
} catch (e) {}
const browser = (navigator.language || 'pl').slice(0, 2);
setLang(saved || (browser === 'pl' ? 'pl' : browser ? 'en' : 'pl'));
setInterval(renderStatus, 60000);
