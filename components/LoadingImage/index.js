import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './style';

const propTypes = {};

const defaultProps = {};

export default function LoadingImage(props) {
  return (
    <Image className="loading-gradient" />
  );
}

LoadingImage.propTypes = propTypes;
LoadingImage.defaultProps = defaultProps;