import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logoWhistleblower.png';
import styled from "styled-components";
import ButtonStyles from "./components/ButtonStyles";
import Picture from "./wave.jpg";

const AppContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 90px;
  position: absolute;
  top: 10px;
  left: 10px;
`;


const AppHeader = styled.header`
  background-color: #d4d4d4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const RobotoText = styled.p`
  font-family: 'Roboto Flex', sans-serif;
  font-weight: 200;
  font-size: 40px;
`;

const LatoText = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

function App() {
  return (
    <AppContainer className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppHeader>
        <Logo src={logo} alt="logo" />
        <Picture>
          
        </Picture>
        <RobotoText>
          Roboto flex is a nice font.
        </RobotoText>
        <LatoText>
          Lato is a nice font.
        </LatoText>
        <ButtonStyles>
          Pretty button
        </ButtonStyles>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
