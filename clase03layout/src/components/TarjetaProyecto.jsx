import Boton from "./Boton";
import "../styles/TarjetaProyecto.css";

export default function TarjetaProyecto({titulo, descripcion, botonTexto}) {
    return (
        <div className="tarjeta-proyecto">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <Boton texto={botonTexto} titulo={titulo}/>
        </div>
    );
    
};
