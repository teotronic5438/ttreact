function Card({producto, funcionCarrito}){
    // console.log(persona);
    
    function agregarAlCarrito() {
        funcionCarrito(producto);
    }

    return(
        <div className="tarjetaIndividual">
            <div>
                <h3>{producto.nombre}</h3>
                <p className="descripcion">{producto.descripcion}</p>
            </div>
            <div>
                <img className="imagen-card" src={producto.imagen} alt = "Foto de la persona" />
            </div>
            <p>$ {producto.precio} ARS</p>
            <button className="btnAgregarCarrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Card;