/**
 * Problemas Suplementarios
 * *  PS 1.6
 * ?  Pagina 403.
 * Dada la estabilidad económica que existe en un determinado país de América Latina,
 * las agencias automotrices comienzan a ofrecer distintos planes de financiamiento
 * para la comercialización de sus vehículos. La empresa XGW ofrece el siguiente plan
 * de financiación: dado el monto total del vehículo, el cliente debe pagar el 35% de
 * enganche y el resto en 18 mensualidades iguales sin intereses.
 * Construya el diagrama de flujo que permita obtener cuál es el importe del enganche
 * y las mensualidades que debe pagar el cliente.
 */

const importeYMensualidad = (monto) => {
  if (monto === 0) {
    throw new Error("Error. Ingresa un monto correcto.");
  } else {
    let enganche = 35 * monto;
    enganche = enganche / 100;

    let mensualidad = monto - enganche,
      mesSinIntereses = mensualidad / 18;

    console.log(
      `El costo del coche es: $${monto}`
      );
    console.log(
      `El enganche del 35% sería: $${enganche}`
      );
    console.log(
      `El resto a 18 meses sin intereses sería: $${mensualidad}`
      );
    console.log(
      `Cada mes se deberá pagar: $${mesSinIntereses.toFixed(2)}`)
  }
};

let montoVehiculo = 100000;
importeYMensualidad(montoVehiculo);