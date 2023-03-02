import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopMenu from "./TopMenu";
import BottomPlayer from "./BottomPlayer";
import "./index.scss";

import ConfigClsName from "../utils/configClsName";

const prefixCls = "layout";

export default () => {
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>
        <div className={ConfigClsName(prefixCls, "content-container")}>
          <SideBar></SideBar>
          <div className={ConfigClsName(prefixCls, "right-layout")}>
            <TopMenu></TopMenu>
            <Outlet></Outlet>
          </div>
        </div>
        <BottomPlayer></BottomPlayer>
      </div>
    </>
  );
};
