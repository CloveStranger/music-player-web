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
  const state = new audioPlayerState();

  const preArrow = () => {
    return (
      <>
        <img
          className={configClsName(prefixCls, "pre-arrow")}
          src={audioArrowIcon}
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
    return (
      <>
        <img
          className={configClsName(prefixCls, "next-arrow")}
          src={audioArrowIcon}
        />
      </>
    );
  };

  return (
    <>
      <div className={configClsName(prefixCls, "container")}>
        <OperationEl tooltipText="上一首"></OperationEl>
        {/* {operationEl(startPauseIcon, "开始播放")} */}
        {/* <OperationEl
          ContentEl={nextArrow()}
          tooltipText={"下一首"}
        ></OperationEl> */}
      </div>
    </>
  );
}
