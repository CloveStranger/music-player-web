const ConfigClsName = (prefixCls: string, endfixCls?: string) => {
  let output = prefixCls;

  if (endfixCls) {
    output = `${prefixCls}-${endfixCls}`;
  }

  return output;
};

export default ConfigClsName;
