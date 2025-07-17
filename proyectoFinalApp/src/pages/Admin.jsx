// function Admin(){
//     return (
//         <div>
//             <h1>Admin Page</h1>
//             <p>Bienvenidos a la pagina de administracion</p>
//         </div>
//     );
// }

// export default Admin;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductosContext } from "../contexts/ProductosContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Spinner from '../components/Spinner'

function Admin() {
  const [cantidad, setCantidad] = useState(0);
  const { obtenerProductosFirebase } = useProductosContext();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function contarProductos() {
      try {
        const snapshot = await obtenerProductosFirebase();
        setCantidad(snapshot.length);
        setCargando(false);
      } catch (error) {
        console.error("Error al contar productos:", error);
        setCargando(false);
      }
    }

    contarProductos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cargando) return <Spinner />;

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Panel de Administración</h1>
          <p className="text-center">Bienvenido, Elías.</p>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col xs={12} md={6}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>📦 Productos en base de datos</Card.Title>
              <Card.Text className="fs-4 fw-bold">
                Total: {cantidad}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Acciones disponibles</Card.Title>
              <div className="d-grid gap-2 mt-3">
                <Button as={Link} to="/admin/agregarProductoFirebase" variant="success">
                  ➕ Agregar nuevo producto
                </Button>
                <Button as={Link} to="/productos" variant="primary">
                  📦 Ver todos los productos
                </Button>
                <Button as={Link} to="/" variant="secondary">
                  🏠 Volver al inicio
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
