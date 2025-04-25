export default function Boton({ texto, titulo }) {
    function handleClick() {
        alert(`Explorando el proyecto: ${titulo}`);
    }
    return (
        <button className="boton-proyecto" onClick={handleClick}>
            {texto}
        </button>
    ); 
}
