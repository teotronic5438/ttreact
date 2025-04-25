import BotonTemas from "./BotonTemas";

export default function GaleriaIntereses({intereses}) {
    return (
        <section className="galeria-intereses">
            <h2>Intereses</h2>
            <div className="intereses-grid">
                {intereses.map((interes, index) => (
                    <BotonTemas key={index} texto={interes} />
                ))}
            </div>
        </section>
    );
};


// Crea un componente GaleriaIntereses:
// Este componente debe recibir un array de temas como prop y mostrar un botón para cada uno.
// Interactividad: Al hacer clic en un botón, cambia su color de fondo dinámicamente.