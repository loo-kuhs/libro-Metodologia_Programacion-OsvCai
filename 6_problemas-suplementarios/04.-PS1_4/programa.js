/**
 * Problemas Suplementarios
 * *  PS 1.4
 * ?  Pagina 402.
 * Una persona compró una estancia en un país sudamericano. La extensión de
 * la estancia está especificada en acres. Construya un diagrama de flujo tal
 * que dado como dato la extensión del campo en "acres", calcule e imprima la
 * extensión del mismo en hectáreas.
 *
 * ! 1 acre es igual a 4047 m^2
 * ! 1 hectárea es igual a 10000 m^2
 *
 * ? Formula: Dividir el valor de la estancia entre 2.471
 *    ! Hectárea = Acre/2.471
 */

const conversionAreas = (acres) => {
  let unidadEquivalente = 2.471,
    hectareaArea = acres / unidadEquivalente;

  return hectareaArea.toFixed(4);
};

let acresArea = 50;

console.log(
  `${acresArea} Acres es igual a ${conversionAreas(acresArea)} Hectáreas.`
);