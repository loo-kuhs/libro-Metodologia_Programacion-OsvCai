/**
 * * Toma dos números, los suma, eleva al cuadrado el resultado y 
 * * luego lo divide por 3.
 * @param a - 1
 * @param b - 2
 * @returns El resultado de la función.
 */
const resultado = (a, b) => {
  let res = (a + b) ** 2 / 3;
  return res;
};

console.log(resultado(7, 10));