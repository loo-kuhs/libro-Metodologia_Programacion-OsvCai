const SUE = [1500, 890, 700, 950, 2300, 1650, 1800, 1400, 760, 900];


/**
 * * Toma una matriz de números y devuelve la suma de todos los 
 * * números de la matriz.
 * @param arr - una matriz de números
 * @returns La suma de todos los salarios de los empleados.
 */
const nominaSueldos = (arr) => {
  let nomina = 0;
  for (let j = 0; j < arr.length; j++) {
    nomina += arr[j];
  }
  return nomina;
};

nominaSueldos(SUE);