export default class Percussion {
  constructor(key, name) {
    this.key = key;
    this.name = name;
    this.add();
  }
  $(selector) {
    return document.querySelector(selector);
  }
  add() {
    this.audio = new Audio(`sounds/${this.name}.wav`);
    this.section = document.createElement('section');
    this.section.id = this.key;
    this.section.dataset.playing = false;
    this.section.classList.add('key');
    this.section.innerHTML = `
      <h3>${this.key}</h3>
      <p>${this.name}</p>
    `;
    this.section.addEventListener('click', (e) => {
      this.playAudio();
      this.addPlayingState();
    });
    this.section.addEventListener('transitionend', (e) => this.removePlayingState());
    this.$('.drums').appendChild(this.section);
  }
  playAudio() {
    if (!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();
  }
  addPlayingState() {
    this.section.dataset.playing = true;
  }
  removePlayingState() {
    if (!this.section) return;
    if (Boolean(this.section.dataset.playing)) {
      this.section.dataset.playing = false;
    }
  }
}