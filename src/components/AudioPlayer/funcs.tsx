import { useState } from "react";
import constants from "./constants";
import testMusic1 from "../../assets/audio/ヨルシカ - だから僕は音楽を辞めた.mp3";
import testMusic2 from "../../assets/audio/樱 - 爱酱出场音频.mp3";

import { Howl, Howler } from "howler";
const sound = new Howl({
  src: [testMusic1],
});

export default (state) => {
  let seekInterval: any = null;

  const { operationIconMap } = constants();
  const { pause, music } = state;
  const { pauseState, setPauseState } = pause;
  const { musicTime, setMusicTime } = music;

  const [playList, setPlayList] = useState([testMusic1]);

  const handlePause = (btnGroups) => {
    setPauseState(!pauseState);

    if (pauseState) {
      btnGroups[1].src = operationIconMap.get("startIcon");
      btnGroups[1].tooltipText = "播放";
      sound.pause();
      clearInterval(seekInterval);
    } else {
      btnGroups[1].src = operationIconMap.get("pauseIcon");
      btnGroups[1].tooltipText = "暂停";
      const curMusicId = sound.play();
      setMusicTime(() => {
        let output = musicTime;
        output = [sound.seek(curMusicId), sound.duration(curMusicId)];
        return output;
      });
      seekInterval = setInterval(() => {
        setMusicTime(() => {
          let output = musicTime;
          output = [sound.seek(curMusicId), sound.duration(curMusicId)];
          return output;
        });
      }, 1000);
    }
  };

  const handleChange = (changeDirection: string) => {
    if (changeDirection == "pre") {
      console.log("pre");
    }
    if (changeDirection === "next") {
      console.log("next");
    }
  };

  const handleFavourite = () => {
    console.log("fav");
  };

  const handleShowPlayList = () => {
    console.log("playList");
  };

  const handleChangePlayType = () => {
    console.log("playType");
  };

  const operationControl = (operateBtn: string, [btnGroups, setBtnGroups]) => {
    const change = ["pre", "next"];
    if (change.includes(operateBtn)) {
      handleChange(operateBtn);
    }
    if (operateBtn === "pausePlay") {
      handlePause(btnGroups);
    }
    if (operateBtn === "favourite") {
      handleFavourite();
    }
    if (operateBtn === "showPlayList") {
      handleShowPlayList();
    }
    if (operateBtn === "playType") {
      handleChangePlayType();
    }
  };

  return { operationControl, handlePause };
};
