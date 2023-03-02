import emptyAavatarIcon from "../../../assets/svg/emptyAvatar.svg";
import ConfigClsName from "../../../utils/configClsName";
import "./index.scss";

const prefixCls = "user-info";

export default () => {
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>
        <img
          src={emptyAavatarIcon}
          alt="emptyAvatar"
          className={ConfigClsName(prefixCls, "avatar")}
        />
        <span className={ConfigClsName(prefixCls, "name")}>ZZA</span>
      </div>
    </>
  );
};
