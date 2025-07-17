import { Link, useParams, useNavigate } from 'react-router-dom';
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
import Swal from 'sweetalert2';

function ProductoDetalle() {

    const {admin} = useAuthContext();
    const { eliminarProductoFirebase } = useProductosContext(); 

    // Desestructuración con alias
    const { agregarAlCarrito } = useContext(CarritoContext);
    // const {obtenerProducto} = useProductosContext();
    const {obtenerProductoFirebase} = useProductosContext();

    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

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
        // obtenerProducto(id)
        obtenerProductoFirebase(id)
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
    }, [id, obtenerProductoFirebase]);

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

    const handleEliminar = () => {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "Esta acción eliminará el producto permanentemente.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
            eliminarProductoFirebase(id)
              .then(() => {
                Swal.fire({
                  title: 'Eliminado',
                  text: 'El producto fue eliminado correctamente.',
                  icon: 'success',
                  confirmButtonText: 'Aceptar'
                }).then(() => {
                  navigate('/productos');
                });
              })
              .catch((error) => {
                Swal.fire({
                  title: 'Error',
                  text: 'Hubo un problema al eliminar el producto: ' + error.message,
                  icon: 'error',
                  confirmButtonText: 'Cerrar'
                });
              });
          }
        });
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
              ? <div>
                  {/* <Link to={"/admin/editarProducto/" + id}> */}
                  <Link to={"/admin/editarProductoFirebase/" + id}>
                    <button className="btn-agregar">
                      Editar Producto
                    </button>
                  </Link>
                  &nbsp; <button className="btn-eliminar" onClick={handleEliminar}>Eliminar Producto</button>
                </div>
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
