import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const PlayList = () => {
    return (
      <>
        <div>PlayList</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={PlayList()}></CommonContentBody>
    </>
  );
};
