import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from '../assets/SweetAlert';
import Spinner from '../components/Spinner';

// function ProductoDetalle({ agregarAlCarrito }) {


// USAREMOS AHORA EL CONTEXTO PARA MANEJAR EL CARRITO
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';
import { useProductosContext } from '../contexts/ProductosContext';

function ProductoDetalle() {

    const {admin} = useAuthContext();

    // Desestructuración con alias
    const { agregarAlCarrito } = useContext(CarritoContext);
    const {obtenerProducto} = useProductosContext();

    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

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
      // fetch(`https://68150b27225ff1af162af909.mockapi.io/productos/${id}`)
      //   .then((res) => res.json())
        obtenerProducto(id)
        .then((data) => {
          setProducto(data)
          setCargando(false);
          setError(null);    
        })
        .catch((error) => {
          // console.error("Error al obtener los productos:", error);
          if(error == "Producto no encontrado"){
            setError("Producto no encontrado");
          }
          setCargando(false);
        });
    }, [id, obtenerProducto]);

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

    // agregarmos logica para renderizado por spinner, error o productos
    if (cargando) {

      return (<Spinner />);

    } else if (error) {

        // Si hay un error, renderizamos el mensaje de error
        return <div className="error">Error: {error}</div>;

    } else {

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
              {admin 
              ? <Link to={"/admin/editarProducto/" + id}>
                  <button className="btn-agregar">
                    Editar Producto
                  </button>
                </Link>
              :
                <button onClick={handleAgregar} className="btn-agregar">
                    Agregar al carrito
                </button>
              }
          </div>
        </div>
      );
    }
}

export default ProductoDetalle;
