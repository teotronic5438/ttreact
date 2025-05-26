import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from '../assets/SweetAlert';

function ProductoDetalle({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
const [cantidad, setCantidad] = useState(1);

const aumentarCantidad = () => setCantidad((prev) => prev + 1);

const disminuirCantidad = () => {
    if (cantidad > 1) setCantidad((prev) => prev - 1);
};

const actualizarCantidad = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
        setCantidad(value);
    }
};

  useEffect(() => {
    fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((err) => console.error("Error al obtener el producto:", err));
  }, [id]);

  const handleAgregar = () => {
    if (producto) {
        dispararSweetBasico(
            "Producto agregado",
            `Has agregado ${producto.nombre} al carrito`,
            "success",
            "Aceptar"
        );
        agregarAlCarrito(producto, cantidad);
    }
  };

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="producto-detalle">

      <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />

      <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="detalle-precio">Precio: ${producto.precio}</p>
          <div className="control-cantidad">
              <button onClick={disminuirCantidad}>−</button>
              <input 
                  type="number" 
                  value={cantidad} 
                  onChange={actualizarCantidad} 
                  min="1" 
                  style={{ width: "40px", textAlign: "center" }}
              />
              <button onClick={aumentarCantidad}>+</button>
          </div>

          <button onClick={handleAgregar} className="btn-agregar">
              Agregar al carrito
          </button>
      </div>
    </div>
  );
}

export default ProductoDetalle;
