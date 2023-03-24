import { useEffect, useState } from "react";
import api from "../../../../api";
import configClsName from "../../../../utils/configClsName";
import "./index.scss";

const prefixCls = "netease";

export default function NetEase() {
  const [hotPlayList, setHotPlayList] = useState<object[]>([]);
  useEffect(() => {
    let output: object[] = [];
    api.fetchHotPlayList().then((response) => {
      const { status, data } = response;
      const { code, tags } = data;
      output = [...hotPlayList, ...tags];
      setHotPlayList(output);
    });

    return () => {
      setHotPlayList([]);
    };
  }, []);

  const TagGroups = () => {
    const tags = hotPlayList.map((item: any) => {
      const { id, name } = item;
      api.fetchPlayListDetail(id);
      return (
        <div key={id} className={configClsName(prefixCls, "play-list-tag")}>
          {name}
        </div>
      );
    });

    return <>{tags}</>;
  };

  return (
    <>
      <div>
        <div className={configClsName(prefixCls, "tag-container")}>
          <TagGroups></TagGroups>
        </div>
      </div>
    </>
  );
}
