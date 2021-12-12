import { Navigate } from 'react-router-dom';
import { Home, Main } from '../layouts';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import LinkCard from '../components/LinkCard';

const routes = [
  {
    path: '/',
    exact: true,
    component: Landing,
    layout: Home,
  },
  {
    path: '/about',
    component: About,
    layout: Main,
    label: 'Agnes Kao',
  },
  {
    path: '/portfolio',
    component: Portfolio,
    layout: Main,
    label: 'Frontend Engineer',
    childern: [
      {
        path: ':type',
        component: LinkCard,
      },
    ]
  },
  {
    path: '*',
    component: () => <Navigate replace to="/" />,
  }
];

export default routes;
