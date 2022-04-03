// Tabla IU
const tabla = document.querySelector('#table-agregar')
// const input = document.querySelector('#input')

// Inputs

const contacto = document.querySelector('#contacto')
const identificacion = document.querySelector('#identificacion')
const telefono = document.querySelector('#telefono')
const fechaC_Input = document.querySelector('#fechaC')
const formaPago = document.querySelector('#formaPago')
const plazo = document.querySelector('#totalPagar')
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
    totalPagar: '',
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

    eliminarFactura(id){
        this.facturas = this.facturas.filter(factura => factura.id != id)
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
            const {contacto, identificacion, telefono, fechaC, formaPago, totalPagar, fechaV, id} = factura

            const divFactura = document.createElement('tr');
            divFactura.classList.add('contain');
            divFactura.dataset.id = id;

            const div_contacto = document.createElement('td');
            div_contacto.textContent = `${contacto}`;

            const div_identificacion = document.createElement('td');
            div_identificacion.textContent = `${identificacion}`;

            const div_telefono = document.createElement('td');
            div_telefono.textContent = `${telefono}`;
            
            const div_fechaC = document.createElement('td');
            div_fechaC.textContent = `${fechaC}`;

            const div_formaPago = document.createElement('td');
            div_formaPago.textContent = `${formaPago}`;
            
            const div_totalPagar = document.createElement('td');
            div_totalPagar.textContent = `${totalPagar}`;

            const div_fechaV = document.createElement('td');
            div_fechaV.textContent = `${fechaV}`;

            

            const btnEliminar = document.createElement('button');
            btnEliminar.innerHTML = `
            Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`

            btnEliminar.onclick = () => eliminarFactura(id)

            divFactura.appendChild(div_contacto);
            divFactura.appendChild(div_identificacion);
            divFactura.appendChild(div_telefono);
            divFactura.appendChild(div_fechaC);
            divFactura.appendChild(div_formaPago);
            divFactura.appendChild(div_totalPagar);
            divFactura.appendChild(div_fechaV);
            divFactura.appendChild(btnEliminar);


            // Agregar el div al DOM
            tabla.insertBefore(divFactura , tabla.firstChild );
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

    const {contacto, identificacion, telefono, fechaC, formaPago, totalPagar, fechaV} = factura

    if(contacto===''  || identificacion==='' || telefono==='' || fechaC==='' || formaPago ==='' || formaPago == 0||totalPagar==='' || fechaV===''){
        ui.imprimirAlerta('Todos los campos son obligatorios o no has selecionado forma de pago', 'error')

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

function eliminarFactura(id){

    console.log(id)
    // Elimnar la factura
    administrarFacturas.eliminarFactura(id)

    // Mostrar mensaje
    ui.imprimirAlerta('Factura eliminada')

    // Refrescar la tabla

    ui.imprimirFactura(administrarFacturas)
}