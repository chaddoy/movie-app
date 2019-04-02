import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { MOVIE } from '../../utils/constants';

import { GlobalStyle } from '../../styles';
import HeadTags from '../HeadTags';
import NotFound from '../NotFound';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: <NotFound />,
};

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Row>
          <Col>
            <HeadTags title={MOVIE.title} />
            {children}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;