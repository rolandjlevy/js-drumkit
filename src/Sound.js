export default class Sound {
  constructor(src) {
    this.audio = new Audio(`sounds/${src}.wav`);
    this.audio.setAttribute('preload', 'auto');
    this.audio.setAttribute('muted', false);
  }
  play(src) {
    this.audio.pause();
    this.audio.currentTime = 0;
    const playPromise = this.audio.play();
    if (playPromise) {
      playPromise.then(() => {
        setTimeout(() => this.audio.play(), 1);
      }).catch(error => {
        console.log({error});
      });
    }
  }
}