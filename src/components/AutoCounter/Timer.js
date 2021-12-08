import { memo, useEffect, useState } from "react";
import { format, paused } from "./helpers";
const recurUpdate = (
  setter,
  { start, stop = Date.now() }
) => {
  let check = true;
  const recur = (stop) => {
    if (!check) {
      return;
    }
    setter(format(stop - start));
    requestAnimationFrame(() => recur(Date.now()));
  };
  recur(stop);
  return () => {
    check = false;
  };
};

const Counter = memo(function Counter({ start, stop }) {
  const [timePassed, setTimePassed] = useState(0);
  useEffect(() => {
    if (paused({ start, stop })) {
      setTimePassed(format(stop - start));
      return;
    }
    return recurUpdate(setTimePassed, {
      start,
      stop,
    });
  }, [start, stop]);

  return timePassed;
});
export default Counter;
