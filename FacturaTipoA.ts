import Factura from "./Factura";

class FacturaTipoA extends Factura {
    constructor(tipoFactura: string, empresa: string) {
        super(tipoFactura, empresa);
    }

    tipoFacturacion (tipo:any):any {
                if (tipo === "A" ) {
                    console.info (`El tipo de facuracion elegida ${tipo} corresponde a un Responsable Inscripto a otro Responsable Inscripto`);
                }
                else if (tipo === "B") {
                    console.info (`El tipo de facuracion elegida ${tipo} no es de tipo A`);
                }
                else {
                    console.info (`El tipo de facuracion elegida ${tipo} no es de tipo A`)
                } 
    }

    discriminacionIva (monto: number): any {
        const iva = 0.21
        let porcentajeIva = monto * iva;
        let montoFinal = porcentajeIva + monto;
        console.info(`El monto final de la Factura es de ${montoFinal} monto = ${monto} + iva = 21% ${porcentajeIva}`)
    }
}

export default FacturaTipoA;
