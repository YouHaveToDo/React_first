import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  // 날짜 리스트
  const history = useHistory();
  const day_arr = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
  const week_days = Object.keys(day_arr).map((_d, idx) => {
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day_arr[d];
  });
  // week_days = 날짜별 요일 배열
  const week_rates = week_days.map((w, idx) => {
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
    };
  });
  console.log(...week_rates);
  //평점
  // const btnRef = React.useRef(null);
  // console.log(btnRef.current);
  // // btn ref
  // const goDetail = (e) => {
  //   console.log(e.target);
  //   console.log(btnRef.current);
  // };
  // React.useEffect(() => {
  //   btnRef.current.addEventListener("click", goDetail);
  //   return () => {
  //     btnRef.current.removeEventListener("click", goDetail);
  //   };
  // }, []);

  // componet return
  return (
    <Container>
      <Title>내 일주일은?</Title>
      {week_rates.map((w, idx) => {
        return (
          // Days = 7개의 요일 평점 서브페이지 버튼 묶음
          // Day = 각 요일을 가져옴. w라는 각각의 요소들의 day속성을 가져옴
          // from 메소드를 통해 맵소드 안에 평점을 나타낼 공 3개를 만들고 삼항연산식으로 색깔 지정
          <Days key={idx}>
            <Day>{w.day}</Day>
            {Array.from({ length: 5 }, (item, idx) => {
              // console.log("여기는", idx);
              return (
                <div
                  key={idx}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                  }}
                ></div>
              );
            })}
            <DetailBtn
              // ref={btnRef}
              onClick={() => {
                history.push(`/Detail/${w.day}`);
              }}
            ></DetailBtn>
          </Days>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h3`
  text-align: center;
`;
const Days = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;
const Day = styled.div`
  margin: 0 0.5rem 0 0;
  font-weight: bold;
`;
// const Star = styled.div`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   margin: 5px;
//   background-color: ${(week_rates) => week_rates[idx].rate > idx)};
//   백그라운드 삼항연산식으로 주고 싶은데 함수밖이라 week_rates의 인덱스나 다른 데이터를 못가져옴
//   해결 방안은?
// `
const DetailBtn = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default Main;

// 백그라운드 삼항연산식으로 주고 싶은데 함수밖이라 week_rates의 인덱스나 다른 데이터를 못가져옴
//   해결 방안은?
// styled component에 반복문을 돌리고 ref를 주면 마지막 요소만 ref를 받을 수 있나?
