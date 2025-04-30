import Tarjeta from "./Tarjeta";
import "../styles/Productos.css";

function ProductosContainer({productos}){

    return(
        <div className="productos-conteiner">
            {productos.map(producto => (
                <Tarjeta key={producto.nombre}  producto={producto}/>
            ))}
        </div>
    )
}

export default ProductosContainer;