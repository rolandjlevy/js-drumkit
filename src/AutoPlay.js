export class AutoPlay {
  constructor(percussionArray) {
    this.intervalId = null;
    this.percussionArray = percussionArray;
    this.$('input[name=toggler]').addEventListener('change', (e) => {
      e.target.checked ? this.startPlaying(percussionArray) : this.stopPlaying();
    });
  }
  $(selector) {
    return document.querySelector(selector);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  startPlaying(percussion) {
    this.intervalId = setInterval(() => {
      const randomNum = this.getRandomInt(percussion.length);
      percussion[randomNum].playAudio();
      percussion[randomNum].addPlayingState();
    }, 200);
  }
  stopPlaying() {
    clearInterval(this.intervalId);
  }
}