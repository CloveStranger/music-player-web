import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const Artists = () => {
    return (
      <>
        <div>Artists</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Artists()}></CommonContentBody>
    </>
  );
};
