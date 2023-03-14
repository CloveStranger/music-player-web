const configClsName = (prefixCls: string, endfixCls: string | string[]) => {
  let output = prefixCls;

  if (endfixCls && typeof endfixCls === "string") {
    output = `${prefixCls}-${endfixCls}`;
  }
  if (endfixCls && typeof endfixCls === "object") {
    const strStore: string[] = [];
    endfixCls.forEach((item) => {
      if (!item) {
        return;
      }
      strStore.push(`${prefixCls}-${item}`);
    });

    output = strStore.join(" ");
  }

  return output;
};

export default configClsName;
