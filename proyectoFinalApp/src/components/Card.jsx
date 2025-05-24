function Card({producto}){
    // console.log(persona);
    
    return(
        <div className="tarjetaIndividual">
            <div>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>$ {producto.precio}</p>
            </div>
            <div>
                <img src={producto.imagen} alt = "Foto de la persona" />
            </div>
        </div>
    )
}

export default Card;