import React from "react";

const Counter = React.memo(function Counter({
  up,
  setMessage,
  counter,
}) {
  //@todo: fix this
  if (counter >= 5) {
    console.log("this should warn or error");
    setMessage("Counter higher than 5");
  }
  return (
    <>
      counter:{counter}
      <button onClick={up}>UP</button>
    </>
  );
});

export default Counter;
