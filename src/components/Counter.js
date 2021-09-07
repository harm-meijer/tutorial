import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../actions";
import { selectCounter } from "../selectors";

const Counter = memo(function Counter() {
  //@todo: for multiple counters something needs to change here
  //@todo: implement removing a counter here
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);
  const upClicked = () => dispatch(up());
  const downClicked = () => dispatch(down());
  const resetClicked = () => dispatch(reset());
  return (
    <div>
      {count}
      <button onClick={upClicked}>up</button>
      <button onClick={downClicked}>down</button>
      <button onClick={resetClicked}>reset</button>
    </div>
  );
});
export default Counter;
