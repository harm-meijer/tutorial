import React from "react";

function App() {
  const [counter, setCounter] = React.useState(1);
  //@todo: fix this function
  const up = React.useCallback(() => setCounter(counter + 1), [counter]);
  return (
    <>
      counter:{counter}
      <button onClick={up}>UP</button>
    </>
  );
}

export default App;
