import styled from 'styled-components';
import { Container } from 'reactstrap';

export const TitleContainer = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;

  .btn-row {
    padding: 10px 0px;

    .btn-col {
      padding: 2px;
    }
  }

  .display-table {
    width: 100%;
    height: 100%;
    display: table;

    .display-table-cell {
      display: table-cell;
      vertical-align: middle;
    }
  }
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 200px;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: table;

  &> * {
    display: table-cell;
    font-size: 24px;
    font-weight: 600;
    vertical-align: middle;
    line-height: 1.3;
  }

  button {
    padding: 5px;
    height: 32px;
    line-height: 0;
    padding-top: 0px;
  }
`;