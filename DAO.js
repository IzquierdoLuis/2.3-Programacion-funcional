let fs = require('fs');

module.exports = class DAO {
    constructor(nombre) {
        this.nombre = nombre;
        let archivo = fs.readFileSync(nombre, 'utf8');
        this.lista = JSON.parse(archivo);
    }

    mayor(valor){
        return this.lista.filter((producto) => producto.cantidad > valor);
    }

    menor(valor){
        return this.lista.filter((producto) => producto.cantidad < valor);
    }

    mismaClasificacionPrecioMayor(clasificacion, precio){
        return this.lista.filter((producto) => producto.precio > precio && producto.clasificacion === clasificacion);
    }

    rango(minimo, maximo){
        return this.lista.filter((producto) => producto.precio > minimo && producto.precio < maximo);
    }
    
    mismaClasificacion(clasificacion){
        return this.lista.filter((producto) => producto.clasificacion === clasificacion);
    }
}
