import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <img
          src="/imagenes/astroshopwhite.png"
          alt="AstroShop"
          className="logo"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/productos">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/productos/magia">Magia</NavLink>
        </li>
        <li>
          <NavLink to="/productos/adivinacion">Adivinacion</NavLink>
        </li>
        <li>
          <NavLink to="/carrito">Carrito</NavLink>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
