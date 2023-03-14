import { useEffect, useState } from "react";
import constants from "./constants";
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

export default (state) => {
  let seekInterval: any = null;

  const { operationIconMap } = constants();
  const { pause, music } = state;
  const { pauseState, setPauseState } = pause;
  const { musicTime, setMusicTime } = music;
  const [arrayStore, setArrayStore] = useState([]);

  const [playList, setPlayList] = useState([testMusic1]);

  useEffect(() => {
    if (arrayStore?.length) {
      const targetIcon: operationItem = arrayStore[1];

      if (pauseState) {
        setArrayStore((): any => {
          targetIcon.src = operationIconMap.get("startIcon") || "";
          targetIcon.tooltipText = "播放";
          return targetIcon;
        });

        sound.pause();
        clearInterval(seekInterval);
      } else {
        console.log(false);

        setArrayStore((): any => {
          targetIcon.src = operationIconMap.get("pauseIcon") || "";
          targetIcon.tooltipText = "暂停";
          return targetIcon;
        });

        curMusicId = sound.play();
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
    }
  }, [pauseState]);

  const handlePause = () => {
    setPauseState(!pauseState);
  };

  const handleChange = (changeDirection: string) => {
    setPauseState(false);
    if (changeDirection == "pre") {
      console.log("pre");
    }
    if (changeDirection === "next") {
      if (sound) {
        sound.stop(curMusicId);
      }
      sound = new Howl({
        src: musics[1],
      });
      sound.play();
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
      handlePause();
      setArrayStore(btnGroups);
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
