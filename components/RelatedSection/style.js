import styled from 'styled-components';
import { Container } from 'reactstrap';

export const RelatedContainer = styled(Container)`
  .moviecard-col {
    padding: 0px 5px;

    &:first-child {
      padding-left: 0px;
    }

    &:last-child {
      padding-right: 0px;
    }
  }
`;
