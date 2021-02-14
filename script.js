const drums = {
  "A": "clap",
  "S": "hihat",
  "D": "kick",
  "F": "openhat",
  "G": "boom",
  "H": "ride",
  "J": "snare",
  "K": "tom",
  "L": "tink"
}

function playsound(key) {
  const audio = document.querySelector(`section#${key} > audio`);
  const btn = document.querySelector(`section#${key}`);
  btn.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;f
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', (e) => {
    const key = e.currentTarget.id;
    playsound(key);
  });
});

window.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  playsound(key);
});
