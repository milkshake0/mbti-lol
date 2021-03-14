import React, { useEffect, useState } from "react";

const Result = () => {
  const myAnswer = JSON.parse(localStorage.getItem("myAnswer"));
  const [position, setPosition] = useState({});
  const obj = { top: 0, jungle: 0, mid: 0, bottom: 0, support: 0 };
  const arrName = ["top", "mid", "jungle", "bottom", "support"];
  const arrNum = [];
  let myPositions = [];
  let isFullAnswer = 0; //1, 0, -1

  for (let stepNum in myAnswer) {
    if (myAnswer[stepNum]) {
      obj[myAnswer[stepNum][0]] += 1;
      obj[myAnswer[stepNum][1]] += 1;
    }
  }
  useEffect(() => {
    setPosition(obj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sortFunc = (a, b) => {
    if (a > b) return -1;
    if (a === b) return 0;
    if (a < b) return 1;
  };
  const sortName = (a, b) => {
    if (position[a] > position[b]) return -1;
    if (position[a] === position[b]) return 0;
    if (position[a] < position[b]) return 1;
  };
  for (let i = 0; i < arrName.length; i++) {
    arrNum[i] = position[arrName[i]];
  }
  arrNum.sort(sortFunc);
  arrName.sort(sortName);

  const positionCountSum = arrNum.reduce((acc, v) => (acc += v));
  if (positionCountSum === 20) {
    isFullAnswer = 1;
    console.log(isFullAnswer);
  } else if (positionCountSum === 0) {
    isFullAnswer = 0;
    console.log(isFullAnswer);
  } else {
    isFullAnswer = -1;
    arrNum.forEach((v, i) => {
      if (arrNum[0] === v) {
        myPositions.push(arrName[i]);
      }
    });
  }
  console.log(myPositions);

  return (
    <div className="Result">
      <h4>position : {JSON.stringify(position)}</h4>
      <br />
      <h4>
        나에게 맞는 포지션은
        {myPositions.map((v) => (
          <span key={v}> {v} </span>
        ))}
        에요!
      </h4>
      {/* 각 포지션 순위별로 div만들어서 뿌리기 */}
    </div>
  );
};

export default Result;
