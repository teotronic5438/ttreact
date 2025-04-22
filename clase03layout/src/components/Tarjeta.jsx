function Tarjeta({nombre, rol, imagen}) {
    return(
        <div>
            <h3>{nombre}</h3>
            <p>{rol}</p>
            <img src={imagen} className="imagen-card" alt="Imagen avatar del usuario" />
        </div>
    )
}

export default Tarjeta;