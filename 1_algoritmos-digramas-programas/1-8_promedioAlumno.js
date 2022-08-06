const CALIFICACIONES_1 = [8, 8.5, 9, 7, 6];
const CALIFICACIONES_2 = [9, 8, 9, 7, 9];
const CALIFICACIONES_3 = [9, 10, 10, 8, 9];
const CALIFICACIONES_4 = [8.5, 9, 7.5, 6, 6.5];
const CALIFICACIONES_5 = [7.3, 6.8, 9.5, 8, 8.5];

const MATRICULA_1 = [16500];
const MATRICULA_2 = [16650];
const MATRICULA_3 = [17225];
const MATRICULA_4 = [17240];
const MATRICULA_5 = [18240];

/**
 * * Toma una matrícula y una matriz de calificaciones y devuelve la
 * * matrícula y el promedio de las calificaciones.
 * @param matricula - el número de identificación del estudiante
 * @param calificaciones - una matriz de números
 */
const promedioDeAlumno = (matricula, calificaciones) => {
  let promedio = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    promedio += calificaciones[i] / 5;
  }
  console.log(` Matricula: ${matricula}, Promedio: ${promedio}`);
};

promedioDeAlumno(MATRICULA_5, CALIFICACIONES_4);