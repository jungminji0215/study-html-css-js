const A = () => {
  console.log("hello");
};

const B = () => () => {
  console.log("hello");
};

const C = () => {
  return () => {
    console.log("hello");
  };
};
