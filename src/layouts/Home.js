import { Link, useLocation } from "react-router-dom";
import routes from '../router/routes';
import LinkCard from '../components/LinkCard';

const Home = ({ children }) => {
  const { pathname } = useLocation();
  const pageLinks = routes
    .filter((route) => {
      return route.path !== pathname && route.layout
    })
    .map((route) => {
      const { label } = route;
      route.title = label;
      route.content = 'HiHi';
      return route;
    });

  return (
    <div>
      {children}
      {pageLinks.map((route) => {
        return pageLinkRender(route)
      })}
    </div>
  )
}

const pageLinkRender = (route) => {
  const { path, title, content } = route
  return (
    <Link to={path}>
      <LinkCard title={title} content={content} />
    </Link>
  )
}

export default Home;
