import { remaining } from './countdown.mjs';
import { pixelText, drink, corgi } from './art.mjs';

const message = "hey angie. you got this. keep grinding. you're almost there until thanksgiving. this is a timer until you see me again.";
const storageKey = 'gift-for-angie:intro-complete:v1';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const loading = document.querySelector('#loading');
const intro = document.querySelector('#intro');
const countdown = document.querySelector('#countdown');
const typed = document.querySelector('#typed');
const digits = document.querySelector('#digits');
const fields = ['days', 'hours', 'minutes', 'seconds'];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let previous = '';
let started = false;

document.querySelector('#loading-label').innerHTML = pixelText('LOADING');
document.querySelector('#drink-art').innerHTML = drink;
document.querySelector('#dog-art').innerHTML = corgi;

function updateTimer() {
  const time = remaining();
  const key = fields.map(field => time[field]).join(':');
  if (key !== previous) {
    digits.innerHTML = fields.map(field => `<div class="unit"><div class="number">${pixelText(String(time[field]).padStart(2,'0'))}</div><p class="unit-label">${field}</p></div>`).join('');
    digits.setAttribute('aria-label', fields.map(field => `${time[field]} ${field}`).join(', '));
    previous = key;
  }
  if(time.done && !countdown.classList.contains('celebrating')) {
    countdown.classList.add('celebrating');
    document.querySelector('#timer-heading').textContent = 'finally. come here ♡';
    document.querySelector('.target-date').textContent = 'the wait is over.';
    document.querySelector('.countdown footer p').textContent = 'right where we belong. together.';
    document.querySelector('#timer-heading').setAttribute('role', 'status');
  }
}

function showCountdown() {
  loading.hidden = true;
  intro.hidden = true;
  countdown.hidden = false;
  if (!started) {
    started = true;
    updateTimer();
    setInterval(updateTimer, 250);
  }
  try { localStorage.setItem(storageKey, 'yes'); } catch { /* Still works when browser storage is unavailable. */ }
}

async function runIntro() {
  let seen = false;
  try { seen = localStorage.getItem(storageKey) === 'yes'; } catch { /* Treat as a first visit. */ }
  if (seen || reducedMotion.matches || remaining().done) { showCountdown(); return; }
  await sleep(1700);
  if(started)return;
  loading.hidden = true;
  intro.hidden = false;
  // Weighted pauses make punctuation feel like a person typing.
  const weights = [...message].map(char => char === '.' ? 6 : char === ' ' ? 1.3 : 1);
  const baseDelay = 9000 / weights.reduce((a,b) => a+b,0);
  for(let i=0; i<message.length; i++) {
    if(started)return;
    typed.textContent = message.slice(0,i+1);
    await sleep(baseDelay * weights[i]);
  }
  await sleep(5000);
  if(started)return;
  intro.classList.add('fade-out');
  await sleep(700);
  showCountdown();
}

reducedMotion.addEventListener('change', event => { if(event.matches)showCountdown(); });
document.addEventListener('visibilitychange', () => { if(!document.hidden && started)updateTimer(); });
runIntro();
