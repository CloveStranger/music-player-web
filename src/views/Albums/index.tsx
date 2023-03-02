import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const Albums = () => {
    return (
      <>
        <div>Albums</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Albums()}></CommonContentBody>
    </>
  );
};
