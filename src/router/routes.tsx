import Home from "../views/Home";
import PlayList from "../views/PlayList";
import Artists from "../views/Artists";
import Albums from "../views/Albums";
import Radio from "../views/Radio";
import Event from "../views/Event";
import User from "../views/User";
import Collection from "../views/Collection";

import homeIcon from "../assets/svg/homeIcon.svg";
import playListIcon from "../assets/svg/playLIstIcon.svg";
import artistsIcon from "../assets/svg/artisitsIcon.svg";
import albumIcon from "../assets/svg/albumIcon.svg";
import randomEvent from "../assets/svg/randomEvent.svg";
import userDetail from "../assets/svg/userDetail.svg";
import radioIcon from "../assets/svg/radioIcon.svg";
import collectionIcon from "../assets/svg/collectionIcon.svg";

interface childRouter {
  path: string;
  name: string;
  children?: Array<childRouter>;
  element?: React.ReactElement;
  icon?: string;
  changePath?: string;
}

const childRoutes: Array<childRouter> = [
  {
    path: "overview",
    name: "浏览",
    children: [
      {
        path: "home",
        element: <Home></Home>,
        name: "主页",
        icon: homeIcon,
        changePath: "/overview/home",
      },
      {
        path: "playlist",
        element: <PlayList></PlayList>,
        name: "播放列表",
        icon: playListIcon,
        changePath: "/overview/playlist",
      },
      {
        path: "artists",
        element: <Artists></Artists>,
        name: "艺术家",
        icon: artistsIcon,
        changePath: "/overview/artists",
      },
      {
        path: "albums",
        element: <Albums></Albums>,
        name: "专辑",
        icon: albumIcon,
        changePath: "/overview/albums",
      },
      {
        path: "collection",
        element: <Collection></Collection>,
        name: "收藏",
        icon: collectionIcon,
        changePath: "/overview/collection",
      },
    ],
  },
  {
    path: "discover",
    name: "发现",
    children: [
      {
        path: "radio",
        element: <Radio></Radio>,
        name: "广播",
        icon: radioIcon,
        changePath: "/discover/radio",
      },
      {
        path: "event",
        element: <Event></Event>,
        name: "随机事件",
        icon: randomEvent,
        changePath: "/discover/event",
      },
      {
        path: "user",
        element: <User></User>,
        name: "详情",
        icon: userDetail,
        changePath: "/discover/user",
      },
    ],
  },
];

export default childRoutes;
