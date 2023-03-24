import CommonContentBody from "../../commons/CommonContentBody";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ConfigClsName from "../../utils/configClsName";
import musicPlatFormName from "../../utils/musicPlatFormName";
import HomeTabPane from "./HomeTabPane";
import "./index.scss";

const prefixCls = "home-page";

export default () => {
  const tabItems: TabsProps["items"] = Object.entries(musicPlatFormName).map(
    (item) => {
      return {
        key: item[0],
        label: item[1],
        children: <HomeTabPane tabValue={item[0]}></HomeTabPane>,
      };
    }
  );
  const Home = () => {
    return (
      <>
        <div>
          <Tabs items={tabItems}></Tabs>
        </div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Home()}></CommonContentBody>
    </>
  );
};
