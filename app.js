
// Tabla IU
const tabla = document.querySelector('.table')
// const input = document.querySelector('#input')

// Inputs

const contacto = document.querySelector('#contacto')
const identificacion = document.querySelector('#identificacion')
const telefono = document.querySelector('#telefono')
const fechaC_Input = document.querySelector('#fechaC')
const formaPago = document.querySelector('#formaPago')
const plazo = document.querySelector('#plazo')
const fechaV_Input = document.querySelector('#fechaV')

const button_form = document.querySelector('#validar');


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

    agregarFactura(factura){
        this.facturas = [...this.facturas, factura]

        console.log(this.facturas)
    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');

        // Agregar clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('card-error');
        }else{
            divMensaje.classList.add('card-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('.div_form').appendChild(divMensaje, document.querySelector('.div_form').firstChild);

        setTimeout(() => {
            divMensaje.remove();
        }, 2000)
    }

    imprimirFactura({facturas}){

        this.limpiarHTML()
        
        facturas.forEach(factura => {
            const {contacto, identificacion, telefono, fechaC, formaPago, plazo, fechaV, id} = factura

            const divFactura = document.createElement('tbody');
            divFactura.classList.add('contain');
            divFactura.dataset.id = id;

            // Scripting de la cita

            const tableFinish = document.createElement('tr');
            tableFinish.innerHTML = `
            <td> ${identificacion}</td>
            <td> ${contacto}</td>
            <td>${fechaC}</td>
            <td>${fechaV}</td>
            <td>${formaPago}</td>
            <td>${plazo}</td>
            <td>${telefono} </td>
            `;    

            // Agregar la tabla al divFactura
            divFactura.appendChild(tableFinish);

            // Agregar el div al DOM
            tabla.insertBefore(divFactura, tabla.firstChild);
        })
    }

    limpiarHTML(){
        while(tabla.firstChild){
            tabla.removeChild(tabla.firstChild);
        }
    }
}

const administrarFacturas = new Facutra()
const ui = new UI()

// Funciones

function crearFactura(e){
    factura[e.target.name] = e.target.value
}

// Valida y agreaga la factura
function nuevaFactura(e){
    e.preventDefault();

    const {contacto, identificacion, telefono, fechaC, formaPago, plazo, fechaV} = factura

    if(contacto===''  || identificacion==='' || telefono==='' || fechaC==='' || formaPago==='' || plazo==='' || fechaV===''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')

        return;
    }

    // generar id unico

    factura.id = Date.now()

    // Crear una nueva cita

    administrarFacturas.agregarFactura({...factura})

    // Reiniciar el objeto
    reiniciarObjeto()

    // Reiniciar el formulario
    button_form.reset()

    ui.imprimirFactura(administrarFacturas)
}

function reiniciarObjeto(){
    factura.contacto = ''
    factura.identificacion = ''
    factura.telefono = ''
    factura.fechaC = ''
    factura.formaPago = ''
    factura.plazo = ''
    factura.fechaV = ''
}