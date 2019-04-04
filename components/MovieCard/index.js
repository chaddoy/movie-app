import React from 'react';
import PropTypes from 'prop-types';
import { CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { DEFAULT_PROPS } from '../../utils/constants';

import { CardContainer, LoadingCardTitle, LoadingCardButton } from './style';
import LoadingImage from '../LoadingImage';

const propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

const defaultProps = {
  poster: DEFAULT_PROPS.notFoundImg,
};

export default function MovieCard({ title, poster, loading }) {
  return (
    <CardContainer>
      {loading ? (
        <LoadingImage className="loading-gradient" />
      ) : (
        <CardImg top width="100%" src={poster} alt={title} />
      )}
      <CardBody>
        {loading ? (
          <LoadingCardTitle className="loading-gradient" />
        ) : (
          <CardTitle>{title}</CardTitle>
        )}

        {loading ? (
        <LoadingCardButton className="loading-gradient" />
        ) : (
          <Button block color="primary" className="watch-btn">Watch</Button>
        )}
      </CardBody>
    </CardContainer>
  );
}

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;