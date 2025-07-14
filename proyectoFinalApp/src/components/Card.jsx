// import { useNavigate } from "react-router-dom";

// function Card({ producto }) {
//     const navigate = useNavigate();

//     const irAlDetalle = () => {
//         navigate(`/productos/${producto.id}`);
//     };

//     return (
//         <div className="tarjetaIndividual">
//             <div>
//                 <h3 className="fs-6 text">{producto.nombre}</h3>
//             </div>
//             <div>
//                 <img className="imagen-card" src={producto.imagen} alt={producto.nombre} />
//             </div>
//             <p>$ {producto.precio} ARS</p>

//             <button className="btnAgregarCarrito" onClick={irAlDetalle}>
//                 Ver producto
//             </button>
//         </div>
//     );
// }

// export default Card;



import { Card as RBCard, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Card({ producto }) {
  const navigate = useNavigate();

  const irAlDetalle = () => {
    navigate(`/productos/${producto.id}`);
  };

  return (
    <RBCard className="h-100 shadow-sm">
      <RBCard.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <RBCard.Body className="d-flex flex-column justify-content-between">
        <RBCard.Title className="fs-6">{producto.nombre}</RBCard.Title>
        <RBCard.Text>$ {producto.precio} ARS</RBCard.Text>
        <Button variant="primary" onClick={irAlDetalle}>
          Ver producto
        </Button>
      </RBCard.Body>
    </RBCard>
  );
}

export default Card;
