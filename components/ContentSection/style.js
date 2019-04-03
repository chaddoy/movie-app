import styled from 'styled-components';

export const Content = styled.div`
  padding: ${props => props.padded ? '20px 10px' : '0px'};

  @media only screen and (max-width: 380px) {
    padding: ${props => props.padded ? '20px 0px' : '0px'};
  }

  hr {
    border-width: 2px;
    border-color: #d8e4fc;
    paddding-left: 0px;
    paddding-right: 0px;
    margin-bottom: 0px;
  }
`;