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

  let datosCirculo = {
    radio,
    areaCirculo,
    circunferenciaCirculo,
  };

  return datosCirculo;
};

let resultado = circulo(2);

console.log(
  `El radio del circulo es: ${resultado.radio}, 
      su area es: ${resultado.areaCirculo.toFixed(3)}, 
      su circunferencia es: ${resultado.circunferenciaCirculo.toFixed(3)}.`
);