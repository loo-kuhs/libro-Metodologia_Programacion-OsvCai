const NUMEROS = [5, 13, 7, 48, 18, 27, 94, 62, 114, -1];

/**
 * * Toma una matriz de números y devuelve el cubo de cada número en 
 * * la matriz.
 * @param arr - una matriz de números.
 */
const calcularCubo = (arr) => {
  let cubo = [];
  let num = arr;
  let i = 0;
  while (num[i] !== -1) {
    cubo = num[i] ** 3;
    console.log(cubo);
    i++
  }
};

calcularCubo(NUMEROS);