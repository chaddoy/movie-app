import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_PROPS } from '../../utils/constants';

import { Content } from './style';
import ContentEmpty from '../ContentEmpty';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: DEFAULT_PROPS.contentEmpty,
};

export default function ContentSection({ title, children, bottomBorder, padded, style }) {
  const sectionTitle = title ? (<h5>{title}</h5>) : null;
  const hr = bottomBorder? (<hr />) : null;

  return (
    <Content padded={padded} style={style}>
      {sectionTitle}
      {children}

      {hr}
    </Content>
  );
}

ContentSection.propTypes = propTypes;
ContentSection.defaultProps = defaultProps;