import React from 'react';
import { useParams } from 'react-router-dom';
function ProductoDetalle() {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalle del Producto</h1>
      <p>Este es el detalle del producto con ID: {id}</p>
    </div>
  );
}
export default ProductoDetalle;