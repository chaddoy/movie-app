import styled from 'styled-components';
import { Card, CardTitle } from 'reactstrap';

export const CardContainer = styled(Card)`
  .card-body {
    padding: 10px;
    font-weight: 500;
    font-size: 12px;

    .watch-btn {
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

export const LoadingCardTitle = styled(CardTitle)`
  width: 100px;
  height: 20px;
  background-color: #d8e4fc;
`;

export const LoadingCardButton = styled(CardTitle)`
  height: 30px;
  background-color: #d8e4fc;
`;
