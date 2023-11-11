import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carritoCompras, setCarritoCompras] = useState(carritoInicial);

  const agregarProd = (item, quantity) => {
    const itemAgregado = { ...item, quantity };
    const nuevoCarrito = [...carritoCompras];
    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.quantity += quantity;
      setCarritoCompras(nuevoCarrito);
    } else {
      nuevoCarrito.push(itemAgregado);
      setCarritoCompras(nuevoCarrito);
    }
  };

  const cantidadEnCarrito = () => {
    return carritoCompras.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const precioTotal = () => {
    return carritoCompras.reduce(
      (acc, prod) => acc + prod.precio * prod.quantity,
      0
    );
  };

  const borrarCarrito = () => {
    setCarritoCompras([]);
  };

  useEffect(() => {
    localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
  }, [carritoCompras]);

  return (
    <CartContext.Provider
      value={{
        carritoCompras,
        agregarProd,
        cantidadEnCarrito,
        precioTotal,
        borrarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
