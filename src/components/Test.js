import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Questions from "./shared/questions.json";
import Answers from "./shared/answers.json";

const Test = ({ match, history }) => {
  const currStep = match.params.step;
  //결과 화면은 if로 step이 10이면 Link to=""에 삼항연산자로 /result/{결과타입} 으로 바꾸기
  //결과 : 결과 배열에 답변 객체 정리한 것 할당. 이후 결과 객체 sort(기본sort함수넣기)하고 1번 배열 뽑기
  const [myAnswer, setMyAnswer] = useState(
    JSON.parse(localStorage.getItem("myAnswer") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("myAnswer", JSON.stringify(myAnswer));
  }, [myAnswer]);

  console.log(myAnswer);
  const onClickAnswerA = () => {
    setMyAnswer({
      ...myAnswer,
      [currStep]: [Questions[currStep]["a1"], Questions[currStep]["a2"]],
    });
    console.log(myAnswer[currStep]);
    if (currStep >= 10) {
      history.push({ pathname: "/result" });
    }
    history.push({ pathname: `/test/${+currStep + 1}` });
  };

  const onClickAnswerB = () => {
    setMyAnswer({ ...myAnswer, [currStep]: null });
    console.log(myAnswer[currStep]);

    if (currStep >= 10) {
      history.push({ pathname: "/result" });
    }
  };
  const clearStorage = () => {
    setMyAnswer({});
  };
  if (currStep >= 11) {
    history.push({ pathname: "/result" });
  }
  return (
    <div className="Test">
      <button onClick={clearStorage}>스토리지 비우기</button>
      <p>{currStep} / 10</p>
      {/* <h2>{Questions[currStep]["text"]}</h2> */}
      <div onClick={onClickAnswerA}>
        <Link>{Answers[currStep >= 11 ? 10 : currStep]["a"]}</Link>
      </div>
      <div onClick={onClickAnswerB}>
        <Link to={`/test/${+currStep + 1}`}>
          {Answers[currStep >= 11 ? 10 : currStep]["b"]}
        </Link>
      </div>
    </div>
  );
};

export default Test;
