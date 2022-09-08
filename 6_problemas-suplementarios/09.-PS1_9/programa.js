/**
 * Problemas Suplementarios
 * *  PS 1.9
 * ?  Pagina 404 - 405.
 * Construya un diagrama de flujo tal que dado el radio de una esfera, calcule e imprima el
 * área y su volumen.
 */

const calculadoraEsfera = (radio) => {
  let area = 4 * Math.PI * Math.pow(radio, 2),
    volumen = (4 / 3) * (Math.PI * Math.pow(radio, 3));

  console.log(`Radio de la esfera: ${radio}`);
  console.log(`La esfera tiene un area de: ${area.toFixed(2)}`);
  console.log(`La esfera tiene un volumen de: ${volumen.toFixed(2)}`);
};

let radioEsfera = 35;

if (radioEsfera === 0) {
  throw new Error(`Error. Ingrese datos correctos: ${radioEsfera}`);
} else {
  calculadoraEsfera(radioEsfera);
}