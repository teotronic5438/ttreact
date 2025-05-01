import "../styles/BotonTemas.css";

export default function Boton({onClick}) {

    return (
        <button className="boton-proyecto" onClick={onClick}>
            Agregar al carrito
        </button>
    ); 
}
