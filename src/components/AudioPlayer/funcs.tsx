import { useEffect, useState } from "react";
import testMusic1 from "../../assets/audio/ヨルシカ - だから僕は音楽を辞めた.mp3";
import testMusic2 from "../../assets/audio/樱 - 爱酱出场音频.mp3";

import { Howl, Howler } from "howler";

interface operationItem {
  src: string;
  tooltipText: string;
}

const musics = [testMusic1, testMusic2];
let sound;
let curMusicId;

sound = new Howl({
  src: musics[0],
});

export default function audioPlayerFuncs(state) {
  let seekInterval: any = null;

  const { pause, start, end } = state;
  const { pauseState, setPauseState } = pause;
  const { startTime, setStartTime } = start;
  const { endTime, setEndTime } = end;
  const [arrayStore, setArrayStore] = useState([]);

  const [playList, setPlayList] = useState([testMusic1]);

  useEffect(() => {
    if (arrayStore?.length) {
      if (pauseState) {
        sound.pause();
        clearInterval(seekInterval);
      } else {
        curMusicId = sound.play();

        setStartTime(sound.seek(curMusicId));
        setEndTime(sound.duration(curMusicId));

        seekInterval = setInterval(() => {
          setStartTime(sound.seek(curMusicId));
          setEndTime(sound.duration(curMusicId));
        }, 1000);
      }
    }
  }, [pauseState]);

  const handlePause = () => {
    setPauseState(!pauseState);
  };

  const handleChange = (changeDirection: string) => {
    console.log(seekInterval);

    if (changeDirection == "pre") {
      console.log("pre");
    }
    if (changeDirection === "next") {
      if (sound) {
        sound.stop(curMusicId);
        sound = null;
      }

      sound = new Howl({
        src: musics[1],
      });
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
      setArrayStore(btnGroups);
      handlePause();
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

  const handleSliderChange = (timeInfo: number) => {
    setStartTime(timeInfo);
    sound.seek(timeInfo, curMusicId);
  };

  return { operationControl, handlePause, handleSliderChange };
}
