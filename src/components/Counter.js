import React, { memo } from "react";
const Counter = memo(function Counter({
  up,
  counter: { id, count },
}) {
  console.log("rendering:", id);
  return (
    <li>
      <button onClick={() => up(id)}>up</button>
      {count}
    </li>
  );
});
export default Counter;
