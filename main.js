
const DAO  = require('./DAO');

let lista  = new DAO('./data.json');

console.log(`Numero de productos con existencia mayor a 20: ${lista.mayor(20).length}`);
console.log(`Numero de productos con existencia menos a 15: ${lista.menor(15).length}`);
console.log(`Lista de productos con la misma clasificacion y precio mayor 15.50:\n${lista.mismaClasificacionPrecioMayor('fruta', 15.50)}`);
console.log(`Lista de productos con precio mayor a 20.30 y menor a 45.00\n${lista.rango(20.30, 45.00)}`);
console.log(`Numero de productos agrupados por su clasificacion: ${lista.mismaClasificacion('fruta').length}`);