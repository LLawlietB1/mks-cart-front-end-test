import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid red; */
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #EEE;
  }

  body {
    background-color: #F9F9F9;
    color: #000;
    -webkit-font-smoothing: antialiassed;
  }

  body, input, textarea, button {
    font: 400 1rem 'Montserrat', sans-serif;
  }
`;
