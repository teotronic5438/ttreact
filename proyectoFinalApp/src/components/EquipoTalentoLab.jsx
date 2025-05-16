import TarjetaPersona from "./TarjetaPersona"

function EquipoTalentoLab({equipo}) {
    console.log(equipo);
    
    return(
        <div className="contenedorTarjetas">
            {equipo.map((persona) => (
                <TarjetaPersona key={persona.nombre}  persona={persona} />
            ))}
        </div>
    )
}

export default EquipoTalentoLab;