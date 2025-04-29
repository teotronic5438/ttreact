export default function Boton() {
    
    function manejarClick() {
        alert("Hola, soy un botón clickable!");
    }

    return (
        <button onClick={manejarClick} className="btn btn-primary">
            Hacer Click!
        </button>
    );
}