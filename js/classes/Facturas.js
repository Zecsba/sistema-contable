import {ui} from "../funciones.js";

let recuperar = JSON.parse(localStorage.getItem('facturas')) === null ? [] : JSON.parse(localStorage.getItem('facturas'))

// clases

class Facutra {
    static facturas = [...recuperar]

    agregarFactura(factura){
        Facutra.facturas = [...Facutra.facturas, factura]
        localStorage.setItem('facturas', JSON.stringify(Facutra.facturas))

        ui.imprimirFactura(Facutra.facturas)
    }

    eliminarFactura(id){       
        Facutra.facturas = Facutra.facturas.filter(factura => factura.id !== id)
        localStorage.setItem('facturas', JSON.stringify(Facutra.facturas))
    }

    editarFactura(facturaActualizada){
        Facutra.facturas = Facutra.facturas.map(factura => factura.id === facturaActualizada.id ? facturaActualizada : factura)
        localStorage.setItem('facturas', JSON.stringify(Facutra.facturas))
    }
}

export default Facutra;