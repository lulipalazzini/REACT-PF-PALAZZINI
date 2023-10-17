import Item from "../Item";
import "./Paginas.css";

const Productos = ({ productos }) => {
  return (
    <div>
      <div className="grilla">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
