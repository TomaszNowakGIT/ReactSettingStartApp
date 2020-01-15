import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'components/thame/globalStyle';

const Root = () => (
  <div className="App">
    <GlobalStyle />
    <h1>hello</h1>
    <Button backgroundColor='none'>Przycisk</Button>
    <Button secondary>Przycisk</Button>
  </div>
);

export default Root;
