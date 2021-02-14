const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const drums = {
  "a": "clap",
  "s": "hihat",
  "d": "kick",
  "f": "openhat",
  "g": "boom",
  "h": "ride",
  "j": "snare",
  "k": "tom",
  "l": "tink"
}

function addDrum(key, value) {
  return `
  <section id="${key}" class="key btn">
    <audio src="sounds/${value}.wav"></audio>
    <h3>${key}</h3>
    <p>${value}</p>
  </section>`;
}

$('.drums').innerHTML = Object.entries(drums).map(([key, value]) => addDrum(key, value)).join('');

function playsound(key) {
  const audio = $(`section#${key} > audio`);
  const btn = $(`section#${key}`);
  btn.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

$$('.key').forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', (e) => playsound(e.currentTarget.id) );
});

window.addEventListener('keydown', (e) => playsound(e.key) );