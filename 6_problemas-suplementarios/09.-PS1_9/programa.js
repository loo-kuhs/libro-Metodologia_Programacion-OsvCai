/**
 * Problemas Suplementarios
 * *  PS 1.9
 * ?  Pagina 404 - 405.
 * Construya un diagrama de flujo tal que dado el radio de una esfera, calcule e imprima el
 * área y su volumen.
 */

const calculadoraEsfera = (radio) => {
  if (radio === 0 || typeof radio !== "number")
    throw new Error(`Error. Ingrese datos correctos: ${radio}`).message;

  let area = 4 * Math.PI * Math.pow(radio, 2),
    volumen = (4 / 3) * (Math.PI * Math.pow(radio, 3));

  let datosEsfera = {
    radio,
    area,
    volumen,
  };

  return datosEsfera;
};

let radioEsfera = 35;
let resultado = calculadoraEsfera(radioEsfera);

console.log(`Radio de la esfera: ${resultado.radio}`);
console.log(`La esfera tiene un area de: ${resultado.area.toFixed(2)}`);
console.log(`La esfera tiene un volumen de: ${resultado.volumen.toFixed(2)}`);