import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  .bordered {
    border: 1px solid;
  }

  .orange {
    border-color: orange;
  }

  .no-padding {
    padding: 0px;
  }
`;