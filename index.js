/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []

// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(``)
    console.log(`COD - PLATO - PRECIO`)
    console.log(`--------------------`)
    CARTA.forEach(plato => {
        console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    })
}
const leerPedido = () => prompt("Teclea código plato. Pulse 'S' para salir")
const pedidoDelUsuario = (elegir) => {
        let pedido = (CARTA.find(ped => (elegir === ped.cod)))
        if (typeof pedido.precio != undefined) {
            alert(`Hola ${usuario.nombre}, El precio de su pedido es ${pedido.precio} €`)
        } else
            alert("El plato no existe en la carta!!")
    }
    // Enseñar el menú al inicio
mostrarMenu()
let respuesta = ""
    //Bucle que mostrara el precio del codigo pedido dando la oportunidad de volver a pedir otro

while ("S" !== respuesta) {
    //Lee el codigo del pedido
    respuesta = leerPedido()

    if ("S" !== respuesta && respuesta !== null && respuesta != "") {
        //Muestra mensaje por consola con el precio del pedido
        pedidoDelUsuario(respuesta)
            //Vuelve a mostrar el menu por si se desea hacer otro pedido
        mostrarMenu()
    }
}