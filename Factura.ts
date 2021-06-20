abstract class Factura {
    protected _tipoFactura: string;
    protected _empresa:string; 

    constructor(tipoFactura: string, empresa: string) {
        this._tipoFactura = tipoFactura;
        this._empresa = empresa;
    }

    public abstract tipoFacturacion (tipo?: any): any
    public abstract discriminacionIva (monto: number): any
} 

export default Factura;