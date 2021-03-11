import React from "react";
import "../shared/reset.scss";
import "../shared/style.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      home<Link to="/test/1">문제 답변A</Link>
    </div>
  );
};

export default Home;
