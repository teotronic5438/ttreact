import Swal from 'sweetalert2';

function Boton({texto, color, titulo}) {
    function mensaje() {
        // alert("¡Hola! Soy un botón explorando " + titulo);
        Swal.fire({
            title: '¡Hola!',
            text: "Explorando " + titulo,
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    }

    const estilo = { backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }
    return (
        <button style={estilo} onClick={mensaje}>
            {texto}
        </button>
    );
}

export default Boton;