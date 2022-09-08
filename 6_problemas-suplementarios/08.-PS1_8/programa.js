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

const calculadoraCono = (radio, altura, generatriz) => {
  let areaBase = Math.PI * Math.pow(radio, 2),
    areaLateral = Math.PI * radio * generatriz,
    areaTotal = areaBase + areaLateral,
    volumen = (1 / 3) * (areaBase * altura);

  console.log(
    `Datos del cono: radio = ${radio}, altura = ${altura}, generatriz = ${generatriz}`,
  );
  console.log(
    `El area base del cono es: ${areaBase.toFixed(3)}`
    );
  console.log(
    `El area lateral del cono es: ${areaLateral.toFixed(3)}`
  );
  console.log(
    `El area total del cono es: ${areaTotal.toFixed(3)}`
  );
  console.log(
    `El volumen del cono es: ${volumen.toFixed(3)}`
  )
};

let radioCono = 3,
  alturaCono = 4,
  generatrizCono;

if (radioCono === 0 || alturaCono === 0) {
  throw new Error(
    `Error. Ingresa datos correctos. Radio ${radioCono} O Altura ${alturaCono}`
  );
} else {
  generatrizCono = Math.sqrt(Math.pow(alturaCono, 2) + Math.pow(radioCono, 2));
  calculadoraCono(radioCono, alturaCono, generatrizCono);
}