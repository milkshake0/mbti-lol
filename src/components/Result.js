import React from "react";

const Result = ({ location }) => {
  console.log("로케이션: ", location);
  return (
    <div>
      result
      {localStorage.getItem("myAnswer")}
      그리고
      {/* {location.state} */}
    </div>
  );
};

export default Result;
