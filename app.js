const button = document.querySelector('#boton');
const tabla = document.querySelector('.contain')
const input = document.querySelector('#input')


let factura = []
console.log(factura)
cargarEventListenerts()
function cargarEventListenerts(){

    button.addEventListener('click', crearFactura) 
}


function crearFactura(){
    const numero = prompt('Igrese el numero de factura')
    const cliente = prompt(`Ingresa tu nombre`)
    const creacion = prompt('Ingresa la fecha de creacion')
    const vencimiento = prompt('Ingresa la fecha de venciemiento')
    const total = prompt('Ingresa el total a pagar')
    const cobrado = prompt('Ingresa si esta cobrado o no')
    const estado = prompt('Ingresa si esta aprobada, activa o vencida')

    factura.push(numero, cliente, creacion, vencimiento, total, cobrado, estado)

    imprimirFactura(numero, cliente, creacion, vencimiento, total, cobrado, estado)
}

function imprimirFactura(numero, cliente, creacion, vencimiento, total, cobrado, estado){
    const clientes = document.createElement('tr')
    clientes.innerHTML = `
    <td>${numero}</td>
    <td>${cliente}</td>
    <td>${creacion}</td>
    <td>${vencimiento}</td>
    <td>${total}</td>
    <td>${cobrado}</td>
    <td>${estado}</td>
    `
    tabla.appendChild(clientes)
    
}
