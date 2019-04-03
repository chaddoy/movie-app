import React from 'react';
import PropTypes from 'prop-types';

import { LoadingBar } from './style';

const propTypes = {
  numberOfBars: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
};

const defaultProps = {
  numberOfBars: 10,
  minWidth: 200,
  maxWidth: 600,
};

export default class LoadingParagraph extends React.Component {
  getRandomWidth = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { numberOfBars, minWidth, maxWidth } = this.props;
    const bars = Array.from(Array(numberOfBars).keys());

    return (
      <div>
        {bars.map((num, index) => (
          <LoadingBar key={index} className="loading-gradient" />
        ))}
      </div>
    );
  }
}

LoadingParagraph.propTypes = propTypes;
LoadingParagraph.defaultProps = defaultProps;