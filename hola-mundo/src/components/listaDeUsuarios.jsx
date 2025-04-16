function ListaUsuarios() {
    const usuarios = ["Ana", "Luis", "Pedro", "Maria"];
    return(
        <ul>
            {usuarios.map(usuario => (
                <li key={usuario}>{usuario}</li>
            ))}
        </ul>
    )

}

export default ListaUsuarios