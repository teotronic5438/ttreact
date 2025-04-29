import React, { useState } from 'react';


export default function Formulario() {

    const [nombre, setNombre] = useState("");

    function manejarSubmit(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        console.log(event);  // para ver en consola el evento
        console.log(event.target);
        // console.log(event.target.value);
        
        if (nombre.trim() === "") {
            alert("Por favor, ingresa un nombre.");
            return;
        }
    
        console.log("Nombre ingresado:", nombre);
        alert(`Hola: ${nombre}!!`);
        setNombre("");
    }

    return (
        <form onSubmit={manejarSubmit} className="formulario">
            <h2>Formulario</h2>
            <input
                className='input-nombre'
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} // Actualizar el estado con el valor del input
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}