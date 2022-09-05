/**
 * Problemas Suplementarios
 * *  PS 1.5
 * ?  Pagina 402.
 * Una persona invierte en un banco una determinada cantidad de dinero y a una
 * cierta tasa de interés mensual. Construya un diagrama de flujo que permita
 * obtener el monto del dinero que obtendrá al finalizar el mes.
 *
 * ! El porcentaje de interés se divide entre 100.
 *  * i = tasaInterés / 100
 * 
 * ! El problema especifica que la tasa de interés es mensual por lo tanto,
 * ! la cantidad de meses se divide entre 12.
 *  * t = meses / 12
 * 
 * ! Formula utilizada para obtener interés simple:
 *  * I = C * (i * t)
 * 
 * ? INFO: https://www.calcuvio.com/interes-simple
 */

const inversion = (capitalInicial, tasaInterés, meses) => {
  meses = meses / 12;
  tasaInterés = tasaInterés / 100;
  let interes = capitalInicial * (tasaInterés * meses),
    capitalFinal = capitalInicial + interes;

  return capitalFinal.toFixed(2);
};

let capitalInvertir = 1000,
  porcentajeInteres = 35.8,
  tiempoMeses = 1;

console.log(
  `Su inversión $${capitalInvertir} con ${porcentajeInteres}% de interés por ${tiempoMeses} meses serán ${inversion(
    capitalInvertir,
    porcentajeInteres,
    tiempoMeses
  )}`
);