import { useState } from "react";
import constants from "./constants";

export default () => {
  const { operationIconMap, leftBtnGroups, rightBtnGroups } = constants();
  const [pauseState, setPauseState] = useState(true);
  const [musicTime, setMusicTime] = useState([0, 120]);
  const [leftBtns, setLeftBtns] = useState(leftBtnGroups);
  const [rightBtns, setRightBtns] = useState(leftBtnGroups);

  return {
    pause: { pauseState, setPauseState },
    music: { musicTime, setMusicTime },
  };
};
