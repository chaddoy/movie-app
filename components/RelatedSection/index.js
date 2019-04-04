import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { RelatedContainer } from './style';
import MovieCard from '../MovieCard';

const propTypes = {
  relatedVideos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const defaultProps = {
  relatedVideos: [],
};

export default function RelatedSection({ relatedVideos, loading }) {
  return (
    <RelatedContainer>
      <Row>
        {relatedVideos.map(movie => (
          <Col
            key={movie.id}
            className="moviecard-col"
            xs="6" sm="6" md="4" lg="2" xl="2"
          >
            <MovieCard
              {...movie}
              loading={loading}
            />
          </Col>
        ))}
      </Row>
    </RelatedContainer>
  );
}

RelatedSection.propTypes = propTypes;
RelatedSection.defaultProps = defaultProps;