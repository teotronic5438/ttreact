import Productos from "./ProductosContainer"

function Main(){
    // const productos = [
    //     {
    //       id:1,
    //       nombre: "Guitarra Acústica",
    //       descripcion: "Guitarra acústica de madera ideal para principiantes y profesionales.",
    //       precio: 150.00,
    //       imagen: "https://placehold.co/200x200"
    //     },
    //     {
    //       id:2,
    //       nombre: "Auriculares Inalámbricos",
    //       descripcion: "Auriculares Bluetooth con cancelación de ruido y gran autonomía.",
    //       precio: 89.99,
    //       imagen: "https://placehold.co/200x200"
    //     },
    //     {
    //       id:3,
    //       nombre: "Teclado Mecánico RGB",
    //       descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    //       precio: 75.50,
    //       imagen: "https://placehold.co/200x200"
    //     },
    //     {
    //       id:4,
    //       nombre: "Monitor 24'' Full HD",
    //       descripcion: "Monitor LED de 24 pulgadas con resolución Full HD y entrada HDMI.",
    //       precio: 130.00,
    //       imagen: "https://placehold.co/200x200"
    //     },
    //     {
    //       id:5,
    //       nombre: "Mouse Gamer",
    //       descripcion: "Mouse óptico para gaming con sensor de alta precisión y botones programables.",
    //       precio: 49.99,
    //       imagen: "https://placehold.co/200x200"
    //     }
    // ];

    return(
        <main style={{padding: "20px"}}>
            <h2>Contenido Principal</h2>
            <p>Este es un ejemplo de contenido dentro del area principal</p>
            <Productos />
        </main>
    )
}

export default Main