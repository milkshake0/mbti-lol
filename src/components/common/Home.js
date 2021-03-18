import React from "react";
import "../../shared/reset.scss";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useStyles } from "../../shared/style";

const useStyles2 = makeStyles({
  container: {
    textAlign: "center",
    minHeight: "600px",
    height: "auto",
  },
  link: {
    display: "inline-block",
    width: "100%",
    padding: "8px 0",
  },
  imgTeemo: {
    // border: "1px solid violet",
    display: "inline-block",
    width: "160px",
  },
  notice: {
    fontSize: "12px",
    margin: "5px 0",
    color: "#0d58ff",
  },
});

const Home = () => {
  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div className={`Home ${classes.wrap}`}>
      <Container className={`${classes.container} ${classes2.container}`}>
        <Box my={5}>
          <Typography variant="h1" className={classes.title}>
            나의 롤 포지션은?
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="h2" className={classes.subtitle}>
            나에게 맞는 롤 포지션을 알아보자!
          </Typography>
        </Box>
        <Box my={5} textAlign="right">
          <img
            src={require("../../shared/images/teemo.png").default}
            alt="티모"
            className={classes2.imgTeemo}
          />
        </Box>
        <Box px={5} my={5}>
          <p className={classes2.notice}>
            평소 자신의 플레이 스타일에 가까운 답변을 선택해주세요 :)
          </p>
          <Button variant="contained" className={classes.button}>
            <Link to="/test/1" className={classes2.link}>
              시작하기
            </Link>
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
