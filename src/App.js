import React from "react";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = React.useState(() =>
    [...new Array(10)].map((_, i) => ({
      id: i + 1,
      count: 1,
    }))
  );
  //@todo: create up function that will increase a counter by id
  const up = (id) => "implement this";
  return (
    <ul>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          up={up}
          counter={counter}
        />
      ))}
    </ul>
  );
}

export default App;
