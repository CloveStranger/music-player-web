import { Tooltip } from "antd";
import configClsName from "../../../utils/configClsName";
import "./index.scss";

const prefixCls = "operation-el";

export default function OperationEl(ContentEl: any, tooltipText: string) {
  const titleEl = () => {
    return (
      <>
        <span className={configClsName(prefixCls, "text")}>{tooltipText}</span>
      </>
    );
  };
  return (
    <>
      <Tooltip placement="top" color={"transparent"} title={titleEl}>
        <div>
          <ContentEl></ContentEl>
        </div>
      </Tooltip>
    </>
  );
}
