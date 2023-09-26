import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="index.html">
        <img
          src="/imagenes/astroshopwhite.png"
          alt="AstroShop"
          className="logo"
        />
      </a>
      <ul>
        <li>
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="index.html">Productos</a>
        </li>
        <li>
          <a href="index.html">Carrito</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
