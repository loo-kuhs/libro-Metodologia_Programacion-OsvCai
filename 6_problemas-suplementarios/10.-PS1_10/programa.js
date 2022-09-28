/**
 * Problemas Suplementarios
 * *  PS 1.10
 * ?  Pagina 405 - 406.
 * Construya un diagrama de flujo tal que dado como dato el lado de un hexaedro o cubo,
 * calcule el área de la base, el área lateral, el área total y el volumen.
 */

const calculadoraHexaedro = (lado) => {
  if (lado === 0 || typeof lado !== "number")
    throw new Error(`Error. Ingrese datos correctos: ${lado}`).message;

  let areaBase = Math.pow(lado, 2),
    areaLateral = 4 * Math.pow(lado, 2),
    areaTotal = 6 * Math.pow(lado, 2),
    volumen = Math.pow(lado, 3);

  let datosHexaedro = {
    lado,
    areaBase,
    areaLateral,
    areaTotal,
    volumen,
  };

  return datosHexaedro;
};

let resultado = calculadoraHexaedro(5);
console.log(`Tamaño del lado del hexaedro ingresado: ${resultado.lado}`);
console.log(`Área de la base: ${resultado.areaBase}`);
console.log(`Área lateral: ${resultado.areaLateral}`);
console.log(`Área total: ${resultado.areaTotal}`);
console.log(`Volumen: ${resultado.volumen}`);