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
    // respuesta obtenida del cliente
let respuesta = ""

// MOSTRAR MENÚ
const mostrarMenu = () => {
    console.log(``)
    console.log(`COD - PLATO - PRECIO`)
    console.log(`--------------------`)
    CARTA.forEach(plato => {
        console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
    })
}
const leerPedido = () => prompt("Teclea código plato. Pulse 'S' para salir").toUpperCase()
const pedidoDelUsuario = (elegir) => {
        if (!elegir) return alert("Código introducido no válido!!")
        let producto = (CARTA.find(ped => (elegir === ped.cod)))
        if (!producto) return alert("El plato no existe en la carta!!")
        pedido.push(producto)
        return alert(`Hola ${usuario.nombre}, Has pedido ${producto.nombre} y su precio es ${producto.precio} €`)
    }
    // CALCULAR PEDIDO
const calcularPedido = () => {
        let total = 0 // resetear
        for (product of pedido) {
            total += product.precio
        }
        return total
    }
    // VER PEDIDO
const verPedido = () => {
    let mostrarPedido = ""
    for (ped of pedido) {
        mostrarPedido += `${ped.cod} - ${ped.nombre} - ${ped.precio}€\n`
    }
    return mostrarPedido
}

// Enseñar el menú al inicio
mostrarMenu()

//Bucle que mostrara el pedido introducido insertando el array pedidos dando la oportunidad de volver a pedir otro

do {
    //Lee el codigo del pedido
    respuesta = leerPedido()
    if ("S" !== respuesta && respuesta !== "") {
        //Muestra mensaje con el pedido introducido con su precio
        pedidoDelUsuario(respuesta)
            //Vuelve a mostrar el menu por si se desea hacer otro pedido
            // mostrarMenu()
    }
} while (respuesta !== 'S')

if (respuesta === 'S') alert("Gracias, espero verle otro dia!!")
if (pedido) {
    alert(`Resumen de lo que ha pedido:
    
    ${verPedido()}
    El total es: ${calcularPedido()}€ `)
}