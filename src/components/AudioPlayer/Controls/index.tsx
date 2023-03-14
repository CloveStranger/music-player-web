import operationEl from "../OperationEl";
import testLogo from "../../../assets/jpg/backgroundPic.jpg";
import { Slider } from "antd";
import ConfigClsName from "../../../utils/configClsName";
import constants from "../constants";
import state from "../state";
import configMusicTime from "../../../utils/configMusicTime";

export default function Controls() {
  const { prefixCls } = constants();
  const localState = state();
  const { music, pause } = localState;
  const { musicTime, setMusicTime } = music;
  const { pauseState, setPauseState } = pause;

  return (
    <div className={ConfigClsName(prefixCls, "control-container")}>
      <div className={ConfigClsName(prefixCls, "control-left-part")}>
        <img
          src={testLogo}
          className={ConfigClsName(prefixCls, [
            "audio-preview-img",
            pauseState
              ? "audio-preview-img-no-rotate"
              : "audio-preview-img-rotate",
          ])}
        ></img>
        <div className={ConfigClsName(prefixCls, "audio-info")}>
          <span>Music Name</span>
          <span>Music Author</span>
        </div>
      </div>
      <div className={ConfigClsName(prefixCls, "control-center-part")}>
        <div className={ConfigClsName(prefixCls, "operation-button-groups")}>
          <>{operationEl("left", localState)}</>
        </div>
        <span className={ConfigClsName(prefixCls, "time-text")}>
          {configMusicTime(musicTime[0])}
        </span>
        <Slider
          className={ConfigClsName(prefixCls, "audio-track")}
          defaultValue={musicTime[0]}
          tooltip={{
            formatter: (value) => {
              return configMusicTime(value ?? 60);
            },
          }}
          min={0}
          max={musicTime[1]}
          value={musicTime[0]}
        ></Slider>
        <span className={ConfigClsName(prefixCls, "time-text")}>
          {configMusicTime(musicTime[1])}
        </span>
      </div>
      <div className={ConfigClsName(prefixCls, "control-right-part")}>
        <>{operationEl("right", localState)}</>
      </div>
    </div>
  );
}
