import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCounter } from "./helpers";
import Counter from "./Timer";
import TimerButton from "./TimerButton";
import { setTimerAction } from "../../actions";
import { createSelectTimerById } from "../../selectors";

const AutoCounter = React.memo(function AutoCounter(item) {
  console.log(item);
  const itemId = item.itemId;
  //@todo: make timer maintain values when unmounted
  //selector to get the timer values
  //create action type SET_TIMER create action creator function using that type
  //setTimer should be a function that dispatches start stop values
  //do something in the reducer with that value
  const dispatch = useDispatch();

  //Creating a selector that passes the itemId and gets back false, false at first time.

  const timer = useSelector(createSelectTimerById(itemId));

  console.log(`timer for ${itemId}:`, timer);

  //Set Timer to trigger the action using the setter
  const setTimer = useCallback(
    (setter) => dispatch(setTimerAction(itemId, setter(timer))),
    [timer]
  );
  //const setTimer = useCallback(timer=>dispatch(setTimerAction(timer)))
  return (
    <div>
      <TimerButton timer={timer} setter={setTimer} />
      {showCounter(timer) ? <Counter {...timer} /> : ""}
    </div>
  );
});
export default AutoCounter;
