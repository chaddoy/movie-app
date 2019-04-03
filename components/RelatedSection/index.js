import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { RelatedContainer } from './style';
import MovieCard from '../MovieCard';

const propTypes = {};

const defaultProps = {};

export default function RelatedSection({ relatedVideos }) {
  return (
    <RelatedContainer>
      <Row>
        {relatedVideos.map(movie => (
          <Col key={movie.id} className="moviecard-col">
            <MovieCard
              {...movie}
              xs="3"
            />
          </Col>
        ))}
      </Row>
    </RelatedContainer>
  );
}

RelatedSection.propTypes = propTypes;
RelatedSection.defaultProps = defaultProps;