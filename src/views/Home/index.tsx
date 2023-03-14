import CommonContentBody from "../../commons/CommonContentBody";
import ConfigClsName from "../../utils/configClsName";
import "./index.scss";

const prefixCls = "home-page";

export default () => {
  const Home = () => {
    return (
      <>
        <div>Home</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Home()}></CommonContentBody>
    </>
  );
};
