import { productosAstroShop } from "../mock/productosAstroShop";

export const listaProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosAstroShop);
    }, 1000);
  });
};

export const idItems = (id) => {
  return new Promise((resolve, reject) => {
    const item = productosAstroShop.find((prod) => prod.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontro el item",
      });
    }
  });
};
