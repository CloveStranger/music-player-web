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
  listPlayStatus = 0;
  listPlayStatusName = "列表循环";

  constructor() {
    makeAutoObservable(this);
  } 

  audioTimeAdd = () => {
    this.startTime = soundPlayer.seek(this.curMusicId);
  };

  endTimeMake = () => {
    this.endTime = soundPlayer.duration([this.curMusicId]);
  };

  playAudio = () => {
    this.curMusicId = soundPlayer.play();
    this.startTime = soundPlayer.seek(this.curMusicId);

    soundPlayer.on("play", () => {
      this.endTimeMake();
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
  audioMaker = () => {
    if (Object.entries(soundPlayer).length) {
      soundPlayer.stop();
    }
    soundPlayer = new Howl({
      src: this.musicList[this.curListNumer],
      loop: this.listPlayStatus === 1,
    });
  };

  audioEventMaker = () => {
    soundPlayer.off("end");
    if (this.listPlayStatus === 0) {
      soundPlayer.on("end", () => {
        this.next();
      });
    }
    if (this.listPlayStatus === 1) {
      soundPlayer.on("end", () => {
        this.audioMaker();
        this.changePauseState(false);
      });
    }
    if (this.listPlayStatus === 2) {
      soundPlayer.on("end", () => {
        this.next();
      });
    }
  };

  next = () => {
    this.curListNumer += 1;

    if (this.curListNumer > this.musicList.length - 1) {
      this.curListNumer = 0;
    }
    this.audioMaker();
    this.audioEventMaker();
    this.changePauseState(false);
  };

  pre = () => {
    this.curListNumer -= 1;
    this.audioMaker();
    this.audioEventMaker();
    this.changePauseState(false);
  };

  handleSliderChange = (timeInfo: number) => {
    this.startTime = timeInfo;
    soundPlayer.seek(timeInfo, this.curMusicId);
  };

  changeListPlayStatus = () => {
    this.listPlayStatus += 1;
    if (this.listPlayStatus > 2) {
      this.listPlayStatus = 0;
    }
    if (this.listPlayStatus === 0) {
      this.listPlayStatusName = "列表循环";
    }
    if (this.listPlayStatus === 1) {
      this.listPlayStatusName = "单曲循环";
    }
    if (this.listPlayStatus === 2) {
      this.listPlayStatusName = "随机播放";
    }

    this.audioEventMaker();
  };

  initAudio = async () => {
    this.audioMaker();
    this.audioEventMaker();
  };
}

export default new audioPlayerState();
