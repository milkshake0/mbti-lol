import React from "react";

const Result = ({ location }) => {
  console.log("로케이션: ", location);
  return (
    <div>
      <h4>localStorage : {localStorage.getItem("myAnswer")}</h4>
      <h4>location.state : {JSON.stringify(location.state)}</h4>
    </div>
  );
};

export default Result;
