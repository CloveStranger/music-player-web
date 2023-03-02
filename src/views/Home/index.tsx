import CommonContentBody from "../../commons/CommonContentBody";

export default () => {
  const Home = () => {
    return (
      <>
        <div>Home</div>
      </>
    );
  };

  return (
    <>
      <CommonContentBody childEl={Home()}></CommonContentBody>
    </>
  );
};
