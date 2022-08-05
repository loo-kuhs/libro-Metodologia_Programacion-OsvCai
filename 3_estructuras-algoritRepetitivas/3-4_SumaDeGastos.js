const GASTOS_VIAJE = [2528, 3500, 1600, 1850, 150, -1];

/**
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

console.log(sumaDeGastosViaje(GASTOS_VIAJE));