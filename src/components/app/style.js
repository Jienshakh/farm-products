import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    font-weight: 400;
    line-height: 27px;
    color: ${(props) => props.theme.colorBlackForText};
    min-height: 100%;
    background-color: ${(props) => props.theme.colorGrey};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
