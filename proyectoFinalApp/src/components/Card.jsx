function Card({producto}){
    // console.log(persona);
    
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
            <button className="btnAgregarCarrito">Agregar al carrito</button>
        </div>
    )
}

export default Card;