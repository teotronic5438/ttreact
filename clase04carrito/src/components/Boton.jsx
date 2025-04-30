import "../styles/BotonTemas.css";

export default function Boton() {
    function handleClick() {
        alert(`articulo agregado al carrito`);
    }
    return (
        <button className="boton-proyecto" onClick={handleClick}>
            Agregar al carrito
        </button>
    ); 
}
