import { NavLink } from "react-router-dom";

const isActiveMenu = ({ isActive }) => (isActive ? "active-menu-item" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={isActiveMenu} to="/">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/about">
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/articles">
            Посты
          </NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/login">
            Логин
          </NavLink>
        </li>
        <li>
          <NavLink className={isActiveMenu} to="/products">
            Товары
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
