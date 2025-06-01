import './App.css'
import Swall from 'sweetalert2'

function App() {

  const mostrarAlerta = () => {
    Swall.fire({
      title: '¡Hola!',
      text: 'Esta es una alerta de SweetAlert2',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    })
  }

  return (
    <>
      <h1>Clase 08 - Contexto</h1>
      <p>En esta clase veremos cómo utilizar el contexto en React para compartir datos entre componentes sin necesidad de pasar props manualmente.</p>
      <p>El contexto es útil para temas como la autenticación, el idioma de la aplicación, o cualquier otro dato que necesite ser accesible en muchos niveles de la jerarquía de componentes.</p>
      <p>Vamos a crear un contexto para manejar un carrito de compras y ver cómo podemos acceder a él desde diferentes componentes.</p>
      <button className='btn-alert' onClick={mostrarAlerta}>Confirma</button>
    </>
  )
}

export default App
