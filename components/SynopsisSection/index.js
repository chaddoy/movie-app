import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { DEFAULT_PROPS } from '../../utils/constants';

import { SynopsisContainer } from './style';
import LoadingParagraph from '../LoadingParagraph';
import LoadingImage from '../LoadingImage';

const propTypes = {
  synopsis: PropTypes.string.isRequired,
  poster: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const defaultProps = {
  poster: DEFAULT_PROPS.notFoundImg,
};

export default function SynopsisSection({ synopsis, poster, loading }) {
  return (
    <SynopsisContainer>
      <Row>
        <Col
          xs={{ size: 12, order: 2 }}
          sm={{ size: 12, order: 2 }}
          md={{ size: 9, order: 1 }}
          className="synopsis"
        >
          {loading ? (
            <LoadingParagraph numberOfBars={30} />
          ) : synopsis}
        </Col>
        <Col
          xs={{ size: 12, order: 1 }}
          sm={{ size: 12, order: 1 }}
          md={{ size: 3, order: 2 }}
          className="poster"
        >
          {loading ? (
            <LoadingImage />
          ) : (
            <img src={poster} alt="" style={{ width: '100%' }} />
          )}
        </Col>
      </Row>
    </SynopsisContainer>
  );
}

SynopsisSection.propTypes = propTypes;
SynopsisSection.defaultProps = defaultProps;