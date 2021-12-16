import { Navigate } from 'react-router-dom';
import { Home, Main } from '../layouts';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import LinkCard from '../components/LinkCard';

const routes = [
  {
    path: '/about-react/',
    exact: true,
    component: Landing,
    layout: Home,
  },
  {
    path: '/about-react/about',
    component: About,
    layout: Main,
    label: 'Agnes Kao',
  },
  {
    path: '/about-react/portfolio',
    component: Portfolio,
    layout: Main,
    label: 'Frontend Engineer',
    childern: [
      {
        path: ':type/:case',
        component: LinkCard,
      },
    ]
  },
  {
    path: '*',
    component: () => <Navigate replace to="/about-react/" />,
  }
];

export default routes;