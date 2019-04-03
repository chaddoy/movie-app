import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { MOVIE, DEFAULT_PROPS } from '../../utils/constants';

import { GlobalStyle } from '../../styles';
import HeadTags from '../HeadTags';
import NotFound from '../NotFound';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: DEFAULT_PROPS.notFound,
};

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container style={{ backgroundColor: '#f3f7fe' }}>
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