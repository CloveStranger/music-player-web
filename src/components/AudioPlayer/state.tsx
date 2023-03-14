import { makeAutoObservable } from "mobx";

class audioPlayerState {
  pauseState = true;
  startTime = 0;
  endTime = 120;
  constructor() {
    makeAutoObservable(this);
  }

  changePauseState = () => {
    console.log("123");

    this.pauseState = !this.pauseState;
  };

  handleSliderChange = (timeInfo: number) => {
    this.startTime = timeInfo;
  };
}

export default audioPlayerState;
