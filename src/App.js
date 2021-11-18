import React from "react";
import Main from "./Main";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/detail/:day">
          <Detail />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 0px 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

export default App;
