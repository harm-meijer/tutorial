export const notStarted = ({ start, stop }) =>
  !start && !stop;
export const running = ({ start, stop }) => start && !stop;
export const paused = ({ start, stop }) => start && stop;
export const showCounter = (timer) =>
  running(timer) || paused(timer);
export const format = (timePassed) => {
  const [seconds, parts] = String(
    Math.floor(timePassed / 10) / 100
  ).split(".");
  return `${seconds}.${(parts + "00").slice(0, 2)}`;
};
