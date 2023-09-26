import "./CartWidget.css";

const CartWidget = () => {
  return (
    <span>
      <img
        src="/imagenes/shoppingcart.png"
        alt="Carrito de compras"
        className="carrin"
      />
      <span>0</span>
    </span>
  );
};

export default CartWidget;
