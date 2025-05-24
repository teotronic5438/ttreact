function Card({producto, funcionCarrito}){
    // console.log(persona);
    
    function agregarAlCarrito() {
        funcionCarrito(producto);
    }

    return(
        <div className="tarjetaIndividual">
            <div>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
            </div>
            <div>
                <img src={producto.imagen} alt = "Foto de la persona" />
            </div>
            <p>$ {producto.precio} ARS</p>
            <button className="btnAgregarCarrito" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Card;