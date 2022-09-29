/**
 * Problemas Suplementarios
 * *  PS 1.11
 * ?  Pagina 406 - 407.
 * Construya un diagrama de flujo tal que dadas las coordenadas de los puntos P1, P2,
 * P3 que corresponden a los vértices de un triángulo, calcule su perímetro.
 * 
 * ! https://www.masscience.com/2019/12/10/una-simple-forma-de-calcular-de-perimetros-y-areas-de-triangulos-y-cuadrilateros-en-el-plano-cartesiano/
 * ! https://www.matematicas.org.mx/geometria-analitica/perimetros-de-figuras-en-un-plano/
 */

const calcularPerimetroTrianguloPorCoordenadas = (X1, Y1, X2, Y2, X3, Y3) => {
  let distanciaP1P2 = Math.sqrt(Math.pow(X1 - X2, 2) + Math.pow(Y1 - Y2, 2));
  let distanciaP2P3 = Math.sqrt(Math.pow(X2 - X3, 2) + Math.pow(Y3 - Y2, 2));
  let distanciaP1P3 = Math.sqrt(Math.pow(X1 - X3, 2) + Math.pow(Y1 - Y3, 2));
  let perimetro = distanciaP1P2 + distanciaP2P3 + distanciaP1P3;

  let respuestaPerimetroTrianguloPorCoordenadas = {
    distanciaP1P2,
    distanciaP2P3,
    distanciaP1P3,
    perimetro,
  };

  return respuestaPerimetroTrianguloPorCoordenadas;
};

let resultado = calcularPerimetroTrianguloPorCoordenadas(2, 3, -4, 1, 6, 2);

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