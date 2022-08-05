const NUM = [18, 23, 0, 17, 22, 0, 37, 43, 0, 27, 41, 53,];

/**
 * * Toma una matriz como argumento y devuelve el número de ceros en 
 * * la matriz.
 * @param arr - una matriz de enteros
 * @returns El número de ceros en la matriz.
 */
const obtenerCeros = (arr) => {
  let ceros = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      ceros += 1;
    }
  }
  return ceros;
};

obtenerCeros(NUM);