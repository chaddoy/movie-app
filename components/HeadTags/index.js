import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

export default function HeadTags({ title }) {
  return (
    <Head>
      <title>{`${title} | Movie App`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}

HeadTags.propTypes = propTypes;