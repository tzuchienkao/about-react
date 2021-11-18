
import routes from '../router/routes';
import * as style from '../style/global';

const { StyleNavLink } = style;

const Sidebar = () => {
  const menu = routes.filter((route) => {
    return route.label;
  })
  
  return menu.map((route, idx) => {
    const { path, label } = route;
    return (
      <StyleNavLink key={idx} activeclassname='active' to={path}>{label}</StyleNavLink>
    )
  })
}

export default Sidebar;