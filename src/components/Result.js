import React, { useEffect, useState } from "react";

const Result = () => {
  const myAnswer = JSON.parse(localStorage.getItem("myAnswer"));
  const [position, setPosition] = useState({});
  const obj = {
    top: 0,
    jungle: 0,
    mid: 0,
    bottom: 0,
    support: 0,
  };
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
  console.log(position);

  return (
    <div>
      <h4>position : {JSON.stringify(position)}</h4>
    </div>
  );
};

export default Result;
