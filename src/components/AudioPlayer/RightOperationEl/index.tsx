import configClsName from "../../../utils/configClsName";
import favouriteIcon from "../../../assets/svg/favouriteIcon.svg";
import playListIcon from "../../../assets/svg/bottomPlayListIcon.svg";
import listCircleIcon from "../../../assets/svg/listCircle.svg";
import OperationEl from "../OperationEl";
import "./index.scss";

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
  const PlayListStatusEl = () => {
    return (
      <>
        <img
          src={listCircleIcon}
          className={configClsName(prefixCls, "list-status-icon")}
        ></img>
      </>
    );
  };
  return (
    <>
      {OperationEl(FavouriteEl, "添加我的喜爱")}
      {OperationEl(PlaylistEl, "播放列表")}
      {OperationEl(PlayListStatusEl, "列表循环")}
    </>
  );
}
