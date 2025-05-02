import Boton from "./Boton";
import "../styles/Tarjeta.css";

function Tarjeta({producto, agregarAlCarrito}){
    const {nombre, descripcion, precio, imagen} = producto;
    return(
        <div className="producto-card">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p>Precio: $ {precio} ARS</p>
            <img src={imagen} className="imagen-card" alt="Imagen avatar del usuario" />
            <Boton onClick={() => agregarAlCarrito(producto)} />
        </div>
    )
}

export default Tarjeta;