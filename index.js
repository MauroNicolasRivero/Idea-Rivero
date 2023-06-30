const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')

const armarFilaHTML = (prod)=> {
    return `<tr>
                <td class="class-table-number">${prod.codigo}</td>
                <td class="emoji-image">${prod.imagen}</td>
                <td>${prod.nombre}</td>
                <td>${prod.ingredientes}</td>
                <td>$ ${prod.precio}</td>
                <td><button id=" ${prod.codigo}" class="button button-outline button-big-emoji">🛒</button></td>
            </tr>`
}

const filtrarProductos = ()=> {
    let resultados = hamburguesas.filter((producto)=> producto.ingredientes.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (resultados.length > 0) {
        cargarProductos(resultados)
    }
}
inputSearch.addEventListener('search', filtrarProductos)

const cargarProductos = (array)=> {
    tableBody.innerHTML = ''
    array.forEach((producto) => {
        tableBody.innerHTML += armarFilaHTML(producto)
    })
    activarClickEnBotonesCarrito()
}

const activarClickEnBotonesCarrito = ()=> {
    const botonesCar = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    for (let botonCar of botonesCar) {
        botonCar.addEventListener('click', ()=> {
            let resultadoProducto = hamburguesas.find((prod)=> prod.codigo === parseInt(botonCar.id))
            compras.push(resultadoProducto)
            guardarEnLocalStorage()
            mostrarMensajes(`Hamburguesa ${resultadoProducto.nombre} se agregó a tu carrito...`, 'green')
        })
    }
}

cargarProductos(hamburguesas)