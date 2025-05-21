import Boton from "./Boton";
function TarjetaProyecto({titulo, descripcion, botonTexto}) {
    return (
        <div className="tarjeta-proyecto">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <Boton texto = {botonTexto} color={'black'} titulo={titulo}/>
        </div>
    );

}

export default TarjetaProyecto;