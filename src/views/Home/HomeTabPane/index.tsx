import NetEase from "./NetEase";
import React from "react";

export default function HomeTabPane(props: any) {
  const { tabValue } = props;

  const pageConfig = () => {
    let output = <></>;

    if (tabValue === "netease") {
      output = NetEase();
    }

    return output;
  };

  return (
    <>
      <div className="test">{pageConfig()}</div>
    </>
  );
}
