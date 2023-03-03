import { useState } from "react";

export default () => {
  const [pauseState, setPauseState] = useState(true);
  const [musicTime, setMusicTime] = useState([0, 120]);

  return {
    pause: { pauseState, setPauseState },
    music: { musicTime, setMusicTime },
  };
};
