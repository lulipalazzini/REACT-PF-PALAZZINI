import { useEffect, useState } from "react";
import { listaProductos } from "../servicios/pedirDatos";
import Productos from "./paginas/Productos";
import { useParams } from "react-router-dom";
import "./paginas/Paginas.css";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    listaProductos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
      } else {
        setProductos(res);
      }
    });
  }, [categoria]);

  return (
    <>
      <h1>Productos</h1>
      <h2>{categoria}</h2>
      <Productos productos={productos} />
    </>
  );
};

export default ItemListContainer;
