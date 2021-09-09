import { memo, useEffect, useState } from "react";
import { format, paused } from "../helpers";
const recurUpdate = 88; //@todo: implement recursive updater

const Counter = memo(function Counter({ start, stop }) {
  const [timePassed, setTimePassed] = useState(0);
  useEffect(() => {
    //@todo:implement the effect
  }, []); //@todo: what are the dependencies?

  return timePassed;
});
export default Counter;
