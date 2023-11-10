import { Home, Watch, Search } from '../pages';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/watch',
    element: <Watch />,
  },
  {
    path: '/search',
    element: <Search />,
  },
];
