export const agregarProducto = (producto) => {

    return (
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (resolve, reject) => {
            try {
                const respuesta = await fetch('https://68150b27225ff1af162af909.mockapi.io/productos', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(producto),
                });

                // si la respuesta no esta OK da un error
                if (!respuesta.ok) {
                    throw new Error('Error al agregar el producto.');
                }
                const data = await respuesta.json();
                console.log('Producto agregado:', data);
                // alert('Producto agregado correctamente');
                resolve(data)
            } catch (error) {
                console.error(error.message);
                // alert('Hubo un problema al agregar el producto.');
                reject(error.message)
            }
        })
    )

};