import styled from 'styled-components';
import { Container } from 'reactstrap';

export const SearchContainer = styled(Container)`
  button {
    font-size: 13px;
    padding: 5px;
    line-height: 0.8;
    width: 64px;
    margin-top: 6px;

    span {
      font-size: 24px;
      line-height: 0.1;
      font-weight: bold;
    }
  }
`;
