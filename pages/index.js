import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MOVIE } from '../utils/constants';

import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';
import TitleSection from '../components/TitleSection';

export default function Index(props) {
  return (
    <Layout>
      <ContentSection bottomBorder>
        <TitleSection {...MOVIE} />
      </ContentSection>
    </Layout>
  );
}