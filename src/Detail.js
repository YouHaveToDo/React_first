import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
// 시작부분
const Detail = (props) => {
  const history = useHistory();
  const Day = useParams();
  const [rate, setRate] = React.useState(5);
  // 기본 평점 5점으로 설정
  const rateArray = [1, 2, 3, 4, 5];
  const KDown = (e) => {
    if (rateArray.indexOf(parseInt(e.key)) !== -1) {
      console.log("1~5 키보드 이벤트");
      setRate(parseInt(e.key));
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", KDown);
    return () => {
      window.removeEventListener("keydown", KDown);
    };
  }, []);
  console.log(Day);
  return (
    <DetailWrap>
      <DetailTitle>
        <span
          style={{
            color: "#fff",
            fontWeight: "900",
            background: "orange",
            padding: "0.2rem",
            borderRadius: "5px",
            marginRight: "5px",
          }}
        >
          {Day.day}요일
        </span>
        평점 남기기
      </DetailTitle>
      <Circles>
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div
              className="circle"
              key={idx}
              onClick={() => {
                setRate(idx + 1);
                console.log(idx);
              }}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
              }}
            ></div>
          );
        })}
      </Circles>
      <RateScore
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </RateScore>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
  padding: 5vh 5vw;
  box-sizing: border-box;
  border-radius: 5px;
`;
const DetailTitle = styled.h3`
  text-align: center;
`;
const Circles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;
const RateScore = styled.div`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: rgb(255, 255, 255);
  text-align: center;
`;
export default Detail;
