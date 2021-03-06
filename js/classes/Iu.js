import {editarFactura, eliminarFactura} from "../funciones.js";
import {tabla} from "../selectores.js";

class UI {
    imprimirAlerta(mensaje, tipo){
        // Crear el div
        const divMensaje = document.createElement('div');

        // Agregar clase en base al tipo de error

        // Operador logio AND

        tipo === 'error' ? divMensaje.classList.add('card-error') : divMensaje.classList.add('card-success');

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('.box-table').insertBefore(divMensaje, document.querySelector('.box-table').firstChild);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }

    imprimirFactura(recuperar){
        
        this.limpiarHTML()
        
        recuperar.map((factura) => {

            const {id, contacto, identificacion, telefono, fechaC, formaPago, totalPagar, fechaV} = factura

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
            
            // Añade un boton para eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn-eliminar');
            btnEliminar.innerHTML = `
            Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`

            btnEliminar.onclick = () => eliminarFactura(factura.id)

            // Añade un boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn-editar');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>`

            btnEditar.onclick = () => editarFactura(factura)


            divFactura.appendChild(div_identificacion);
            divFactura.appendChild(div_contacto);
            divFactura.appendChild(div_telefono);
            divFactura.appendChild(div_fechaC);
            divFactura.appendChild(div_fechaV);
            divFactura.appendChild(div_totalPagar);
            divFactura.appendChild(div_formaPago);
            divFactura.appendChild(btnEliminar);
            divFactura.appendChild(btnEditar);


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


export default UI;