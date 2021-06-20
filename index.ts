import FacturaTipoA from "./FacturaTipoA";
import FacturaTipoB from "./FacturaTipoB";
import FacturaTipoC from "./FacturaTipoC";


const factura1 = new FacturaTipoC ("C", "Monotributista");
const factura2 = new FacturaTipoB ("B", "Ecogas");
const factura3 = new FacturaTipoA ("A", "Hp");

console.info (factura1);
factura1.tipoFacturacion("C");
factura1.discriminacionIva(500);

console.info ("=============================================");

console.info (factura2);
factura2.tipoFacturacion("B");
factura2.discriminacionIva(500);


console.info ("=============================================");

console.info (factura3);
factura3.tipoFacturacion("A");
factura3.discriminacionIva(500);
