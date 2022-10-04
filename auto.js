"use strict";
exports.__esModule = true;
var fs = require("file-system");
var rs = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(Marca, Modelo, Año, Color) {
        this.marca = Marca;
        this.modelo = Modelo;
        this.año = Año;
        this.color = Color;
    }
    return Auto;
}());
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    LectorArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    LectorArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return LectorArchivos;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(direccion, abierto, autos) {
        this.direccion = direccion;
        this.abierto = abierto;
        this.autos = autos;
    }
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log(this.direccion);
        console.log(this.abierto);
        console.log(this.autos);
    };
    RegistroAutomotor.prototype.crearAuto = function (auto, arrayAuto) {
        var propiedadAuto = auto.split(',');
        var marca = propiedadAuto[0];
        var modelo = propiedadAuto[1];
        var año = Number(propiedadAuto[2]);
        var color = propiedadAuto[3];
        var nuevoAuto = new Auto(marca, modelo, año, color);
        arrayAuto.push(nuevoAuto);
    };
    RegistroAutomotor.prototype.borrarAuto = function (arrayAuto, posicion) {
        delete arrayAuto[posicion];
    };
    RegistroAutomotor.prototype.modificarAuto = function (arrayAuto, posicion) {
        var marca = rs.question("Ingrese la marca del vehiculo: ");
        var modelo = rs.question("Ingrese el modelo del vehiculo: ");
        var año = rs.questionInt("Ingrese el año de fabricación del vehiculo: ");
        var color = rs.question("Ingrese el color del vehiculo: ");
        var autoModificado = new Auto(marca, modelo, año, color);
        delete arrayAuto[posicion];
        arrayAuto[posicion] = autoModificado;
    };
    return RegistroAutomotor;
}());
var datos = new LectorArchivos("auto.txt");
var listaAutos = [];
var registro = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos);
registro.crearAuto("Toyota,Corolla,2009,Gris", listaAutos);
registro.crearAuto("Ford,Focus,2014,Gris", listaAutos);
registro.crearAuto("Honda,Civic,2010,Blanco", listaAutos);
registro.crearAuto("Chevrolet,Onix,2021,Rojo", listaAutos);
registro.mostrarRegistro();
