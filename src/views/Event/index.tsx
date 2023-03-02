import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const Event = () => {
    return (
      <>
        <div>Event</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Event()}></CommonContentBody>
    </>
  );
};
