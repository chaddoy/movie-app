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

  .italic {
    font-style: italic;
  }

  .loading-gradient {
    @keyframes placeHolderShimmer{
      0%{
          background-position: -468px 0
      }
      100%{
          background-position: 468px 0
      }
    }

    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #d8e4fc 10%, #eaf1fe 18%, #d8e4fc 33%);
    background-size: 800px 104px;
    position: relative;
  }
`;