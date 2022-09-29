/**
 * Problemas Suplementarios
 * *  PS 1.7
 * ?  Pagina 403.
 * La misma empresa comercializadora de vehículos XGW ofrece planes de financiación
 * hasta 36 meses con un enganche del 35%, pero aplicando al saldo restante una tasa
 * de interés global del 12%. Construya el diagrama de flujo que permita obtener tanto
 * el importe del enganche como el de las mensualidades que debe pagar el cliente.
 *
 * ! Formula usadas: i = i/100, M = C (1 + i)
 * ? Suponiendo el coche cuesta $100000: i = 12/100 i = 0.12, M = 65000 (1 + 0.12)
 */

const importeYMensualidades = (monto, enganche, interes, meses) => {
  if (monto === 0 || meses === 0)
    throw new Error(
      `Error. Ingrese datos correctos. Monto: ${monto}, Meses: ${meses}.`
    ).message;

  let interesGlob = interes / 100;
  enganche = (enganche * monto) / 100;

  let mensualidades = monto - enganche;
  let mensualidadesConInteres = mensualidades * (1 + interesGlob);
  let mensualidad = mensualidadesConInteres / meses;

  let respuestaImporteYMensualidades = {
    monto,
    enganche,
    meses,
    interes,
    mensualidadesConInteres,
    mensualidad
  }
  
  return respuestaImporteYMensualidades;
};

let montoVehiculo = 929400,
  engancheVehiculo = 35,
  interesGlobal = 12,
  mesesTotales = 36;

let respuesta = importeYMensualidades(
  montoVehiculo,
  engancheVehiculo,
  interesGlobal,
  mesesTotales
);

console.log(`Monto del vehículo: $${respuesta.monto}`);
console.log(`Enganche del vehículo: $${respuesta.enganche}`);
console.log(
  `Total a pagar a ${respuesta.meses} meses con interes global del ${respuesta.interes}%: $${respuesta.mensualidadesConInteres.toFixed(
    2
  )}`
);
console.log(`Cada mes se deberá pagar: ${respuesta.mensualidad.toFixed(2)}`);