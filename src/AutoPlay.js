import UI from './UI.js';

export default class AutoPlay {
  constructor(percussionArray) {
    this.intervalId = null;
    this.percussionArray = percussionArray;
    UI.$('input[name=toggler]').addEventListener('change', (e) => {
      e.target.checked ? this.startPlaying() : this.stopPlaying();
    });
  }
  startPlaying() {
    this.intervalId = setInterval(() => {
      const randomNum = this.getRandomInt(this.percussionArray.length);
      this.percussionArray[randomNum].playAudio();
      this.percussionArray[randomNum].addPlayingState();
    }, 250);
  }
  stopPlaying() {
    clearInterval(this.intervalId);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}