import { Percussion } from './src/Percussion.js';
import { AutoPlay } from './src/AutoPlay.js';

const $ = (selector) => document.querySelector(selector);

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

const percussionArray = [];

Object.entries(keyMap).forEach(([key, name]) => {
  percussionArray.push(new Percussion(key, name));
});

new AutoPlay(percussionArray);

window.addEventListener('keydown', (e) => {
  const found = percussionArray.find(item => item.key === e.key);
  if (!found) return;
  found.playAudio();
  found.addPlayingState();
});

window.addEventListener('DOMContentLoaded', (e) => {
  $('.drums').focus();
  $('.drums').click();
});
