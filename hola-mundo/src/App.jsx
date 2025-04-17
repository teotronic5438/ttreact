import './App.css'
import ListaUsuarios from './components/listaDeUsuarios'
import Boton from './components/botonPrueba'
import ListaProductos from './components/listaProductos'
import Tarjeta from './components/tarjeta'
import Acciones from './components/acciones'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ListaUsuarios />
      <Boton 
        texto="Texto del boton"
        color="red"
      />
      <ListaProductos productos={["Agua", "Yerba", "Coca", "Leche"]} />
      <Tarjeta 
        titulo={"Oferta especial"}
        descripcion={"20% de descuento en todos los productos"}
        botonTexto={"Ver más"}
      />
      <Acciones />
    </>
  )
}

export default App
