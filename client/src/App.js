import React from 'react';
import Horoscopo from './components/Horoscopo';
import { Artboard, ShowSigns, Wrapper, Signos, Line, SignsWrapper, SignsIcon, SignsName, Name, SignsText, Text } from './components/ShowSigns/style';

function App() {
  return (
    <Wrapper>
      <Artboard>
        <Signos>Signos</Signos>
        <Line />
        <Horoscopo>
          <ShowSigns>
            <SignsWrapper>
              <SignsIcon></SignsIcon>
              <SignsName>
                <Name />
              </SignsName>
            </SignsWrapper>
            <SignsText>
              <Text/>
            </SignsText>
          </ShowSigns>
        </Horoscopo>
      </Artboard>
    </Wrapper>
  );
}

export default App;
