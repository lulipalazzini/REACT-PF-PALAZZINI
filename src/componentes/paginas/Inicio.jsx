import "./Paginas.css";

const inicio = ({ greeting }) => {
  return (
    <div>
      <img
        src="/imagenes/portadaAstro.png"
        alt="AstroShop Portada"
        className="portadaAstro"
      />
      <h1>Inicio</h1>
      <div
        style={{ color: "#3f3d56", textAlign: "center", marginTop: "1.5em" }}
      >
        <h2>{greeting}</h2>
      </div>
    </div>
  );
};

export default inicio;
