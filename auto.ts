import * as fs from "file-system";
import * as rs from "readline-sync";
class Auto{
    private marca : string;
    private modelo : string;
    private año : number;
    private color : string;
    
    constructor(Marca : string, Modelo : string, Año : number, Color : string, ){
        this.marca = Marca;
        this.modelo = Modelo;
        this.año  = Año;
        this.color = Color;
    }
 
}

class LectorArchivos{
    private arregloString : string[];
    constructor(txtFileLocation: string) {
        
                let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
                this.arregloString = archivoTxt.split(';');  
            
            }
            public mostrarArreglo(): void {
                console.log(this.arregloString);
            }
        
            public getArregloString(): string[] {
                return this.arregloString;
            }
}

class RegistroAutomotor {
    private direccion: string;
    private abierto: boolean;
    private autos: Array<Auto>;
    public constructor(direccion: string, abierto: boolean, autos: Array<Auto>) {
        this.direccion = direccion;
        this.abierto = abierto;
        this.autos = autos;
    }
    public mostrarRegistro(): void {
        console.log(this.direccion);
        console.log(this.abierto);
        console.log(this.autos);
    }
    crearAuto(auto: string, arrayAuto: Array<Auto>): void {
        let propiedadAuto: string[] = auto.split(',')
        let marca: string = propiedadAuto[0]
        let modelo: string = propiedadAuto[1]
        let año: number = Number(propiedadAuto[2])
        let color: string = propiedadAuto[3]
        let nuevoAuto: Auto = new Auto(marca, modelo, año, color)
        arrayAuto.push(nuevoAuto)
    }
    borrarAuto(arrayAuto: Array<Auto>, posicion: number): void {
        delete arrayAuto[posicion]
    }
    modificarAuto(arrayAuto: Array<Auto>, posicion: number): void {
        let marca: string = rs.question("Ingrese la marca del vehiculo: ")
        let modelo: string = rs.question("Ingrese el modelo del vehiculo: ")
        let año: number = rs.questionInt("Ingrese el año de fabricación del vehiculo: ")
        let color: string = rs.question("Ingrese el color del vehiculo: ")
        let autoModificado: Auto = new Auto(marca, modelo, año, color)
        delete arrayAuto[posicion]
        arrayAuto[posicion] = autoModificado
    }
  }
  
  let datos: LectorArchivos = new LectorArchivos("auto.txt");
  let listaAutos: Array<Auto> = [];
  let registro: RegistroAutomotor = new RegistroAutomotor("Urdapilleta 1058", true, listaAutos);
  registro.crearAuto("Toyota,Corolla,2009,Gris", listaAutos);
  registro.crearAuto("Ford,Focus,2014,Gris", listaAutos);
  registro.crearAuto("Honda,Civic,2010,Blanco", listaAutos);
  registro.crearAuto("Chevrolet,Onix,2021,Rojo", listaAutos);
  registro.mostrarRegistro();

  

