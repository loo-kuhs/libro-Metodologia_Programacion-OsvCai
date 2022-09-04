/**
 * Problemas Suplementarios
 * *  PS 1.2
 * ?  Pagina 401.
 * Construya un diagrama de flujo tal que dado el radio de un circulo, calcule e
 * imprima el area y la circunferencia.
 */

const circulo = (radio) => {
  let areaCirculo = Math.PI * Math.pow(radio, 2);
  let circunferenciaCirculo = 2 * Math.PI * radio;

  console.log(
    `El radio del circulo es: ${radio}, 
      su area es: ${areaCirculo.toFixed(3)}, 
      su circunferencia es: ${circunferenciaCirculo.toFixed(3)}.`
  );
};

circulo(2);