import styled from 'styled-components';
import { Container } from 'reactstrap';

export const RelatedContainer = styled(Container)`
  .moviecard-col {
    padding: 5px 5px;
    padding-left: 0px;

    &:first-child {
      padding-left: 0px;
    }

    &:last-child {
      padding-right: 0px;

      &.col-6 {
        padding-right: 5px;
      }
    }
  }
`;
