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
        <div key={prod.id} className="carritoEstilo">
          <h3>{prod.producto}</h3>
          <p>Precio unitario: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.quantity}</p>
          <p>Cantidad: {prod.quantity}</p>
        </div>
      ))}
      {carritoCompras.length > 0 ? (
        <>
          <span className="preciobtn">
            <h3>Precio total: ${precioTotal().toFixed(2)}</h3>
            <button onClick={borrarCarrito} className="eraseBtn">
              Borrar
            </button>
          </span>
          <button className="comprafinalbtn">
            <Link to="/checkout" className="comprafinallink">
              Finalizar Compra
            </Link>
          </button>
        </>
      ) : (
        <>
          <h2>Tu carrito esta vacio :( </h2>
          <div className="astroLlora">
            <img src="/imagenes/carritoVacio.png" alt="Estrella llorando" />
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
