import { useNavigate } from "react-router-dom";

function Card({ producto }) {
    const navigate = useNavigate();

    const irAlDetalle = () => {
        navigate(`/productos/${producto.id}`);
    };

    return (
        <div className="tarjetaIndividual">
            <div>
                <h3>{producto.nombre}</h3>
            </div>
            <div>
                <img className="imagen-card" src={producto.imagen} alt={producto.nombre} />
            </div>
            <p>$ {producto.precio} ARS</p>

            <button className="btnAgregarCarrito" onClick={irAlDetalle}>
                Ver producto
            </button>
        </div>
    );
}

export default Card;
