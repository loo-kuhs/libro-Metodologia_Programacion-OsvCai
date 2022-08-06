const GASTOS_VIAJE = [2528, 3500, 1600, 1850, 150, -1];

/**
 * * PRIMERA SOLUCION, USANDO WHILE y FOR
 * * Toma una matriz de números, los suma y devuelve la suma.
 * @param arr - [2, 4, 6, 8, 10]
 * @returns La suma de la matriz.
 */
const sumaDeGastosViaje = (arr) => {
  let sumaGasto = 0;
  let gasto = arr;
  while (gasto !== -1) {
    for (let i = 0; i < gasto.length; i++) {
      sumaGasto = sumaGasto + gasto[i];
      return sumaGasto;
    }
  }
};

/**
 * * SEGUNDA SOLUCION, USANDO SOLAMENTE WHILE
 * * Toma una matriz de números, los suma y devuelve la suma.
 * @param arr - una matriz de números enteros que representan los gastos diarios
 */
const sumaGastos = (arr) => {
  let sumaGasto = 0;
  let gasto = arr;
  let i = 0;
  while (gasto[i] !== -1) {
    sumaGasto += gasto[i];
    console.log(sumaGasto);
    i++;
  }
}

sumaGastos(GASTOS_VIAJE);
console.log(sumaDeGastosViaje(GASTOS_VIAJE));