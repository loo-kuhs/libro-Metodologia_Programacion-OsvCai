/**
 * Problemas Suplementarios
 * *  PS 1.8
 * ?  Pagina 403 - 404.
 * Construya un diagrama de flujo dado que el radio, la generatriz y la altura de un cono,
 * calcule e imprima el área de la base, el área lateral, el área total y su volumen.
 *
 * ! Fórmulas:
 *    ? ÁreaBase = Pi * RADIO^2
 *    ? ÁreaLateral = Pi * RADIO * GENERATRIZ
 *    ? ÁreaTotal = ÁreaBase + ÁreaLateral
 *    ? Volumen = 1/3 * ÁreaBase * ALTURA
 */

const calculadoraCono = (radio, altura) => {
  if (radio === 0 || altura === 0)
    throw new Error(
      `Error. Ingresa datos correctos. Radio ${radio} O Altura ${altura}`
    );

  let generatriz = Math.sqrt(Math.pow(altura, 2) + Math.pow(radio, 2));
  let areaBase = Math.PI * Math.pow(radio, 2),
    areaLateral = Math.PI * radio * generatriz,
    areaTotal = areaBase + areaLateral,
    volumen = (1 / 3) * (areaBase * altura);

  let respuestaCalculadoraCono = {
    radio,
    altura,
    generatriz,
    areaBase,
    areaLateral,
    areaTotal,
    volumen,
  };

  return respuestaCalculadoraCono;
};

let radioCono = 3,
  alturaCono = 4;

let resultado = calculadoraCono(radioCono, alturaCono);

console.log(
  `Datos del cono: radio = ${resultado.radio}, altura = ${resultado.altura}, generatriz = ${resultado.generatriz}`
);
console.log(`El area base del cono es: ${resultado.areaBase.toFixed(3)}`);
console.log(`El area lateral del cono es: ${resultado.areaLateral.toFixed(3)}`);
console.log(`El area total del cono es: ${resultado.areaTotal.toFixed(3)}`);
console.log(`El volumen del cono es: ${resultado.volumen.toFixed(3)}`);