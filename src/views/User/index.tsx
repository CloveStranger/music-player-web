import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const User = () => {
    return (
      <>
        <div>User</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={User()}></CommonContentBody>
    </>
  );
};
