import { Sound } from './Sound.js';

export class Percussion {
  constructor(key, name) {
    this.key = key;
    this.name = name;
    this.add();
  }
  $(selector) {
    return document.querySelector(selector);
  }
  add() {
    this.sound = new Sound(this.name);
    this.section = document.createElement('section');
    this.section.id = this.key;
    this.section.dataset.playing = false;
    this.section.classList.add('btn', 'morph');
    this.section.innerHTML = `
      <h3>${this.key}</h3>
      <p>${this.name}</p>
    `;
    this.section.addEventListener('click', (e) => {
      this.playAudio();
      this.addPlayingState();
    });
    this.section.addEventListener('animationend', (e) => {
      this.removeMorph();
      this.removePlayingState();
    });
    this.$('.drums').appendChild(this.section);
  }
  playAudio() {
    if (!this.sound) return;
    this.sound.play();
  }
  addPlayingState() {
    this.section.dataset.playing = true;
  }
  removeMorph() {
    if (this.section.classList.contains('morph')) {
      this.section.classList.remove('morph');
    }
  }
  removePlayingState() {
    if (!this.section) return;
    if (Boolean(this.section.dataset.playing)) {
      this.section.dataset.playing = false;
    }
  }
}