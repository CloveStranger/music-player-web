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
  curListNumer = 0;

  constructor() {
    makeAutoObservable(this);
  }
  initAudio = async () => {
    soundPlayer = new Howl({
      src: this.musicList[this.curListNumer],
    });
  };

  audioTimeAdd = () => {
    this.startTime = soundPlayer.seek(this.curMusicId);
  };

  endTimeMakee = () => {
    this.endTime = soundPlayer.duration([this.curMusicId]);
  };

  playAudio = () => {
    this.curMusicId = soundPlayer.play();
    this.startTime = soundPlayer.seek(this.curMusicId);

    soundPlayer.on("play", () => {
      this.endTimeMakee();
    });

    this.playTimeInterval = setInterval(() => {
      this.audioTimeAdd();
    }, 1000);
  };

  pauseAudio = () => {
    soundPlayer.pause();
    clearInterval(this.playTimeInterval);
  };

  changePauseState = (playSignal: any) => {
    if (typeof playSignal !== "undefined" && typeof playSignal !== "object") {
      this.pauseState = playSignal;
    } else {
      this.pauseState = !this.pauseState;
    }

    if (this.pauseState) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  };

  next = () => {
    this.curListNumer += 1;
    if (Object.entries(soundPlayer).length) {
      soundPlayer.stop();
    }
    soundPlayer = soundPlayer = new Howl({
      src: this.musicList[this.curListNumer],
    });
    this.changePauseState(false);
  };

  pre = () => {
    this.curListNumer -= 1;
    if (Object.entries(soundPlayer).length) {
      soundPlayer.stop();
    }
    soundPlayer = soundPlayer = new Howl({
      src: this.musicList[this.curListNumer],
    });
    this.changePauseState(false);
  };

  handleSliderChange = (timeInfo: number) => {
    this.startTime = timeInfo;
    soundPlayer.seek(timeInfo, this.curMusicId);
  };
}

export default new audioPlayerState();
