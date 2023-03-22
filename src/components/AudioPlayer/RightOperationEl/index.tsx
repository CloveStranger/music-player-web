import configClsName from "../../../utils/configClsName";
import favouriteIcon from "../../../assets/svg/favouriteIcon.svg";
import playListIcon from "../../../assets/svg/bottomPlayListIcon.svg";
import listCircleIcon from "../../../assets/svg/listCircle.svg";
import singleCircleIcon from "../../../assets/svg/singleCircle.svg";
import randomPlayIcon from "../../../assets/svg/randomPlay.svg";
import OperationEl from "../OperationEl";
import "./index.scss";
import state from "../state";
import { observer } from "mobx-react-lite";

const prefixCls = "right-operation-el";

export default function RightOperationEl() {
  const FavouriteEl = () => {
    return (
      <>
        <img
          src={favouriteIcon}
          className={configClsName(prefixCls, "favourite-icon")}
        ></img>
      </>
    );
  };
  const PlaylistEl = () => {
    return (
      <>
        <img
          src={playListIcon}
          className={configClsName(prefixCls, "playlist-icon")}
        ></img>
      </>
    );
  };
  const PlayListStatusEl = observer(() => {
    const { listPlayStatus, changeListPlayStatus } = state;
    const listStatusIcon = () => {
      let output = listCircleIcon;
      if (listPlayStatus === 0) {
        output = listCircleIcon;
      }
      if (listPlayStatus === 1) {
        output = singleCircleIcon;
      }
      if (listPlayStatus === 2) {
        output = randomPlayIcon;
      }
      return output;
    };
    return (
      <>
        <img
          src={listStatusIcon()}
          className={configClsName(prefixCls, "list-status-icon")}
          onClick={changeListPlayStatus}
        ></img>
      </>
    );
  });
  const PlayListStatusTitle = () => {
    const { listPlayStatus } = state;
    let output = "列表循环";

    if (listPlayStatus === 1) {
      output = "单曲循环";
    }
    if (listPlayStatus === 2) {
      output = "随机播放";
    }
    console.log(output);

    return output;
  };
  return (
    <>
      {OperationEl(FavouriteEl, "添加我的喜爱")}
      {OperationEl(PlaylistEl, "播放列表")}
      {OperationEl(PlayListStatusEl, PlayListStatusTitle())}
    </>
  );
}
