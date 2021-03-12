import React from "react";
import "../shared/reset.scss";
import "../shared/style.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/test/1">시작하기</Link>
    </div>
  );
};

export default Home;
