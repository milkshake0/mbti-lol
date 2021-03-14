import React, { useEffect, useState } from "react";

const Result = () => {
  const myAnswer = JSON.parse(localStorage.getItem("myAnswer"));
  const [position, setPosition] = useState({});
  const obj = { top: 0, jungle: 0, mid: 0, bottom: 0, support: 0 };
  const arrName = ["top", "mid", "jungle", "bottom", "support"];
  const arrNum = [];
  let myPositions = [];

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
    if (a > b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return 1;
    }
  };
  const sortName = (a, b) => {
    if (position[a] > position[b]) {
      return -1;
    }
    if (position[a] === position[b]) {
      return 0;
    }
    if (position[a] < position[b]) {
      return 1;
    }
  };
  for (let i = 0; i < arrName.length; i++) {
    arrNum[i] = position[arrName[i]];
  }
  arrNum.sort(sortFunc);
  arrName.sort(sortName);
  arrNum.map((v, i) => {
    if (arrNum[0] === v) {
      myPositions.push(arrName[i]);
    }
    //모든 포지션 4일 경우
    //모든 포지션 0일 경우
  });
  console.log(myPositions);

  return (
    <div>
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
