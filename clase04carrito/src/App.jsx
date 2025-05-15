/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Productos from './layouts/Productos'
import Carrito from './layouts/Carrito'
import Nav from './components/Nav'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router> 
        <div>
          <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<Productos />} />
                <Route path='/carrito' element={<Carrito />} />
            </Routes>
        </div>
    </Router>

  )
}

export default App
