import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MOVIE } from '../utils/constants';

import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';
import TitleSection from '../components/TitleSection';
import SynopsisSection from '../components/SynopsisSection';
import RelatedSection from '../components/RelatedSection';

export default function Index(props) {
  return (
    <Layout>
      <ContentSection bottomBorder padded>
        <TitleSection {...MOVIE} loading />
      </ContentSection>

      <ContentSection title="Synopsis" padded>
        <SynopsisSection {...MOVIE} loading />
      </ContentSection>

      <ContentSection title="Related videos" padded>
        <RelatedSection {...MOVIE} loading />
      </ContentSection>
    </Layout>
  );
}