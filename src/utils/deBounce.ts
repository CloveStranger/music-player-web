let timeNode: any = null;

const deBounce = (func: Function): any => {
  console.log("click");

  if (timeNode) {
    clearTimeout(timeNode);
  }
  timeNode = setTimeout(() => {
    func();
  });
};

export default deBounce;
