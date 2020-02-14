/*
 * Las principales características para los nombres de clase:
 * - El nombre de la clase y el archivo son los mismos
 * - El nombre del archivo puede ser en minúsculas
 * - El nombre de la clase debe utilizar UpperCamelCase
 * - El nombre de la clase representa al conjunto de objetos que describe
 * - El nombre de la clase es en singular
 */
class Alumno {
  /**
   * Método constructor
   * Sirve para inicializar una clase
   * Se ejecuta de manera automática al crear un objeto o una instancia de la clase (new)
   */
  /**
   *
   * @param {string} nombre El nombre del alumno
   * @param {number} numeroCuenta El número de cuenta del alumno
   * @param {Date} fechaNacimiento La fecha de nacimiento del alumno
   */
  constructor(nombre, numeroCuenta, fechaNacimiento = new Date(2000, 1, 1)) {
    this.nombre = nombre;
    this.numeroCuenta = numeroCuenta;
    this.fechaNacimiento = fechaNacimiento;
    this.fechaAlta = new Date();
    console.log("El objeto se ha inicializado!");
  }
  /*
   * Las principales características de los métodos son:
   * - Utilizan lowerCamelCase
   * - El nombre utiliza un verbo en infinitivo
   * - Solo realiza una tarea
   * Parámetros
   * - Son los valores/variables que necesita el método para realizar su tarea
   * - Un método puede recibir desde 0 hasta N parámetros
   */
  decirHola() {
    console.log("Soy " + this.nombre + ", Buen día!");
    // Utilizando interpolación
    console.log(`Soy ${this.nombre}, Buen día!`);
  }

  decirAdios() {
    console.log(`Adios! ${this.nombre} se ha retirado.`);
  }

  mostrarPerfil() {
    console.log(`Perfil de ${this.nombre}`);
    console.log(`Número de cuenta: ${this.numeroCuenta}`);
    console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
    console.log(`Fecha de alta: ${this.fechaAlta}`);
  }
}

/*
 * alumno1 es un objeto de tipo Alumno
 * alumno1 es una instancia de la clase Alumno
 * el operador new se utiliza pra crear un nuevo objeto o un nueva instancia de una clase
 */
let alumno1 = new Alumno("Juan", 20106677, new Date(2000, 3, 17));
let alumno2 = new Alumno("Pedro", 20103344, new Date(1990, 5, 23));
let alumno3 = new Alumno("María", 200194433);

alumno1.decirHola();
alumno1.decirAdios();
alumno1.mostrarPerfil();

alumno2.decirHola();
alumno2.decirAdios();
alumno2.mostrarPerfil();

alumno3.mostrarPerfil();
