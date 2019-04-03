import styled from 'styled-components';
import { Container } from 'reactstrap';

export const TitleContainer = styled(Container)`
  padding-top: 10px;
  padding-bottom: 10px;

  .btn-row {
    padding: 10px 0px;

    .btn-col {
      padding: 2px;

      .action-btn {
        font-weight: 500;
        font-size: 12px;
      }
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
  background-color: #d8e4fc;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: table;

  .vertical-aligned {
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
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #7ea6f6;
    font-size: 28px;

    &:focus, &:hover, &:active, &:visited {
      outline: none;
    }

    &:hover {
      color: #2569f1;
    }
  }
`;

export const LoadingAvatar = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d8e4fc;
  border-radius: 200px;
`;

export const LoadingTitle = styled.div`
  width: 220px;
  height: 40px;
  background-color: #d8e4fc;
  float: left;
  margin-top: 5px;
`;

export const LoadingSubtitle = styled.div`
  width: 170px;
  height: 20px;
  background-color: #d8e4fc;
  float: left;
  margin-top: 10px;
  clear: both;
`;

export const LoadingButton = styled.div`
  width: 100%;
  height: 30px;
  background-color: #d8e4fc;
`;