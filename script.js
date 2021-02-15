import Percussion from './src/Percussion.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const keyMap = {
  "a": "hihat", 
  "s": "openhat",
  "d": "ride",
  "f": "snare",
  "g": "kick",
  "h": "tom",
  "j": "boom",
  "k": "clap",
  "l": "tink"
}

const percussion = [];

Object.entries(keyMap).forEach(([key, name]) => {
  percussion.push(new Percussion(key, name));
});

// window.addEventListener('keydown', (e) => playsound(e, e.key) );