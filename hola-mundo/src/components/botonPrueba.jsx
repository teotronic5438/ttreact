import './Boton.css'; // Importás el CSS

// eslint-disable-next-line no-unused-vars
function Boton({ texto, color, onClick = () => {} }) {
  return <button className="boton" onClick={onClick}>{texto}</button>;
}

export default Boton;
