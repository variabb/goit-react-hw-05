import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigationWrapper}>
      <ul className={s.navigationList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.activeLink}` : s.navLink
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.activeLink}` : s.navLink
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
