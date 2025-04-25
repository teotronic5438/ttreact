import React, { useState } from 'react';
import '../styles/BotonTemas.css';

export default function BotonTemas({texto}) {
    const [color, setColor] = useState('white');

    function handleClick() {
        setColor(color === 'white' ? 'lightblue' : 'white');
    }

    return (
        <button className="boton-tema" onClick={handleClick} style={{ backgroundColor: color }}>
            {texto}
        </button>
    );
    
};
