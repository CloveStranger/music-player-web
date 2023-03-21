import audioArrowIcon from "../../../assets/svg/audioArrow.svg";
import pauseIcon from "../../../assets/svg/pauseIcon.svg";
import startIcon from "../../../assets/svg/startIcon.svg";
import configClsName from "../../../utils/configClsName";
import "./index.scss";
import OperationEl from "../OperationEl/index";
import audioPlayerState from "../state";
import { observer } from "mobx-react";

const prefixCls = "left-operation-el";

export default function LeftControl() {
  const state = audioPlayerState;

  const preArrow = () => {
    const { pre } = state;
    return (
      <>
        <img
          className={configClsName(prefixCls, "pre-arrow")}
          src={audioArrowIcon}
          onClick={pre}
        />
      </>
    );
  };

  const startPauseIcon = observer(() => {
    const { pauseState, changePauseState } = state;
    return (
      <>
        <img
          className={configClsName(prefixCls, "play-icon")}
          src={pauseState ? startIcon : pauseIcon}
          onClick={changePauseState}
        />
      </>
    );
  });

  const nextArrow = () => {
    const { next } = state;
    return (
      <>
        <img
          className={configClsName(prefixCls, "next-arrow")}
          src={audioArrowIcon}
          onClick={next}
        />
      </>
    );
  };

  return (
    <>
      <div className={configClsName(prefixCls, "container")}>
        {OperationEl(preArrow, "上一首")}
        {OperationEl(startPauseIcon, "开始播放")}
        {OperationEl(nextArrow, "下一首")}
      </div>
    </>
  );
}
