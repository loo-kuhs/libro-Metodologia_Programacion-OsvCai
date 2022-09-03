/**
 * Problemas Suplementarios
 * *  PS 1.1
 * ?  Pagina 401.
 * Escriba un diagrama de flujo tal que dado como datos dos números reales,
 * calcule la suma, resta y multiplicación.
 */

const operacionesBasicas = (n1, n2, ope) => {
  switch (ope) {
    case "sumar":
      return (resultado = n1 + n2);
      break;
    case "restar":
      return (resultado = n1 - n2);
      break;
    case "multiplicar":
      return (resultado = n1 * n2);
      break;
    default:
      throw new Error(`Esa operación no es permitida en el programa`);
      break;
  }
};

console.log(`Resultado: ${operacionesBasicas(14, 15, "sumar")}`);
console.log(`Resultado: ${operacionesBasicas(29, 15, "restar")}`);
console.log(`Resultado: ${operacionesBasicas(14, 15, "multiplicar")}`);
console.log(`Resultado: ${operacionesBasicas(14, 15, "dividir")}`);