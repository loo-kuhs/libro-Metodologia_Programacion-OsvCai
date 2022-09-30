/**
 * Problemas Suplementarios
 * *  PS 1.13
 * ?  Pagina 408 - 409.
 * Construya un diagrama de flujo tal que dado el perímetro de la vase, el apotema y la altura de
 * un prisma pentagonal; calcule el área de la vase, el área lateral, el área total y el volumen.
 */

const calculadoraPrismaPentagonal = (perimetro, apotema, altura) => {
  if (perimetro === 0 || apotema === 0 || altura === 0)
    throw new Error(
      `Error en alguno de los siguientes datos, perímetro: ${perimetro} o apotema: ${apotema} o altura: ${altura}`
    ).message;

  let areaBase = (perimetro * apotema) / 2,
    areaLateral = perimetro * altura,
    areaTotal = 2 * areaBase + areaLateral,
    volumen = areaBase * altura;

  let respuestaPrismaPentagonal = {
    perimetro,
    apotema,
    altura,
    areaBase,
    areaLateral,
    areaTotal,
    volumen,
  };

  return respuestaPrismaPentagonal;
};

let resultado = calculadoraPrismaPentagonal(8, 10, 6);
let { perimetro, apotema, altura, areaBase, areaLateral, areaTotal, volumen } =
  resultado;

console.log(
  `Datos ingresados: perímetro ${perimetro}, apotema ${apotema}, altura ${altura}`
);
console.log(`Área base: ${areaBase} unidades`);
console.log(`Área lateral: ${areaLateral} unidades`);
console.log(`Área total: ${areaTotal} unidades`);
console.log(`Volumen: ${volumen} unidades`);