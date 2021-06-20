import Factura from "./Factura";

class FacturaTipoC extends Factura {
    constructor(tipoFactura: string, empresa: string) {
        super(tipoFactura, empresa);
    }

    tipoFacturacion (tipo:any):any {
        if (tipo === "A") {
            console.info (`El tipo de facuracion elegida ${tipo} no es de tipo C`);
        }
        else if (tipo === "B") {
            console.info (`El tipo de facuracion elegida ${tipo} no es de tipo C`);
        }
        else {
            console.info (`El tipo de facuracion elegida ${tipo} corresponde a un Monotributista a Consumidor Final`);
        }
    }

    discriminacionIva (monto: number): any {
    const iva = 0.21
    let porcentajeIva = monto * iva;
    let montoFinal = porcentajeIva + monto;
    console.info(`El monto final de la Factura es de ${montoFinal}`)
    }
}

export default FacturaTipoC;