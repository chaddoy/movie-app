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
  relatedVideos: [
    { id: 1, title: '', poster: '' },
    { id: 2, title: '', poster: '' },
    { id: 3, title: '', poster: '' },
    { id: 4, title: '', poster: '' },
    { id: 5, title: '', poster: '' },
    { id: 6, title: '', poster: '' },
  ],
  notFound: <NotFound />,
  notFoundImg: '/static/notfound-img.png',
  contentEmpty: <ContentEmpty />,
}
