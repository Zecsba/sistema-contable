

// Tabla IU
const tabla = document.querySelector('.contain')
const input = document.querySelector('#input')

// Inputs

const contacto = document.querySelector('#contacto')
const identificacion = document.querySelector('#identificacion')
const telefono = document.querySelector('#telefono')
const fechaC_Input = document.querySelector('#fechaC')
const formaPago = document.querySelector('#formaPago')
const plazo = document.querySelector('#plazo')
const fechaV_Input = document.querySelector('#fechaV')

const button_form = document.querySelector('.button_form');


cargarEventListenerts()
function cargarEventListenerts(){
    // Inputs

    contacto.addEventListener('input', crearFactura);
    identificacion.addEventListener('input', crearFactura);
    telefono.addEventListener('input', crearFactura);
    fechaC_Input.addEventListener('input', crearFactura);
    formaPago.addEventListener('input', crearFactura);
    plazo.addEventListener('input', crearFactura);
    fechaV_Input.addEventListener('input', crearFactura);

    button_form.addEventListener('submit', nuevaFactura);

}

// Objeto con la informacion de la factura

const factura = {
    contacto: '',
    identificacion: '',
    telefono: '',
    fechaC: '',
    formaPago: '',
    plazo: '',
    fechaV: ''
}

// clases

class Facutra {
    constructor(){
        this.facturas = []
    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('card')

        // Agregar clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('card-error')
        }else{
            divMensaje.classList.add('card-success')
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        numeroF_Input.appendChild(divMensaje);
    }
}

const administrarFacturas = new Facutra()
const ui = new UI()

// Funciones

function crearFactura(e){
    e.preventDefault()

    factura[e.target.name] = e.target.value

    console.log(factura)
}

// Valida y agreaga la factura
function nuevaFactura(e){
    e.preventDefault();

    const {numeroF, nombre, fechaC, fechaV, total, cobrar, rectificar} = factura

    if(numeroF == "" || nombre == "" || fechaC == "" || fechaV == "" || total == "" || cobrar == "" || rectificar == ""){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')

        return;
    }

}