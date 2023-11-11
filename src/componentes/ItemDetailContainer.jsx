import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/data";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    const referenciaDoc = doc(database, "productosAstroShop", id);
    getDoc(referenciaDoc).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
