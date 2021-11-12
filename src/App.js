import React, { useCallback } from "react";
import Counter from "./components/Counter";

function App() {
  //https://reactjs.org/docs/hooks-state.html
  const [counters, setCounters] = React.useState(() =>
    [...new Array(10)].map((_, i) => ({
      id: i + 1,
      count: 1,
    }))
  );
  //@todo: create up function that will increase a counter by id

  //useCallback for memoization.
  //https://reactjs.org/docs/hooks-reference.html#usecallback
  const up = useCallback(
    (id) =>
      setCounters((counters) =>
        counters.map((counter) =>
          counter.id === id ? { ...counter, count: counter.count + 1 } : counter
        )
      ),
    []
  );

  return (
    <ul>
      {counters.map((counter) => (
        <Counter key={counter.id} up={up} counter={counter} />
      ))}
    </ul>
  );
}

export default App;
