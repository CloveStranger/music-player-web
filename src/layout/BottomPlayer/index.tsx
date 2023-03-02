import ConfigClsName from "../../utils/configClsName";
import "./index.scss";

import AudioPlayer from "../../components/AudioPlayer";

const prefixCls = "bottom-player";

export default () => {
  return (
    <>
      <div className={ConfigClsName(prefixCls, "container")}>
        <AudioPlayer></AudioPlayer>
      </div>
    </>
  );
};
