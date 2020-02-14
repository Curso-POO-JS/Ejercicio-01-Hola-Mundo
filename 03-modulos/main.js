import FechaNacimiento from "./fecha-nacimiento.js";
import Alumno from "./alumno.js";
import Grupo from "./grupo.js";

class Main {
  constructor() {
    this.alumno1 = new Alumno(
      20008844,
      "Juan Pérez",
      new FechaNacimiento(12, 2, 2005)
    );
    this.alumno2 = new Alumno(
      20004433,
      "Pedro Ramos",
      new FechaNacimiento(20, 5, 2007)
    );

    this.grupo1 = new Grupo(2, "G");
  }

  probarGrupo() {
    this.grupo1.agregarAlumno(this.alumno1);
    this.grupo1.agregarAlumno(this.alumno2);
    this.grupo1.listarAlumnos();
  }

  probarAlumnos() {
    console.log(this.alumno1.getEdad());
    console.log(this.alumno1.getPerfil());

    console.log(this.alumno2.getEdad());
    console.log(this.alumno2.getPerfil());
  }

  probarFechas() {
    let fecha1 = new FechaNacimiento(10, 1, 2000);
    let fecha2 = new FechaNacimiento(20, 5, 2005);

    console.log(fecha1.getFormatoCorto());
    console.log(fecha2.getFormatoCorto());
    console.log(fecha1.getFormatoExtendido());
    console.log(fecha2.getFormatoExtendido());
    console.log(fecha1.getEdad());
    console.log(fecha2.getEdad());
  }

  probarCiclos() {
    let dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ];

    dias.forEach((dia, i) => {
      console.log(`${dia}, ${i}`);
    });
  }
}

let app = new Main();
app.probarGrupo();
