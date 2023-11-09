const Contador = ({ quantity, sumarProd, restarProd, agregarProd }) => {
  return (
    <>
      <div className="quantitySelector">
        <button onClick={restarProd} className="quantityBtn">
          -
        </button>
        <p>{quantity}</p>
        <button onClick={sumarProd} className="quantityBtn">
          +
        </button>
      </div>
      <button className="btnCompra" onClick={agregarProd}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default Contador;
