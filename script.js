import Percussion from './src/Percussion.js';
import AutoPlay from './src/AutoPlay.js';
import UI from './src/UI.js';

const keyMap = {
  "A": "hihat", 
  "S": "openhat",
  "D": "ride",
  "F": "snare",
  "G": "kick",
  "H": "tom",
  "J": "boom",
  "K": "clap",
  "L": "tink"
}

const percussionArray = [];

Object.entries(keyMap).forEach(([key, name]) => {
  percussionArray.push(new Percussion(key, name));
});

new AutoPlay(percussionArray);

window.addEventListener('keydown', (e) => {
  const found = percussionArray.find(item => {
    return item.key === e.key.toUpperCase();
  });
  if (!found) return;
  found.playAudio();
  found.addPlayingState();
});

window.addEventListener('DOMContentLoaded', (e) => {
  UI.$('.drums').focus();
  UI.$('.drums').click();
});
