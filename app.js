// Modal
const close = document.querySelector('#close');
const modal = document.querySelector('.modal')
const button = document.querySelector('#boton');

// Tabla IU
const tabla = document.querySelector('.contain')
const input = document.querySelector('#input')

// Inputs

const numeroF_Input = document.querySelector('#numeroF')
const nombreInput = document.querySelector('#nombre')
const fechaC_Input = document.querySelector('#fechaC')
const fechaV_Input = document.querySelector('#fechaV')
const totalInput = document.querySelector('#total')
const cobrarInput = document.querySelector('#cobrar')
const rectificarInput = document.querySelector('#rectificar')


cargarEventListenerts()
function cargarEventListenerts(){

    // Eventos modal
    button.addEventListener('click', crearFactura);

    close.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('modal--show')
    });

    // Inputs

    numeroF_Input.addEventListener('input', crearFactura);
    nombreInput.addEventListener('input', crearFactura);
    fechaC_Input.addEventListener('input', crearFactura);
    fechaV_Input.addEventListener('input', crearFactura);
    totalInput.addEventListener('input', crearFactura);
    cobrarInput.addEventListener('input', crearFactura);
    rectificarInput.addEventListener('input', crearFactura);

}

// Objeto con la informacion de la factura

const factura = {
    numeroF: '',
    nombre: '',
    fechaC: '',
    fechaV: '',
    total: '',
    cobrar: '',
    rectificar: ''
}



function crearFactura(e){
    e.preventDefault()
    modal.classList.add('modal--show')

    factura[e.target.name] = e.target.value

    console.log(factura)
}



// function imprimirFactura(numero, cliente, creacion, vencimiento, total, cobrado, estado){
//     const clientes = document.createElement('tr')
//     clientes.innerHTML = `
//     <td>${numero}</td>
//     <td>${cliente}</td>
//     <td>${creacion}</td>
//     <td>${vencimiento}</td>
//     <td>${total}</td>
//     <td>${cobrado}</td>
//     <td>${estado}</td>
//     `
//     tabla.appendChild(clientes)
    
// }
