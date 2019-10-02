import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #000 url(${background}) no-repeat;
    background-size: cover;
  }

  body, input button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
