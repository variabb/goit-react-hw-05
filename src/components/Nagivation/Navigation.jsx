import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.navigationWrapper}>
      <ul className="navigation-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
