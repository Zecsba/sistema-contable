import {crearFactura, nuevaFactura} from "../funciones.js"

import {contactoInput, identificacionInput, telefonoInput, fechaC_Input, formaPagoInput, plazoInput, fechaV_Input, button_form, close, modal, button} from "../selectores.js";

class App{
    constructor(){
        this.initApp()
    }

    initApp(){
    // Inputs

    contactoInput.addEventListener('input', crearFactura);
    identificacionInput.addEventListener('input', crearFactura);
    telefonoInput.addEventListener('input', crearFactura);
    fechaC_Input.addEventListener('input', crearFactura);
    formaPagoInput.addEventListener('input', crearFactura);
    plazoInput.addEventListener('input', crearFactura);
    fechaV_Input.addEventListener('input', crearFactura);

    button_form.addEventListener('submit', nuevaFactura);

    // Modal
    button.addEventListener('click', crearFactura);
    close.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.remove('modal--show')
    });

    }
}

export default App;