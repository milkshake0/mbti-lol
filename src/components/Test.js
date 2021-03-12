import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Questions from "./shared/questions.json";
import Answers from "./shared/answers.json";

const Test = ({ match }) => {
  const currStep = match.params.step;
  const history = useHistory();
  console.log(history);

  const [myAnswer, setMyAnswer] = useState({});
  console.log(myAnswer);
  const onClickAnswerA = () => {
    setMyAnswer({
      ...myAnswer,
      [currStep]: [Questions[currStep]["a1"], Questions[currStep]["a2"]],
    });
    console.log(myAnswer[currStep]);
  };

  const onClickAnswerB = () => {
    setMyAnswer({ ...myAnswer, [currStep]: null });
    console.log(myAnswer[currStep]);
  };
  return (
    <div className="Test">
      <p>{currStep} / 10</p>
      <h2>{Questions[currStep]["text"]}</h2>
      <Link
        onClick={onClickAnswerA}
        to={currStep >= 10 ? `/test/${+currStep}` : `/test/${+currStep + 1}`}
      >
        {Answers[currStep]["a"]}
      </Link>
      <Link
        onClick={onClickAnswerB}
        to={currStep >= 10 ? `/test/${+currStep}` : `/test/${+currStep + 1}`}
      >
        {Answers[currStep]["b"]}
      </Link>
    </div>
  );
};

export default Test;
