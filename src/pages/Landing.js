import { Link, useLocation } from "react-router-dom";
import routes from '../router/routes';
import LinkCard from '../components/LinkCard';
import styled from "styled-components";

const StylePageSection = styled.div
`
  height: inherit;
  display: grid;
  grid-auto-columns: 0.9fr 0.3fr;
  grid-auto-flow: column;
  gap: 20px;
`;
const StyleRSection = styled.div
`
  color: #222;
  background: #fff;
`

const Landing = () => {
  return (
    <>
      <StylePageSection className="wrapper">
        <div className="left-section">
          <PageLinks />
        </div>
        <StyleRSection className="right-section">
          <div className="rotate">
            <b>Frontend Engineer</b>
            <p>oyan114@hotmail.com</p>
          </div>
        </StyleRSection>
      </StylePageSection>
      <div className="absolute">
        <div className="photo">
          <img src="/img/about.jpg" alt="" />
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
      const content = path.replace('/', '')
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