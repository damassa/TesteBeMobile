import React from 'react';
import Horoscopo from './components/Horoscopo';
import { Artboard, ShowSigns, Wrapper } from './components/ShowSigns/style';

function App() {
  return (
    <Wrapper>
      <Artboard>
        <h1>Signos</h1>
        <Horoscopo>
          <ShowSigns />
        </Horoscopo>
      </Artboard>
    </Wrapper>
  );
}

export default App;
