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
    this.section = document.createElement('section');
    this.section.id = this.key;
    this.section.classList.add('key');
    this.audio = document.createElement('audio'); 
    this.audio.src = `sounds/${this.name}.wav`;
    this.section.appendChild(this.audio);
    const h3 = document.createElement('h3'); 
    h3.textContent = this.key;
    this.section.appendChild(h3);
    const p = document.createElement('p'); 
    p.textContent = this.name;
    this.section.appendChild(p);
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
    this.section.classList.add('playing');
  }
  removePlayingState() {
    if (!this.section) return;
    if (this.section.className.includes('playing')) {
      this.section.classList.remove('playing');
    }
  }
}