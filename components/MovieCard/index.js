import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

import { CardContainer } from './style';

const propTypes = {};

const defaultProps = {};

export default function MovieCard({ title, poster }) {
  return (
    <CardContainer>
      <CardImg top width="100%" src={poster} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Button block color="primary" className="watch-btn">Watch</Button>
      </CardBody>
    </CardContainer>
  );
}

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;