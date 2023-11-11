import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebase/data";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carritoCompras, precioTotal, borrarCarrito } =
    useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (datos) => {
    const pedidoAstro = {
      cliente: datos,
      productos: carritoCompras,
      total: precioTotal(),
    };
    console.log(pedidoAstro);

    const referenciaPedidos = collection(database, "datosPedido");

    addDoc(referenciaPedidos, pedidoAstro).then((doc) => {
      setPedidoId(doc.id);
      borrarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div>
        <h1>Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
        <button>
          <Link to="/">Volver a AstroShop</Link>
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>Checkout</h1>
      <div>
        <form onSubmit={handleSubmit(comprar)}>
          <span>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              {...register("nombre")}
            />
            <input
              type="text"
              placeholder="Ingrese su apellido"
              {...register("apellido")}
            />
          </span>
          <input
            type="email"
            placeholder="Ingrese su email"
            {...register("email")}
          />
          <button type="submit">Comprar</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
