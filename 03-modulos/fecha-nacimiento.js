export default class FechaNacimiento {
  /**
   * FechaNacimiento
   * @param {number} dia Valor entre 1 y 31
   * @param {number} mes Valor entre 1 y 12
   * @param {number} año Año de la fecha de nacimiento
   */
  constructor(dia, mes, año) {
    this.fecha = new Date(año, mes - 1, dia);
    this.diaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ];
    this.nombreMes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
  }

  getFormatoCorto() {
    return `${this.fecha.getDate()}/${this.fecha.getMonth() +
      1}/${this.fecha.getFullYear()}`;
  }

  getFormatoExtendido() {
    let dia = this.diaSemana[this.fecha.getDay()];
    let mes = this.nombreMes[this.fecha.getMonth()];

    return `${dia} ${this.fecha.getDate()} de ${mes} del ${this.fecha.getFullYear()}`;
  }

  getEdad() {
    let difMSeg = Date.now() - this.fecha;
    let mSegAño = 1000 * 60 * 60 * 24 * 365;
    let edad = Math.trunc(difMSeg / mSegAño);

    return edad;
  }
}
