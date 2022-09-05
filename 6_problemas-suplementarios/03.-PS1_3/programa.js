/**
 * Problemas Suplementarios
 * *  PS 1.3
 * ?  Pagina 402.
 * En una Casa de Cambio necesitan construir un programa tal que dado como
 * dato una cantidad expresada en dólares, convierta esa cantidad a pesos.
 * Construya el diagrama de flujo correspondiente.
 *
 *  ! Un dólar a la fecha 05/09/2022 son $19.99 MXN.
 */

const casaCambio = (dolares) => {
  let pesoMXN = 19.99,
    conversionMoneda = dolares * pesoMXN;

  return conversionMoneda.toFixed(2);
};

let dineroUSD = 5;

console.log(
  `Ingreso $${dineroUSD} dólares, que en pesos MXN son: $${casaCambio(
    dineroUSD
  )}`
);