import styled from 'styled-components';

export const LoadingBar = styled.div`
  width: 50px;
  height: 20px;
  background-color: #d8e4fc;
  margin-top: 8px;
  margin-right: 10px;
  float: left;

  &:nth-child(2n+1) {
    width: 240px;
  }

  &:nth-child(3n+2) {
    width: 78px;
  }

  &:nth-child(5n+3) {
    width: 169px;
  }

  &:nth-child(7n+5) {
    width: 130px;
  }

  &:nth-child(11n+7) {
    width: 83px;
  }
`;