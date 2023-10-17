import { Link } from "react-router-dom";
import "./paginas/Paginas.css";

const ItemDetail = ({ item }) => {
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
          <button className="lineasDetalles">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
