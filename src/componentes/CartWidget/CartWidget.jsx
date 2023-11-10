import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <span>
      <img
        src="/imagenes/shoppingcart.png"
        alt="Carrito de compras"
        className="carrin"
      />
      <span>{cantidadEnCarrito()}</span>
    </span>
  );
};

export default CartWidget;
