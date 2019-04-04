import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MOVIE, TMDB_API_KEY, TMDB_IMG_BASE_URL } from '../utils/constants';

import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';
import TitleSection from '../components/TitleSection';
import SynopsisSection from '../components/SynopsisSection';
import RelatedSection from '../components/RelatedSection';

class Index extends Component {
  state = {
    loading: true,
    movie: {
      title: '',
      avatar: '',
      synopsis: '',
      poster: '',
    },
  };

  componentDidMount() {
    const { movieDetails } = this.props;

    setTimeout(() => {
      this.setState({
        movie: {
          avatar: `${TMDB_IMG_BASE_URL}${movieDetails.backdrop_path}`,
          title: movieDetails.title,
          synopsis: movieDetails.overview,
          poster: `${TMDB_IMG_BASE_URL}${movieDetails.poster_path}`,
        },
        loading: false,
      });
    }, 3000);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      <Layout>
        <ContentSection bottomBorder padded>
          <TitleSection {...movie} loading={loading} />
        </ContentSection>

        <ContentSection title="Synopsis" padded>
          <SynopsisSection {...movie} loading={loading} />
        </ContentSection>

        <ContentSection title="Related videos" padded>
          <RelatedSection {...MOVIE} loading />
        </ContentSection>
      </Layout>
    )
  }
}

Index.getInitialProps = async function () {
  const res = await fetch(`https://api.themoviedb.org/3/movie/399579?api_key=${TMDB_API_KEY}&language=en-US`);
  const data = await res.json();

  return {
    loading: false,
    movieDetails: data,
  }
}

export default Index;