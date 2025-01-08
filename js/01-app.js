localStorage.setItem('nombre', 'Seba')

const producto = {
    nombre: 'Monitor 24"', 
    precio: 300
}

const productoString = JSON.stringify( producto );
localStorage.setItem('a', productoString)

