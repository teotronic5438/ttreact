import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nombre, setNombre] = useState("")
  const [contador, setContador] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Primer app con saludo reactivo</h1>

      <div className="card">
        <label>Ingrese su nombre: </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        {nombre !== "" && <p>Hola {nombre}</p>}
      </div>

      <div>
        <p>Prueba este breve contador</p>
        <p>{contador}</p>
        <button onClick={() => setContador(contador+1)}>Incrementar</button>&nbsp;&nbsp;
        <button onClick={() => setContador(0)}>Reset</button>
        {contador == 0 ? <p>No hiciste click</p> : (contador == 1 ? <p>Hiciste 1 click</p> : <p>Hiciste {contador} clicks</p>) }
      </div>

    </>
  )
}

export default App
