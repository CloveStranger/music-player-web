import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const Collection = () => {
    return (
      <>
        <div>Collection</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Collection()}></CommonContentBody>
    </>
  );
};
