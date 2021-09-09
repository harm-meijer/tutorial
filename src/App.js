import React from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = React.useState(1);
  const [message, setMessage] = React.useState(
    "initial message"
  );
  //@todo: fix this function
  const up = React.useCallback(
    () => setCounter((current) => current + 1),
    []
  );
  return (
    <>
      <div>message:{message}</div>
      <Counter
        up={up}
        setMessage={setMessage}
        counter={counter}
      />
    </>
  );
}

export default App;
