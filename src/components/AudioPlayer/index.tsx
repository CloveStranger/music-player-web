import testAudio from "../../assets/audio/ヨルシカ - だから僕は音楽を辞めた.mp3";
import testLogo from "../../assets/jpg/backgroundPic.jpg";
import audioArrowIcon from "../../assets/svg/audioArrow.svg";
import pauseIcon from "../../assets/svg/pauseIcon.svg";
import startIcon from "../../assets/svg/startIcon.svg";
import favouriteIcon from "../../assets/svg/favouriteIcon.svg";
import bottomPlayListIcon from "../../assets/svg/bottomPlayListIcon.svg";
import singleCircleIcon from "../../assets/svg/singleCircle.svg";
import listCircleIcon from "../../assets/svg/listCircle.svg";
import randomPlay from "../../assets/svg/randomPlay.svg";
import "./index.scss";

import ConfigClsName from "../../utils/configClsName";
import * as LocalHower from "howler";
import { useState } from "react";
import { Slider } from "antd";

const prefixCls = "audio-player";

const initBtnGroups = [
  {
    id: 1,
    src: audioArrowIcon,
    cls: "back-arrow",
  },
  {
    id: 2,
    src: pauseIcon,
    cls: "pause-icon",
  },
  {
    id: 3,
    src: audioArrowIcon,
    cls: "forward-arrow",
  },
];

const initExtraBtnGroups = [
  {
    id: 1,
    src: favouriteIcon,
    cls: "back-arrow",
  },
  {
    id: 2,
    src: bottomPlayListIcon,
    cls: "back-arrow",
  },
  {
    id: 3,
    src: singleCircleIcon,
    cls: "back-arrow",
  },
];

export default () => {
  const { howl, howler } = LocalHower;

  const [operationBtnGroups, setOperationBtnGroups] = useState(initBtnGroups);
  const [extraBtnGroups, setExtraBtnGroups] = useState(initExtraBtnGroups);
  const [pauseState, setPauseState] = useState(false);

  const playControl = (operateBtn: string) => {
    if (operateBtn !== "pause-icon") {
      return;
    }
    setPauseState(!pauseState);
    if (pauseState) {
      operationBtnGroups[1].src = startIcon;
    } else {
      operationBtnGroups[1].src = pauseIcon;
    }
  };

  const operationButtonEls = (btnGroups) => {
    return btnGroups.map((item) => {
      const { id, src, cls } = item;
      return (
        <img
          key={id}
          src={src}
          className={ConfigClsName(prefixCls, cls)}
          onClick={() => playControl(cls)}
        ></img>
      );
    });
  };

  const Controls = () => {
    return (
      <>
        <div className={ConfigClsName(prefixCls, "control-container")}>
          <div className={ConfigClsName(prefixCls, "control-left-part")}>
            <img
              src={testLogo}
              className={ConfigClsName(prefixCls, "audio-preview-img")}
            ></img>
            <div className={ConfigClsName(prefixCls, "audio-info")}>
              <span>Music Name</span>
              <span>Music Author</span>
            </div>
          </div>
          <div className={ConfigClsName(prefixCls, "control-center-part")}>
            <div
              className={ConfigClsName(prefixCls, "operation-button-groups")}
            >
              <>{operationButtonEls(operationBtnGroups)}</>
            </div>
            <span className={ConfigClsName(prefixCls, "time-text")}>
              start time
            </span>
            <Slider
              className={ConfigClsName(prefixCls, "audio-track")}
            ></Slider>
            <span className={ConfigClsName(prefixCls, "time-text")}>
              end time
            </span>
          </div>
          <div className={ConfigClsName(prefixCls, "control-right-part")}>
            <>{operationButtonEls(extraBtnGroups)}</>
          </div>
        </div>
      </>
    );
  };

  return <>{Controls()}</>;
};
