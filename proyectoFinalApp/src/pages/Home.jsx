import EquipoTalentoLab from "../components/EquipoTalentoLab";
import Main from "../components/Main";

function Home(){
    const equipo = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://via.placeholder.com/100' },
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://via.placeholder.com/100' },
    ];

    return(
        <>
            <Main />
            <EquipoTalentoLab equipo={equipo} />
        </>
    )
}

export default Home;