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
        <p className="numPedido">
          Tu número de pedido es: <strong>{pedidoId}</strong>
        </p>
        <button className="comprafinalbtn">
          <Link to="/" className="comprafinallink">
            Volver a AstroShop
          </Link>
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(comprar)} className="checkoutFormu">
        <p>Nombre</p>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          {...register("nombre")}
          className="checkoutInput"
        />
        <p>Apellido</p>
        <input
          type="text"
          placeholder="Ingrese su apellido"
          {...register("apellido")}
          className="checkoutInput"
        />
        <p>E-mail</p>
        <input
          type="email"
          placeholder="Ingrese su email"
          {...register("email")}
          className="checkoutInput"
        />
        <button type="submit" className="eraseBtn">
          Comprar
        </button>
      </form>
    </>
  );
};

export default Checkout;
