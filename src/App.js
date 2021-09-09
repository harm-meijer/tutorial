import React from "react";
import AutoCounter from "./components/AutoCounter";

function App() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <div>
        <button onClick={() => setShow((show) => !show)}>
          toggle auto counter
        </button>
      </div>
      {show && <AutoCounter />}
    </>
  );
}

export default App;
