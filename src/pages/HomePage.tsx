import React from "react";
import styled from "styled-components";

const HomePage: React.FC = () => {
  return <Wrapper>I'm HomePage</Wrapper>;
};

export default HomePage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
