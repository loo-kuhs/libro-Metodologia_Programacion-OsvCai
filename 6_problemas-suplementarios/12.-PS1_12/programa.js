/**
 * Problemas Suplementarios
 * *  PS 1.12
 * ?  Pagina 407.
 * Construya un diagrama de flujo tal que dadas las coordenadas de los puntos, P1, P2, P3 que
 * corresponden a los vértices de un triángulo, calcule su superficie.
 */

const calcularAreaTrianguloPorCoordenadas = (X1, Y1, X2, Y2, X3, Y3) => {
  let distanciaP1P2 = Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2));
  let distanciaP2P3 = Math.sqrt(Math.pow(X2 - X3, 2) + Math.pow(Y3 - Y2, 2));
  let distanciaP1P3 = Math.sqrt(Math.pow(X1 - X3, 2) + Math.pow(Y1 - Y3, 2));
  let perimetro = distanciaP1P2 + distanciaP2P3 + distanciaP1P3;
  let semiPerimetro = perimetro / 2;

  let superficie = Math.sqrt(
    semiPerimetro *
      (semiPerimetro - distanciaP1P2) *
      (semiPerimetro - distanciaP2P3) *
      (semiPerimetro - distanciaP1P3)
  );

  let respuestaAreaTrianguloPorCoordenadas = {
    distanciaP1P2,
    distanciaP2P3,
    distanciaP1P3,
    perimetro,
    semiPerimetro,
    superficie,
  };

  return respuestaAreaTrianguloPorCoordenadas;
};

let resultado = calcularAreaTrianguloPorCoordenadas(2, 3, -4, 1, 6, 2);

console.log(
  `Distancia entre P1 a P2: ${resultado.distanciaP1P2.toFixed(2)} unidades`
);
console.log(
  `Distancia entre P2 a P3: ${resultado.distanciaP2P3.toFixed(2)} unidades`
);
console.log(
  `Distancia entre P1 a P3: ${resultado.distanciaP1P3.toFixed(2)} unidades`
);
console.log(`Perímetro total: ${resultado.perimetro.toFixed(2)} unidades`);
console.log(`Semi perímetro: ${resultado.semiPerimetro.toFixed(2)} unidades`);
console.log(`Superficie total: ${resultado.superficie.toFixed(2)} unidades`);