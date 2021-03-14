import React, { useEffect, useState } from "react";
import Questions from "./shared/questions.json";
import Answers from "./shared/answers.json";

const Test = ({ match, history }) => {
  const [myAnswer, setMyAnswer] = useState(
    JSON.parse(localStorage.getItem("myAnswer")) || []
  );
  const [isPush, setIsPush] = useState(false);
  const [currStep, setCurrStep] = useState(+match.params.step);
  const maxQuestionNum = Object.keys(Questions).length;

  useEffect(() => {
    setCurrStep(+match.params.step);
  }, [match.params.step]);
  // console.log(currStep);

  useEffect(() => {
    if (isPush) sendPage();
    setIsPush(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPush]);

  const onNextPage = (answerType) => {
    if (answerType === "a") {
      setMyAnswer({
        ...myAnswer,
        [currStep]: [Questions[currStep]["a1"], Questions[currStep]["a2"]],
      });
    } else if (answerType === "b") {
      setMyAnswer({
        ...myAnswer,
        [currStep]: null,
      });
    }
    setIsPush(true);
  };

  const sendPage = () => {
    // console.log("myAnswer: ", myAnswer);
    localStorage.setItem("myAnswer", JSON.stringify(myAnswer));
    history.push(currStep === maxQuestionNum ? "/result" : `${currStep + 1}`);
  };
  return (
    <div className="Test">
      <h2>{Questions[currStep]["text"]}</h2>
      <div onClick={() => onNextPage("a")}>{Answers[currStep]["a"]}</div>
      <div onClick={() => onNextPage("b")}>{Answers[currStep]["b"]}</div>
    </div>
  );
};

export default Test;
