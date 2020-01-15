import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

   *, *::before, *::after{
      box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
       
  body {
    font-family: Roboto, sans-serif;
  }
  html{
    font-size:62,5%;
  }
`;

export default GlobalStyle;
