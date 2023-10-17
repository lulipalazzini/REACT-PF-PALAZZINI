import { Link } from "react-router-dom";
import "./paginas/Paginas.css";

const Item = ({ producto }) => {
  return (
    <div className="productosAstro">
      <img src={producto.img} alt={producto.producto} className="imgProd" />
      <div>
        <h3 className="detalles">{producto.producto}</h3>
        <p className="detalles">{producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="verMas">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
