import { makeAutoObservable, observable } from "mobx";
import { Howl, Howler } from "howler";
import music1 from "../../assets/audio/ヨルシカ - だから僕は音楽を辞めた.mp3";
import music2 from "../../assets/audio/樱 - 爱酱出场音频.mp3";

const musics = [music1, music2];

let soundPlayer: any = {};

class audioPlayerState {
  pauseState = true;
  startTime = 0;
  endTime = 0;
  musicList = musics;
  curMusicId = -1;
  playTimeInterval = -1;

  constructor() {
    makeAutoObservable(this);
  }
  initAudio = async () => {
    soundPlayer = new Howl({
      src: this.musicList[0],
    });
  };

  playAudio = () => {
    this.curMusicId = soundPlayer.play();
    this.startTime = soundPlayer.seek(this.curMusicId);
    this.endTime = soundPlayer.duration([this.curMusicId]);

    this.playTimeInterval = setInterval(() => {
      this.startTime = soundPlayer.seek(this.curMusicId);
    }, 1000);
  };

  pauseAudio = () => {
    soundPlayer.pause();
    clearInterval(this.playTimeInterval);
  };

  changePauseState = () => {
    this.pauseState = !this.pauseState;

    if (this.pauseState) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  };

  handleSliderChange = (timeInfo: number) => {
    this.startTime = timeInfo;
  };

  next = () => {
    this.endTime += 1;
    console.log(this.endTime);
  };
}

export default new audioPlayerState();
