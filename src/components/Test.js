import React, { useEffect, useState } from "react";
import Questions from "../shared/questions.json";
import Answers from "../shared/answers.json";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useStyles } from "../shared/style";

const useStyles2 = makeStyles({
  container: {
    // textAlign: "left",
    padding: "40px",
  },
  stepText: {
    fontSize: "26px",
  },
  flexBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  flexItemStepText: {
    height: "10%",
    fontWeight: "bold",
    color: "#888",
  },
  flexItemTitle: {
    height: "66%",
  },
  flexItemButton: {
    height: "24%",
  },
});

const Test = ({ match, history }) => {
  const classes = useStyles();
  const classes2 = useStyles2();

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
    <div className={`Test ${classes.wrap}`}>
      <Container className={`${classes.container} ${classes2.container}`}>
        <Box className={classes2.flexBox}>
          <Box className={classes2.flexItemStepText}>
            <Typography variant="h1" className={classes2.stepText}>
              {currStep} / {maxQuestionNum}
            </Typography>
          </Box>
          <Box className={classes2.flexItemTitle}>
            <Typography variant="h2" className={classes.title}>
              {Questions[currStep]["text"]}
            </Typography>
          </Box>
          <Box className={classes2.flexItemButton}>
            <Button
              onClick={() => onNextPage("a")}
              className={`${classes.button} ${classes.padding8}`}
            >
              {Answers[currStep]["a"]}
            </Button>
            <Button
              onClick={() => onNextPage("b")}
              className={`${classes.button} ${classes.padding8}`}
            >
              {Answers[currStep]["b"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Test;
