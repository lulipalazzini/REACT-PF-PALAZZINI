import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import Inicio from "./componentes/paginas/Inicio";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Carrito from "./componentes/paginas/Carrito";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [carritoCompras, setCarritoCompras] = useState();

  const agregarProd = ({ item, quantity }) => {
    const itemAgregado = { ...item, quantity };
    const nuevoCarrito = [...carritoCompras];
    const estaEnCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnCarrito) {
      estaEnCarrito.cantidad += quantity;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarritoCompras(nuevoCarrito);
  };

  return (
    <>
      <CartContext.Provider value={(carritoCompras, agregarProd)}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Inicio greeting="Bienvenida a AstroShop!" />}
            />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          {/* ARMAR UN FOOTER */}
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
