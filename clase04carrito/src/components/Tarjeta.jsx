import Boton from "./Boton";

function Tarjeta({producto}){
    const {nombre, descripcion, precio, imagen} = producto;
    return(
        <div className="producto-card">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: $ {precio} ARS</p>
            <img src={imagen} className="imagen-card" alt="Imagen avatar del usuario" />
            <Boton />
        </div>
    )
}

export default Tarjeta;