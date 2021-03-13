import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

// 문항 샘플 데이터
const sampleData = {
  1: { text: "문항1.", a1: "top", a2: "mid" },
  2: { text: "문항2.", a1: "top", a2: "mid" },
  3: { text: "문항3.", a1: "top", a2: "mid" },
  4: { text: "문항4.", a1: "top", a2: "mid" },
};

const TestA = () => {
  const history = useHistory();
  const [data, setData] = useState([]); // 선택한 값.....
  const [isGo, setIsGo] = useState(false); // 다음페이지 넘어 갈지 말지
  const [questNum, setQuestNum] = useState(0); // 현재 문항번호
  const [sample, setSample] = useState([]);
  // 0.컴포넌트 마운트시 실행, questNum(문항번호가) state가 업데이트 되면 실행
  useEffect(() => {
    loadQuestion();
    setIsGo(false); // 렌더링 할떄 마다 초기화
  }, [questNum]);

  useEffect(() => {
    // 4. isGo state가 업데이트 되면서 실행
    if (isGo) sendPage(); // 5. isGo true 이면 sendPage 실행
  }, [isGo]); // componentDidUpdate isGo 업데이트 할때

  // 현재 문항값 가져오기 함수
  const loadQuestion = () => {
    // 문항 번호 추출
    let num = history.location.pathname;
    const numArray = num.split("/");
    num = numArray[numArray.length - 1];
    // 문항 번호 동기화
    setQuestNum(+num);
    // 문한 가져오기
    setSample(sampleData[num]);
  };

  // 1. nextPage 클릭시
  const nextPage = () => {
    // 2. 데이터 동기화
    setData([{ 1: "A", 2: "B" }]);
    // 3. 데이터 동기화
    setIsGo(true);
  };
  // 6. 스토리지 동기화 후 보내기
  const sendPage = () => {
    // 로컬 스토리지 동기화
    localStorage.setItem("data", JSON.stringify(data));
    // 문항번호 동기화
    setQuestNum(questNum + 1); // 다음 문항 번호 저장 (push 후 현재 문항 번호가 됨...)
    //최대 값 가져오기
    const maxCount = Object.keys(sampleData).length;
    // 페이지 이동
    history.push(
      maxCount === questNum ? "/result" : "/testa/" + (questNum + 1)
    );
  };

  return (
    <>
      {JSON.stringify(sample)}
      <div onClick={nextPage}>다음 페이지</div>
    </>
  );
};

export default TestA;
