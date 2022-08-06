const CALIFICACIONES_1 = [8, 8.5, 9, 7, 6];
const MATRICULA_1 = [16500];

const promedioDeAlumno = (matricula, calificaciones) => {
  let promedio = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    promedio += calificaciones[i] / 5;
  }
  console.log(` Matricula: ${matricula}, Promedio: ${promedio}`)

}

promedioDeAlumno(MATRICULA_1, CALIFICACIONES_1)