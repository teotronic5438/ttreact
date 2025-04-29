import { useState } from 'react'
import './App.css'
import Contador from './assets/components/Contador'
import Boton from './assets/components/Boton'
import Formulario from './assets/components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <hr />

      <Contador />

      <hr />

      <Boton />

      <hr />

      <Formulario />
    </>
  )
}

export default App
