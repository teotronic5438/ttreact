import Carrito from "../components/Carrito";
import Main from "../components/Main";
import ProductosContainer from "../components/ProductosContainer";

function Home(){
    const productos = [
        {
            id: 1,
            nombre: "Producto A",
            descripcion: "Descripción del Producto A",
            precio: 100.00,
            imagen: "https://placehold.co/150x100"
        },
        {
            id: 2,
            nombre: "Producto B",
            descripcion: "Descripción del Producto B",
            precio: 150.50,
            imagen: "https://placehold.co/150x100"
        },
        {
            id: 3,
            nombre: "Producto C",
            descripcion: "Descripción del Producto C",
            precio: 75.25,
            imagen: "https://placehold.co/150x100"
        },
        {
            id: 4,
            nombre: "Producto D",
            descripcion: "Descripción del Producto D",
            precio: 200.00,
            imagen: "https://placehold.co/150x100"
        },
        {
            id: 5,
            nombre: "Producto E",
            descripcion: "Descripción del Producto E",
            precio: 50.00,
            imagen: "https://placehold.co/150x100"
        }
    ];

    return(
        <>
            <Main />
            <ProductosContainer productos={productos} />
        </>
    )
}

export default Home;