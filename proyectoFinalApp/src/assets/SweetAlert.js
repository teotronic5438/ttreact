import Swal from 'sweetalert2';

export function dispararSweetBasico(titulo, texto, icono, textoBoton, mostrarCancelar = false) {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonText: textoBoton,
        background: '#f0f0f0',
        color: '#333',
        confirmButtonColor: '#3085d6',
        showCancelButton: mostrarCancelar,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
    });
}
