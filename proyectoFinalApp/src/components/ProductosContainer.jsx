import "../styles/ProductosContainer.css";
import Card from "./Card";

function ProductosContainer({productos}){
    return(
        <div className="productosContainer">
            {productos.map((producto) => (
                <Card key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default ProductosContainer;