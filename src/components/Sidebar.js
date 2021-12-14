import { NavLink } from "react-router-dom";
import routes from '../router/routes';

const Sidebar = () => {
  const menu = routes.filter((route) => {
    return route.label;
  })
  
  return (
    <nav>
      {
        menu.map((route, idx) => {
          const { path, label } = route;
          return (
            <NavLink key={idx} activeclassname='active' to={path}>{label}</NavLink>
          )
        })
      }
    </nav>
  )
}

export default Sidebar;