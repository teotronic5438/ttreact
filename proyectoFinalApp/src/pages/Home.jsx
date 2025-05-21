import EquipoTalentoLab from "../components/EquipoTalentoLab";
import GaleriaIntereses from "../components/GaleriaIntereses";
import Main from "../components/Main";
import TarjetaProyecto from "../components/TarjetaProyecto";

function Home(){
    const equipo = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://placehold.co/200x100' },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://placehold.co/200x100' },
        { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://placehold.co/200x100' },
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://placehold.co/200x100' },
    ];

    const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

    return(
        <>
            <Main />
            <EquipoTalentoLab equipo={equipo} />
            <TarjetaProyecto
                titulo="Plataforma de Gestión"
                descripcion="Una herramienta para optimizar la gestión de equipos."
                botonTexto="Explorar proyecto"
            />
            <GaleriaIntereses temas={intereses}/>
        </>
    )
}

export default Home;