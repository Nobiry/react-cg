import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <ul id="answers">
        {shuffledAnswers.current.map((answers) => {
          const isSelected = selectedAnswer === answers;
          let cssClasses = "";

          if (answerState === "answered" && isSelected) {
            cssClasses = "selected";
          }

          if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            cssClasses = answerState;
          }

          return (
            <li key={answers} className="answer">
              <button disabled={answerState !== ''} className={cssClasses} onClick={() => onSelect(answers)}>
                {answers}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Answers;
