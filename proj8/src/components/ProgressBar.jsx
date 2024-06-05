import { useEffect, useState } from "react";

function ProgressBar({ timer }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearTimeout(interval);
    };
  }, []);
  const [remainingTime, setRemainingTime] = useState(timer);
  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
