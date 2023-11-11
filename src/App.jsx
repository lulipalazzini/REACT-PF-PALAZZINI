import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import Inicio from "./componentes/paginas/Inicio";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Carrito from "./componentes/paginas/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./componentes/paginas/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          {/* ARMAR UN FOOTER */}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
