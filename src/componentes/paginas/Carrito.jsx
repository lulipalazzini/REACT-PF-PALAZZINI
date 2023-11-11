import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carritoCompras, precioTotal, borrarCarrito } =
    useContext(CartContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carritoCompras.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.producto}</h3>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.quantity}</p>
          <p>Cantidad: {prod.quantity}</p>
        </div>
      ))}
      {carritoCompras.length > 0 ? (
        <span>
          <h2>Precio total: ${precioTotal().toFixed(2)}</h2>
          <button onClick={borrarCarrito}>Borrar</button>
        </span>
      ) : (
        <h2>Tu carrito esta vacio</h2>
        /* Fijate si agregas una fotito como de una estrella triste */
      )}
      <button>
        <Link to="/checkout">Finalizar Compra</Link>
      </button>
    </div>
  );
};

export default Carrito;
