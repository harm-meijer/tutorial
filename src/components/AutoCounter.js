import React from "react";

const AutoCounter = React.memo(function AutoCounter() {
  const [counter, setCounter] = React.useState(0);
  //@todo: increment counter every second on mount
  return <div>counter:{counter}</div>;
});
export default AutoCounter;
