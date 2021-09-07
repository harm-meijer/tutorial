import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../actions";
import { selectCount } from "../selectors";

const Counter = memo(function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
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
