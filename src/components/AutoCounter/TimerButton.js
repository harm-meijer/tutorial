import React, { memo, useCallback } from "react";
import { notStarted, paused, running } from "./helpers";

const TimerButton = memo(function TimerButton({
  setter,
  timer,
}) {
  const timerAction = useCallback(
    () =>
      setter((timer) => {
        if (notStarted(timer)) {
          return { ...timer, start: Date.now() };
        }
        if (running(timer)) {
          return { ...timer, stop: Date.now() };
        }
        if (paused(timer)) {
          return {
            start: Date.now() - (timer.stop - timer.start),
            stop: false,
          };
        }
      }),
    [setter]
  );
  const resetTimer = useCallback(
    () =>
      setter(() => ({
        start: false,
        stop: false,
      })),
    [setter]
  );
  const caption = notStarted(timer)
    ? " start  "
    : running(timer)
    ? " pause  "
    : "continue";
  return (
    <>
      <button onClick={resetTimer}>reset</button>
      <button onClick={timerAction}>{caption}</button>
    </>
  );
});
export default TimerButton;
