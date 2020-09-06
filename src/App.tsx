import React from "react";
import { Routes } from "./Routes";
import { ResetCSS } from "./utils/ResetCSS";
import { BrowserRouter } from "react-router-dom";
import "./utils/initSwiper";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper id="root">
      <ResetCSS />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.main`
  padding: 16px;
`;
