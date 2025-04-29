import React, { useState } from 'react';


export default function Formulario() {

    const [nombre, setNombre] = useState("");

    function manejarSubmit(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        alert(`Hola: ${nombre}!!`); // Mostrar el nombre ingresado en una alerta
        setNombre(""); // Limpiar el campo de texto después de enviar el formulario
        // Aquí puedes agregar más lógica para manejar el envío del formulario, como enviar datos a un servidor o realizar otras acciones.
    }

    return (
        <form onSubmit={manejarSubmit} className="formulario">
            <h2>Formulario</h2>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} // Actualizar el estado con el valor del input
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}