import CommonContentBody from "../../commons/CommonContentBody";
import ConfigClsName from "../../utils/configMusicTime";
import "./index.scss";
import fontImg from "../../assets/testImg/font.jpg";
import bottomImg from "../../assets/testImg/bottom.webp";

const prefixCls = "home-page";

export default () => {
  const fontStyle = {
    backgroundImage: `url(${fontImg})`,
  };
  const BottomStyle = {
    backgroundImage: `url(${bottomImg})`,
  };

  const Home = () => {
    return (
      <>
        <div className={ConfigClsName(prefixCls, "test-div")}>
          <div
            className={ConfigClsName(prefixCls, "container1")}
            style={fontStyle}
          >
            Home1
          </div>
          <div
            className={ConfigClsName(prefixCls, "container2")}
            style={BottomStyle}
          >
            <div className={ConfigClsName(prefixCls, "drag-line-container")}>
              <div className={ConfigClsName(prefixCls, "drag-line")}></div>
              <div className={ConfigClsName(prefixCls, "text-box")}>结果图</div>
            </div>
          </div>
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
