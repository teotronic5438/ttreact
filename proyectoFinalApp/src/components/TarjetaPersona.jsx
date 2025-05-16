function TarjetaPersona({persona}){
    // console.log(persona);
    
    return(
        <div className="tarjetaIndividual">
            <div>
                <h1>{persona.nombre}</h1>
                <p>{persona.rol}</p>
            </div>
            <div>
                <img src={persona.imagen} alt = "Foto de la persona" />
            </div>
        </div>
    )
}

export default TarjetaPersona;