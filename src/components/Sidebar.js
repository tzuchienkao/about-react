import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '../router/routes';

const Sidebar = () => {
  const menu = routes.filter((route) => {
    return route.label;
  })
  
  return (
    <nav>
      {
        menu.map((route, idx) => {
          const { path, label, icon } = route;
          return (
            <NavLink key={idx} activeclassname='active' to={path}>
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </NavLink>
          )
        })
      }
    </nav>
  )
}

export default Sidebar;