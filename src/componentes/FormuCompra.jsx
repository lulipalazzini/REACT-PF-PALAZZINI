import { useState } from "react";

const FormuCompra = () => {
  const [valores, setValores] = useState({
    nombre: "",
    email: "",
  });

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valores);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"
          placeholder="Ingrese su nombre"
        />
        <input
          type="email"
          value={valores.email}
          onChange={handleValores}
          name="email"
          placeholder="Ingrese su email"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormuCompra;
