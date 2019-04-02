import React from 'react';
import PropTypes from 'prop-types';

import { Content } from './style';

const propTypes = {};

const defaultProps = {};

export default function ContentSection({ title, children, bottomBorder }) {
  const sectionTitle = title ? (<h5>{title}</h5>) : null;
  const hr = bottomBorder? (<hr />) : null;

  return (
    <Content>
      {sectionTitle}
      {children}

      {hr}
    </Content>
  );
}

ContentSection.propTypes = propTypes;
ContentSection.defaultProps = defaultProps;