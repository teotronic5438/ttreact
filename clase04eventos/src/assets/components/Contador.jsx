import React, { useState } from 'react';

function Contador() {

    const [contador, setContador] = useState(0);
    const [variable, setVariable] = useState(0);

    return (
        <div className="contador">
            {/* Contador Numero 1 */}
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>

            {/* Contador Numero 2 */}
            <h2>Variable: {variable}</h2>
            <button onClick={() => setVariable(variable + 1)}>Incrementar Variable</button>
        </div>
    );

}

export default Contador;