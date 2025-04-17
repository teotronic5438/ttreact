import Boton from "./botonPrueba";

function Tarjeta({titulo, descripcion, botonTexto}) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <Boton texto={botonTexto} color={"black"} />
    </div>
  )
    
}

export default Tarjeta