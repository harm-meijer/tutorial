import React from "react";

const AutoCounter = React.memo(function AutoCounter() {
  const [counter, setCounter] = React.useState(0);
  //@todo: increment counter every second on mount
  React.useEffect(() => {
    const clear = setInterval(
      () => setCounter((counter) => counter + 1),
      1000
    );
    // return () => clearInterval(clear);
  }, []);
  return <div>counter:{counter}</div>;
});
export default AutoCounter;
