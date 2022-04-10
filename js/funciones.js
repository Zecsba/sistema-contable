import Facutra from "./classes/Facturas.js";
import UI from "./classes/Iu.js";

import {contactoInput, identificacionInput, telefonoInput, fechaC_Input, formaPagoInput, plazoInput, fechaV_Input, button_form} from "./selectores.js";

const administrarFacturas = new Facutra()
const ui = new UI()

let editanto;

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

export function crearFactura(e){
    factura[e.target.name] = e.target.value
}

// Valida y agreaga la factura
export function nuevaFactura(e){
    e.preventDefault();

    const {contacto, identificacion, telefono, fechaC, formaPago, totalPagar, fechaV} = factura

    if(contacto===''  || identificacion==='' || telefono==='' || fechaC==='' || formaPago ==='' || formaPago == 0||totalPagar==='' || fechaV===''){
        ui.imprimirAlerta('Todos los campos son obligatorios o no has selecionado forma de pago', 'error')

        return;
    }

    if(editanto){
        ui.imprimirAlerta('Editado correctamente')

        // Agregar al objeto de la factura

        administrarFacturas.editarFactura({...factura})

        // Regrsar el texto del boton a su estado original

        button_form.querySelector('button[type="submit"]').textContent = 'Crear Factura'

        // Quitar modo edicion
        editanto = false;
    }else{
        // generar id unico

    factura.id = Date.now()

    // Crear una nueva factura

    administrarFacturas.agregarFactura({...factura})

    // Mensaje de agregado

    ui.imprimirAlerta('Factura agregada')

    }  

    // Reiniciar el objeto
    reiniciarObjeto()

    // Reiniciar el formulario
    button_form.reset()

    ui.imprimirFactura(Facutra.facturas)
}

export function reiniciarObjeto(){
    factura.contacto = ''
    factura.identificacion = ''
    factura.telefono = ''
    factura.fechaC = ''
    factura.formaPago = ''
    factura.plazo = ''
    factura.fechaV = ''
}

export function eliminarFactura(id){
    // Elimnar la factura
    administrarFacturas.eliminarFactura(id)

    // Mostrar mensaje
    ui.imprimirAlerta('Factura eliminada')

    // Refrescar la tabla

    ui.imprimirFactura(Facutra.facturas)
}

export function editarFactura(editar){

    console.log(editar)
    const {contacto, identificacion, telefono, fechaC, formaPago, totalPagar, fechaV, id} = editar;

    // Llenar los inputs

    contactoInput.value = contacto;
    identificacionInput.value = identificacion;
    telefonoInput.value = telefono;
    fechaC_Input.value = fechaC;
    formaPagoInput.value = formaPago;
    plazoInput.value = totalPagar;
    fechaV_Input.value = fechaV;

    // Llenar el objeto

    factura.contacto = contacto;
    factura.identificacion = identificacion;
    factura.telefono = telefono;
    factura.fechaC = fechaC;
    factura.formaPago = formaPago;
    factura.totalPagar = totalPagar;
    factura.fechaV = fechaV;
    factura.id = id;

    // Cambiar el texto del boton
    button_form.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'

    editanto = true;
}

ui.imprimirFactura(Facutra.facturas)