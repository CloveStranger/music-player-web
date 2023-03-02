import ConfigClsName from "../../utils/configClsName";
import "./index.scss";

interface propType {
  childEl: React.ReactElement;
}

const prefixCls = "common-content-body";

export default (props: propType) => {
  const { childEl } = props;
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>{childEl}</div>
    </>
  );
};
