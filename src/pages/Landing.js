import { Link, useLocation } from "react-router-dom";
import routes from '../router/routes';
import LinkCard from '../components/LinkCard';

const Landing = () => {
  return (
    <>
      <div className="wrapper relative">
        <div className="wrapper__left">
          <PageLinks />
        </div>
        <div className="wrapper__right">
          <div>
            <b>Frontend Engineer</b>
            <p>oyan114@hotmail.com</p>
          </div>
        </div>
      </div>
      <div className="keyvisual">
        <div className="keyvisual__photo">
          <img src="https://tzuchienkao.github.io/about-react/img/me.jpg" alt="高慈謙 Agnes Kao" />
        </div>
        <b>Agnes Kao</b>
      </div>
    </>
  )
}

const PageLinks = () => {
  const { pathname } = useLocation();
  const pageLinks = routes
    .filter((route) => {
      return route.path !== pathname && route.layout
    })
    .map((route) => {
      const { label, path } = route;
      const content = path.replace('/about-react/', '')
      route.title = label;
      switch (content) {
        case 'about':
          route.content = 'Bachelor Degree of NFU\nMultimedia Desgin';
          break;
        case 'portfolio':
          route.content = 'HTML, CSS, Javascript, Vue.js, Vue-cli, Nuxt.js, GIT, ESLint, Postman';
          break;
        default:
          route.content = '';
          break;
      }
      return route;
    });


  return (
    <>
      {pageLinks.map((route) => {
        return pageLinkRender(route)
      })}
    </>
  )
}

const pageLinkRender = (route) => {
  const { path, title, content } = route
  return (
    <Link key={title} to={path}>
      <LinkCard title={title} content={content} />
    </Link>
  )
}

export default Landing;