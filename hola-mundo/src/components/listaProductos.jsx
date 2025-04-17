function ListaProductos({productos}) {

    return (
        <ul>
                {productos.map(usuario => (
                    <li key={usuario}>{usuario}</li>
                ))}
        </ul>
    );
}

export default ListaProductos;