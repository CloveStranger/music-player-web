import testLogo from "../../../assets/jpg/backgroundPic.jpg";
import { Slider } from "antd";
import ConfigClsName from "../../../utils/configClsName";
import configMusicTime from "../../../utils/configMusicTime";
import LeftControl from "../LeftOperationEl";
import audioPlayerState from "../state";
import { observer } from "mobx-react";

export default function Controls() {
  const state = audioPlayerState;
  const prefixCls = "audio-player";
  const { initAudio, playAudio } = state;

  initAudio();

  const MusicImg = observer(() => {
    const { pauseState } = state;
    return (
      <>
        <img
          src={testLogo}
          className={ConfigClsName(prefixCls, [
            "audio-preview-img",
            pauseState
              ? "audio-preview-img-no-rotate"
              : "audio-preview-img-rotate",
          ])}
        ></img>
      </>
    );
  });

  const StartTimeEl = observer(() => {
    const { startTime } = state;
    return (
      <>
        <span className={ConfigClsName(prefixCls, "time-text")}>
          {configMusicTime(startTime)}
        </span>
      </>
    );
  });

  const MusicScrollBar = observer(() => {
    const { startTime, endTime, handleSliderChange } = state;
    return (
      <>
        <Slider
          className={ConfigClsName(prefixCls, "audio-track")}
          defaultValue={startTime}
          tooltip={{
            formatter: (value) => {
              return configMusicTime(value ?? 60);
            },
          }}
          min={0}
          max={endTime}
          value={startTime}
          onChange={handleSliderChange}
        ></Slider>
      </>
    );
  });

  const EndTimeEl = observer(() => {
    const { endTime } = state;

    return (
      <>
        <span className={ConfigClsName(prefixCls, "time-text")}>
          {configMusicTime(endTime)}
        </span>
      </>
    );
  });

  return (
    <div className={ConfigClsName(prefixCls, "control-container")}>
      <div className={ConfigClsName(prefixCls, "control-left-part")}>
        <MusicImg></MusicImg>
        <div className={ConfigClsName(prefixCls, "audio-info")}>
          <span>Music Name</span>
          <span>Music Author</span>
        </div>
      </div>
      <div className={ConfigClsName(prefixCls, "control-center-part")}>
        <LeftControl></LeftControl>
        <StartTimeEl></StartTimeEl>
        <MusicScrollBar></MusicScrollBar>
        <EndTimeEl></EndTimeEl>
      </div>
      <div className={ConfigClsName(prefixCls, "control-right-part")}></div>
    </div>
  );
}
