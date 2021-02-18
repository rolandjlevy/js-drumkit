import { Percussion } from './src/Percussion.js';

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

const percussion = [];

Object.entries(keyMap).forEach(([key, name]) => {
  percussion.push(new Percussion(key, name));
});

window.addEventListener('keydown', (e) => {
  const found = percussion.find(item => item.key === e.key);
  if (!found) return;
  found.playAudio();
  found.addPlayingState();
});

// Add randomisation

let intervalId;

const getRandomInt = (max) =>  Math.floor(Math.random() * Math.floor(max));

function startPlaying() {
  intervalId = setInterval(() => {
    const randomNum = getRandomInt(percussion.length);
    percussion[randomNum].playAudio();
    percussion[randomNum].addPlayingState();
  }, 200);
}

function stopPlaying() {
  clearInterval(intervalId);
}

window.addEventListener('DOMContentLoaded', (e) => {
  $('.drums').focus();
  $('.drums').click();
});

$('input[name=toggler]').addEventListener('change', (e) => {
  e.target.checked ? startPlaying() : stopPlaying();
});
