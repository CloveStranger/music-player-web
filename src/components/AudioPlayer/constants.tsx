import audioArrowIcon from "../../assets/svg/audioArrow.svg";
import pauseIcon from "../../assets/svg/pauseIcon.svg";
import favouriteIcon from "../../assets/svg/favouriteIcon.svg";
import bottomPlayListIcon from "../../assets/svg/bottomPlayListIcon.svg";
import singleCircleIcon from "../../assets/svg/singleCircle.svg";
import listCircle from "../../assets/svg/listCircle.svg";
import playListIcon from "../../assets/svg/playListIcon.svg";
import randomPlayIcon from "../../assets/svg/randomPlay.svg";
import startIcon from "../../assets/svg/startIcon.svg";

export default () => {
  const prefixCls = "audio-player";

  const operationIconMap = new Map([
    ["arrowIcon", audioArrowIcon],
    ["pauseIcon", pauseIcon],
    ["favouriteIcon", favouriteIcon],
    ["bottomPlayListIcon", bottomPlayListIcon],
    ["singleCircleIcon", singleCircleIcon],
    ["listCircle", listCircle],
    ["playListIcon", playListIcon],
    ["randomPlayIcon", randomPlayIcon],
    ["startIcon", startIcon],
  ]);

  const leftBtnGroups = [
    {
      id: 1,
      src: audioArrowIcon,
      cls: "back-arrow",
      tooltipText: "上一首",
      operationName: "pre",
    },
    {
      id: 2,
      src: startIcon,
      cls: "pause-icon",
      tooltipText: "暂停",
      operationName: "pausePlay",
    },
    {
      id: 3,
      src: audioArrowIcon,
      cls: "forward-arrow",
      tooltipText: "下一首",
      operationName: "next",
    },
  ];

  const rightBtnGroups = [
    {
      id: 1,
      src: favouriteIcon,
      cls: "back-arrow",
      tooltipText: "喜爱",
      operationName: "favourite",
    },
    {
      id: 2,
      src: bottomPlayListIcon,
      cls: "back-arrow",
      tooltipText: "播放列表",
      operationName: "showPlayList",
    },
    {
      id: 3,
      src: singleCircleIcon,
      cls: "back-arrow",
      tooltipText: "列表循环",
      operationName: "playType",
    },
  ];

  return { prefixCls, leftBtnGroups, rightBtnGroups, operationIconMap };
};
