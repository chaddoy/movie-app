import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TMDB_API_KEY, TMDB_IMG_BASE_URL } from '../utils/constants';
import { DEFAULT_PROPS } from '../utils/constants';

import Layout from '../components/Layout';
import ContentSection from '../components/ContentSection';
import TitleSection from '../components/TitleSection';
import SearchSection from '../components/SearchSection';
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
      relatedVideos: DEFAULT_PROPS.relatedVideos,
      faved: false,
    },
  };

  componentDidMount() {
    const { movieDetails, relatedVideos } = this.props;

    setTimeout(() => {
      let faved = false;

      if (localStorage.getItem('faved') === 'true') {
        faved = true;
      }

      this.setState({
        movie: {
          avatar: `${TMDB_IMG_BASE_URL}${movieDetails.backdrop_path}`,
          title: movieDetails.title,
          synopsis: movieDetails.overview,
          poster: `${TMDB_IMG_BASE_URL}${movieDetails.poster_path}`,
          relatedVideos,
          faved,
        },
        loading: false,
      });
    }, 3000);
  }

  onFavourite = () => {
    const { movie } = this.state;

    this.setState({
      movie: {
        ...movie,
        faved: !movie.faved,
      }
    });
    localStorage.setItem('faved', !movie.faved);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      <Layout>
        <ContentSection bottomBorder padded>
          <TitleSection {...movie} loading={loading} onFavourite={this.onFavourite} />
        </ContentSection>

        <ContentSection padded style={{ paddingTop: 0, paddingBottom: 0 }}>
          <SearchSection />
        </ContentSection>

        <ContentSection title="Synopsis" padded>
          <SynopsisSection {...movie} loading={loading} />
        </ContentSection>

        <ContentSection title="Related videos" padded>
          <RelatedSection {...movie} loading={loading} />
        </ContentSection>
      </Layout>
    )
  }
}

Index.getInitialProps = async function () {
  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/399579?api_key=${TMDB_API_KEY}&language=en-US`);
  const relatedRes = await fetch(`https://api.themoviedb.org/3/movie/399579/similar?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
  const movieDetails = await movieRes.json();
  const similarMovies = await relatedRes.json();

  const relatedVideos = _.map(similarMovies.results, (movie) => ({
    id: movie.id,
    title: movie.title,
    poster: `${TMDB_IMG_BASE_URL}${movie.poster_path}`,
  }));

  return {
    loading: false,
    movieDetails,
    relatedVideos,
  }
}

export default Index;