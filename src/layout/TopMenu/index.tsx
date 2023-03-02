import Input from "antd/es/input/Input";
import ConfigClsName from "../../utils/configClsName";
import "./index.scss";
import searchIcon from "../../assets/svg/searchIcon.svg";

const prefixCls = "top-menu";

const searchIconDom = () => {
  return (
    <>
      <img
        src={searchIcon}
        alt="searchIcon"
        className={ConfigClsName(prefixCls, "search-icon")}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>
        <Input
          className={ConfigClsName(prefixCls, "search-input")}
          prefix={searchIconDom()}
          placeholder="the truth that you leave"
        ></Input>
      </div>
    </>
  );
};
