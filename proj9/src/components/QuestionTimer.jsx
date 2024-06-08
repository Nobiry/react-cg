import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const time = setTimeout(onTimeout, timeout);
    
    return () => {
      clearTimeout(time);
    }
  }, [timeout.onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return <progress
          value={remainingTime}
          max={timeout}
          id="question-time"
          className={mode}
        />;
}

export default QuestionTimer;
