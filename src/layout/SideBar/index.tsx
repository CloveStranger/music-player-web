import ConfigClsName from "../../utils/configClsName";
import "./index.scss";

import UserInfoBox from "./UserInfo/index";
import SelfMenu from "../../components/SelfMenu";

const prefixCls = "side-bar";

export default () => {
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>
        <UserInfoBox></UserInfoBox>
        <SelfMenu></SelfMenu>
      </div>
    </>
  );
};
