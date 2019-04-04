import NotFound from '../components/NotFound';
import ContentEmpty from '../components/ContentEmpty';

export const TMDB_API_KEY = '40effc549be18fce58bf8db1c1a0951f';
export const TMDB_IMG_BASE_URL = 'http://image.tmdb.org/t/p/w185';

export const MOVIE = {
  title: 'Alita: Battle Angel',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg',
  synopsis: 'Sequi consequatur et magni omnis porro tempore mollitia. Quasi deleniti voluptas et maiores aspernatur. Fuga adipisci quaerat esse consequuntur voluptatem nisi ut. Numquam consequatur enim alias nostrum. Reprehenderit aut explicabo dolor. Repellat omnis odit sapiente sit enim ab debitis molestiae. Fugiat et tenetur. Vel quo dolorum enim eaque. Eum adipisci qui et et tempore odit porro. Expedita aspernatur debitis. Qui dolores quo animi molestias dolor non esse. Consequuntur voluptatem sint veritatis repellendus praesentium eveniet et quibusdam. In magni et quis enim id et sunt iusto. Cum repudiandae sint aspernatur et deserunt a minima. Occaecati voluptate velit in minima officiis architecto voluptate architecto reprehenderit. Quod aut maiores praesentium voluptatem tempore consequatur animi necessitatibus.',
  poster: 'http://lorempixel.com/480/640/nature/',
};

export const DEFAULT_PROPS = {
  avatar: 'https://robohash.org/sitsequiquia.png?size=300x300&set=set1',
  poster: 'https://www.classicposters.com/images/nopicture.gif',
  notFound: <NotFound />,
  contentEmpty: <ContentEmpty />,
  relatedVideos: [{
    id: 'b764a6bd-0967-4d25-8d38-b50cdbe1c5ba',
    title: 'Movie 1',
    poster: 'http://lorempixel.com/480/640/nature/',
  }, {
    id: 'a1b08947-c76e-41d3-974b-27f996aeeb34',
    title: 'Movie 2',
    poster: 'http://lorempixel.com/480/640/nature/',
  }, {
    id: 'a0c8085f-b817-497b-92a6-b92da1189feb',
    title: 'Movie 3',
    poster: 'http://lorempixel.com/480/640/nature/',
  }, {
    id: 'f4d76865-8ae1-4ca8-bd76-f8367e57f77d',
    title: 'Movie 4',
    poster: 'http://lorempixel.com/480/640/nature/',
  }, {
    id: '0e0489d9-5a5a-4388-8c05-7d5289270c1d',
    title: 'Movie 5',
    poster: 'http://lorempixel.com/480/640/nature/',
  }, {
    id: 'c0c9728b-d57b-4d25-a97a-256d66ac8190',
    title: 'Movie 6',
    poster: 'http://lorempixel.com/480/640/nature/',
  }],
}
