import { Link } from "react-router-dom";
import "./paginas/Paginas.css";
import Contador from "./ItemQuantitySelector";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const restarProd = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const sumarProd = () => {
    setQuantity(quantity + 1);
  };

  const { carritoCompras, agregarProd } = useContext(CartContext);
  console.log(carritoCompras);

  return (
    <div>
      <div className="contenedorBack">
        <Link to="/productos" className="goBack">
          Atras
        </Link>
      </div>
      <div className="detailedItem">
        <img src={item.img} alt={item.producto} />
        <div className="productoDetalles">
          <h3 className="lineasDetalles">{item.producto}</h3>
          <p className="lineasDetalles">{item.precio}</p>
          <p className="lineasDetalles">Descripcion: {item.descripcion}</p>
          <p className="lineasDetalles">Categoria: {item.categoria}</p>
          <Contador
            quantity={quantity}
            sumarProd={sumarProd}
            restarProd={restarProd}
            agregarProd={() => {
              agregarProd(item, quantity);
            }}
          ></Contador>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
