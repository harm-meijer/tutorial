import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimerAction } from "../../actions";
import { createSelectTimerById } from "../../selectors";
import { showCounter } from "./helpers";
import Counter from "./Timer";
import TimerButton from "./TimerButton";
const AutoCounter = React.memo(function AutoCounter({
  timerId,
}) {
  const timer = useSelector(createSelectTimerById(timerId));
  const dispatch = useDispatch();
  const setTimer = (setter) =>
    dispatch(setTimerAction(timerId, setter(timer)));
  return (
    <div>
      <TimerButton timer={timer} setter={setTimer} />
      {showCounter(timer) ? <Counter {...timer} /> : ""}
    </div>
  );
});
export default AutoCounter;
