import Boton from './botonPrueba';
import './acciones.css';

function Acciones() {
  const handleGuardar = () => {
    alert('Guardado correctamente');
  };

  const handleCancelar = () => {
    console.log('Acción cancelada');
  };

  const handleEliminar = () => {
    confirm('¿Estás seguro que querés eliminar esto?');
  };

  return (
    <div>
      <h2>Acciones disponibles:</h2>
      <div className="acciones-contenedor">
        <Boton texto="Guardar" color="green" onClick={handleGuardar} />
        <Boton texto="Cancelar" color="gray" onClick={handleCancelar} />
        <Boton texto="Eliminar" color="red" onClick={handleEliminar} />
      </div>
    </div>
  );
}

export default Acciones;

