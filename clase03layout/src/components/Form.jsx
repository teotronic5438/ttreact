import React, { useState } from 'react';
import '../styles/Form.css';

export default function Form() {

    const [nombre, setNombre] = useState('');

    function manejarEnvio(event) {
        event.preventDefault();
        alert(`Formulario enviado por ${nombre}`);
    }

    return (
        <form className="formulario" onSubmit={manejarEnvio}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );

}