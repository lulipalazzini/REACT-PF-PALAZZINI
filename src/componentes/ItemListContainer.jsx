import { useEffect, useState } from "react";
import Productos from "./paginas/Productos";
import { useParams } from "react-router-dom";
import "./paginas/Paginas.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase/data";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    const referenciaProd = collection(database, "productosAstroShop");
    const q = categoria
      ? query(referenciaProd, where("categoria", "==", `${categoria}`))
      : referenciaProd;
    getDocs(q).then((res) => {
      setProductos(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
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
