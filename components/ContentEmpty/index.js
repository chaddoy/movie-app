import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function ContentEmpty(props) {
  return (
    <div className="italic">
      Content empty.
    </div>
  );
}

ContentEmpty.propTypes = propTypes;
ContentEmpty.defaultProps = defaultProps;