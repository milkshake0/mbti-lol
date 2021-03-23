import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Bar } from "react-chartjs-2";
import { useStyles } from "../shared/style";

const useStyles2 = makeStyles({
  container: {
    padding: "40px",
    // height: "auto",
    // minHeight: "600px",
  },
  link: {
    display: "inline-block",
    width: "100%",
    padding: "8px 0",
  },
  chartBox: {
    width: "100%",
    position: "relative",
    margin: "20px 0",
  },
  chart: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
  },
  shareBtn: {
    textAlign: "center",
    marginTop: "30px",
  },
});

const Result = () => {
  const myAnswer = JSON.parse(localStorage.getItem("myAnswer"));
  const [position, setPosition] = useState({});
  const obj = { top: 0, jungle: 0, mid: 0, bottom: 0, support: 0 }; //이거 배열로 했어야 했는데
  const arrName = ["top", "mid", "jungle", "bottom", "support"];
  const arrNum = [];
  let myPositions = [];
  let isFullAnswer = 0; //1, 0, -1
  // let perArr = [0,0,0,0,0];

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

  //스타일 부분
  const classes = useStyles();
  const classes2 = useStyles2();

  const perArr = [];
  for (let key in obj) {
    perArr.push(obj[key] * 25);
  }
  const chartData = {
    labels: ["Top", "Jungle", "Mid", "Bottom", "Support"],
    datasets: [
      {
        label: "Position",
        data: perArr,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            // stepSize: 5,
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };
  return (
    <div className={classes.wrap}>
      <Container className={`${classes.container} ${classes2.container}`}>
        <Typography
          variant="h2"
          className={`${classes.title} ${classes2.title}`}
        >
          테스트 결과
        </Typography>
        {isFullAnswer === 1 && (
          <>
            <Typography
              variant="h2"
              className={`${classes.title} ${classes2.title}`}
            >
              어떤 포지션도 즐겁게 플레이할 수 있습니다!
            </Typography>
          </>
        )}
        {isFullAnswer === 0 && (
          <>
            <Typography
              variant="h2"
              className={`${classes.title} ${classes2.title}`}
            >
              아직 나에게 맞는 포지션을 찾지 못한것 같아요. 일단 플레이 해보며
              찾아볼까요?!
            </Typography>
          </>
        )}
        {isFullAnswer === -1 && (
          <>
            <Typography
              variant="h1"
              className={`${classes.title} ${classes2.title}`}
            >
              나에게 맞는 포지션은
              {myPositions.map((v) => (
                <span key={v}> {v} </span>
              ))}
              (이)에요!
            </Typography>
          </>
        )}
        <Box className={classes2.chartBox}>
          <Bar data={chartData} options={options} className={classes2.chart} />
        </Box>
        <Box>
          <Button className={classes.button}>
            <Link exact="true" to="/" className={classes2.link}>
              다시하기
            </Link>
          </Button>
        </Box>
        {/* test페이지에서 에서 라우트로 넘어올 때 addthis 스크립트 파일이 안불러와지는 문제 */}
        <Box
          className={`addthis_inline_share_toolbox_grka ${classes2.shareBtn}`}
        />
      </Container>
    </div>
  );
};

export default Result;
