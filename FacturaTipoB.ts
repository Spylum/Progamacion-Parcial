import Factura from "./Factura";

class FacturaTipoB extends Factura {
    constructor(tipoFactura: string, empresa: string) {
        super(tipoFactura, empresa);
    }

    tipoFacturacion (tipo:any):any {
        if (tipo === "A") {
            console.info (`El tipo de facuracion elegida ${tipo} no es de tipo B`)
        }
        else if (tipo === "B" ) {
            console.info (`El tipo de facuracion elegida ${tipo} corresponde a un Responsable Inscripto a Consumidor Final`)
        }
        else {
            console.info (`El tipo de facuracion elegida ${tipo} no es de tipo B`)
        }
    }

    discriminacionIva (monto: number): any {
        const iva = 0.21
        let porcentajeIva = monto * iva;
        let montoFinal = porcentajeIva + monto;
        console.info(`El monto final de la Factura es de ${montoFinal}`)
    }
}

export default FacturaTipoB;