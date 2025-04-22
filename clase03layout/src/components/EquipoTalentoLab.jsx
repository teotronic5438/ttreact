import Tarjeta from "./Tarjeta";

function EquipoTalentoLab({equipo}){

    return(
        <div className="equipo-grid">
            {equipo.map(miembro => (
                <Tarjeta key={miembro.nombre}  nombre={miembro.nombre} rol={miembro.rol} imagen={miembro.imagen}/>
            ))}
        </div>
    )
}

export default EquipoTalentoLab;