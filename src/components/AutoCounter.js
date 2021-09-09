import React, { useState } from "react";
import { showCounter } from "../helpers";
import Counter from "./Timer";
import TimerButton from "./TimerButton";
const AutoCounter = React.memo(function AutoCounter() {
  const [timer, setTimer] = useState({
    start: false,
    stop: false,
  });
  return (
    <div>
      <TimerButton timer={timer} setter={setTimer} />
      {showCounter(timer) ? <Counter {...timer} /> : ""}
    </div>
  );
});
export default AutoCounter;
