import { Tooltip } from "antd";
import ConfigClsName from "../../../utils/configClsName";
import funcs from "../funcs";
import constants from "../constants";
import { useEffect, useState } from "react";

export default function operationEl(btnGroupName, state) {
  const { operationControl } = funcs(state);
  const { prefixCls, leftBtnGroups, rightBtnGroups } = constants();
  const [btnGroups, setBtnGroups] = useState([]);

  useEffect(() => {
    if (btnGroupName === "left") {
      setBtnGroups((): any => {
        return leftBtnGroups;
      });
    }
    if (btnGroupName === "right") {
      setBtnGroups((): any => {
        return rightBtnGroups;
      });
    }
  }, []);

  return btnGroups.map((item) => {
    const { id, src, cls, tooltipText, operationName } = item;
    return (
      <Tooltip
        key={id}
        title={() => (
          <span className={ConfigClsName(prefixCls, "tooltip-box")}>
            {tooltipText}
          </span>
        )}
        color={"transparent"}
      >
        <img
          src={src}
          className={ConfigClsName(prefixCls, cls)}
          onClick={() =>
            operationControl(operationName, [btnGroups, setBtnGroups])
          }
        ></img>
      </Tooltip>
    );
  });
}
