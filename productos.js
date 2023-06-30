const hamburguesas = [{imagen: '🍔', codigo: 1, nombre: 'Simple',ingredientes: 'Medallón de Carne de 150 gr,Queso Muzzarella,Salsa Barbacoa', precio: 1000},
                      {imagen: '🍔', codigo: 2, nombre: 'Clásica JyQ',ingredientes: 'Medallón de Carne de 150 gr,Queso Muzzarella,Jamón Cocido,Mostaza', precio: 1200},
                      {imagen: '🍔', codigo: 3, nombre: 'Clásica JyQ',ingredientes: 'Medallón de Carne de 150 gr,Lechuga, Tomates,Mayonesa de Ajo', precio: 1300},
                      {imagen: '🍔', codigo: 4, nombre: 'Completa',ingredientes: 'Medallón de Carne de 150 gr,Queso Muzzarella,Jamón Cocido,Lechuga,Tomates, Salsa Aioli', precio: 1500},
                      {imagen: '🍔', codigo: 5, nombre: 'Clásica ChyP',ingredientes: 'Medallón de Carne de 150 gr,Queso Cheddar,Panceta Crocante, Salsa Ketchup', precio: 1500},
                      {imagen: '🍔', codigo: 6, nombre: 'Cásica PyPA',ingredientes: 'Medallón de Carne de 150 gr, Queso Provoleta,Pimientos Ahumados,Salsa Barbacoa', precio: 1600},
                      {imagen: '🍔', codigo: 7, nombre: 'Full Tasty',ingredientes: 'Medallón de Carne de 150 gr,Queso Azul,Rucula,Tomates Confitados,Aceto Balsámico', precio: 1700},
                      {imagen: '🍔', codigo: 8, nombre: 'Sabores',ingredientes: 'Medallón de Carne de 150 gr,Queso Muzzarella,Jamón Cocido,Lechuga,Tomates,Huevo,Salsa Aioli', precio: 1800},
                      {imagen: '🍔', codigo: 9, nombre: 'Lola',ingredientes: 'Medallón de Carne de 150 gr,Queso Mozzarella,Pepinillos,Cebolla Morada,Pimientos Ahumados,Salsa Alioli', precio: 2000},
                      {imagen: '🍔', codigo: 10,nombre: 'Lola XL',ingredientes: 'Doble Medallón de Carne de 150 gr,Queso Mozzarella,Pepinillos,Cebolla Morada,Pimientos Ahumados,Salsa Alioli', precio: 2200}]


const guardarEnLocalStorage = ()=> {
    if (compras.length > 0) {
        localStorage.setItem('compras', JSON.stringify(compras))
    }
}

const recuperarComprasDeLocalStorage = ()=> {
    if (localStorage.getItem('compras')) {
        return JSON.parse(localStorage.getItem('compras'))
    } else {
        return []
    }
}

const compras = recuperarComprasDeLocalStorage()

const mostrarMensajes = (texto, color)=> {
    const estilo = document.querySelector('div.mensaje')
    estilo.textContent = texto
    estilo.style.background = color
}

const mostrarMensajesEli = (texto, color)=> {
    const estilo = document.querySelector('div.mensajeEli')
    estilo.textContent = texto
    estilo.style.background = color
}

const mostrarMensajeCompras = (texto, color)=> {
    const estilo = document.querySelector('div.mensajeCompra')
    estilo.textContent = texto
    estilo.style.background = color
}
