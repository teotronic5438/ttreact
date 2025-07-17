// import React, {useState, useEffect} from "react";

// import "../styles/ProductosContainer.css";
// import Card from "./Card";
// import Carrito from "./Carrito";
// import Spinner from "./Spinner";
// import { useProductosContext } from "../contexts/ProductosContext";

// // function ProductosContainer({agregarAlCarrito}) {
// function ProductosContainer() {

//     const {productos, obtenerProductos} = useProductosContext();
//     // const [productosCarrito, setProductosCarrito] = useState([]);
//     const [cargando, setCargando] = useState(true);
//     const [error, setError] = useState(null);
//     // const [productos, setProductos] = useState([]);

//     useEffect(() => {
//     //   fetch("https://68150b27225ff1af162af909.mockapi.io/productos")
        
//         obtenerProductos()
//         // eslint-disable-next-line no-unused-vars
//         .then((productos) => {
//             // console.log(data);
//             // setProductosCarrito(data);
//             // setProductos(data); // Guardamos los productos en el estado
//             setCargando(false);  // esto servira para desactivar el spinner
//             setError(null);     // esto servira para desactivar el spinner

//         })
//         .catch((error) => {
//             console.error("Error al obtener los productos:", error);
//             setCargando(false);
//             setError("Error al obtener los productos");
//         });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);


//     // function funcionEnProductos(producto, cantidad) {
//     //     agregarAlCarrito(producto, cantidad);
//     // }



//     // Función para eliminar un producto del carrito
//     // function eliminarDelCarrito(productoAEliminar) {
//     //     setProductosCarrito(productosCarrito.filter((p) => p.id !== productoAEliminar.id));
//     // }



//     // agregarmos logica para renderizado por spinner, error o productos
//     if (cargando) {

//       return (<Spinner />);

//     } else if (error) {

//         // Si hay un error, renderizamos el mensaje de error
//         return <div className="error">Error: {error}</div>;

//     } else {

//         // Si no hay error y no está cargando, renderizamos los productos
//         return (
//             <>
//                 <div className="productosContainer">
//                     {productos.length === 0 ? (
//                         <h3>El carrito está vacío</h3>
//                     ) : (
//                         productos.map((producto) => (
//                             <Card key={producto.id} producto={producto}/>
//                         ))
//                     )}
//                 </div>
//                 {/* <Carrito productos={productosCarrito} eliminarProducto={eliminarDelCarrito} /> */}
//             </>
//         );
//     }
// }

// export default ProductosContainer;


import React, { useState, useEffect } from "react";
import { Container, Row, Col, Pagination, Alert } from "react-bootstrap";
import Spinner from "./Spinner";
import Card from "./Card";
import { useProductosContext } from "../contexts/ProductosContext";
import { Helmet } from "react-helmet"

function ProductosContainer() {
  // const { productos, obtenerProductos } = useProductosContext(); // esto antes usaba mockapi
  // ahora uso firebase
  const {productos, setProductos, obtenerProductosFirebase} = useProductosContext();

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8;

  // const totalPaginas = Math.ceil(productos.length / productosPorPagina);


  // const productosVisibles = productos.slice(
  //   (paginaActual - 1) * productosPorPagina,
  //   paginaActual * productosPorPagina
  // );

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  const productosVisibles = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );


  // useEffect(() => {
  //   obtenerProductos()
  //     .then(() => {
  //       setCargando(false);
  //       setError(null);
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener los productos:", error);
  //       setCargando(false);
  //       setError("Error al obtener los productos");
  //     });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  useEffect(() => {
    obtenerProductosFirebase()
      .then((productosObtenidos) => {
        setProductos(productosObtenidos);
        setCargando(false);
        setError(null);
      })
      .catch((error) => {
        console.error("Error al obtener los productos desde Firebase:", error);
        setCargando(false);
        setError("Error al obtener los productos");
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const manejarCambioPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  if (cargando) return <Spinner />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="my-1">

      {/* Formulario de busqueda */}
      <Row className="mb-4">
        <Col xs={12} md={6} className="mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Buscar producto..."
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setPaginaActual(1); // Reiniciar a la página 1 al buscar
            }}
          />
        </Col>
        {busqueda.trim() !== "" && (
          <div className="text-center text-muted my-3">
            Mostrando resultados para: <strong>{busqueda}</strong>
          </div>
        )}

      </Row>

      <Row className="g-4">
        {productosVisibles.length === 0 ? (
          <h3>No hay productos para mostrar</h3>
        ) : (
          productosVisibles.map((producto) => (
            <Col key={producto.id} xs={12} sm={4} md={3}>
              <Card producto={producto} />
            </Col>
          ))
        )}
      </Row>

      {/* Paginación */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev
            onClick={() => manejarCambioPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          />
          {[...Array(totalPaginas)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={paginaActual === index + 1}
              onClick={() => manejarCambioPagina(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => manejarCambioPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          />
        </Pagination>
      </div>
    </Container>
  );
}

export default ProductosContainer;
