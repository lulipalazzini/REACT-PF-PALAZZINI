import { useContext } from "react";
import Checkout from "../Checkout";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carritoCompras, precioTotal, borrarCarrito } =
    useContext(CartContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <Checkout></Checkout>
      {carritoCompras.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.producto}</h2>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.quantity}</p>
          <p>Cantidad: {prod.quantity}</p>
        </div>
      ))}
      {carritoCompras > 0 ? (
        <>
          <h2>Precio total: ${precioTotal()}</h2>
          <button onClick={borrarCarrito()}>Borrar</button>
        </>
      ) : (
        <h2>Tu carrito esta vacio</h2>
        /* Fijate si agregas una fotito como de una estrella triste */
      )}
    </div>
  );
};

export default Carrito;
