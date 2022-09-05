Funcion conversionMoneda <- casaCambio ( dolares )
	pesoMXN <- 19.99
	conversionMoneda <- dolares * pesoMXN;
Fin Funcion

Algoritmo PS1_3
	Escribir "Ingrese la cantidad de dolares a cambiar: ";
	Leer dineroUSD
	
	Escribir "Ingreso $", dineroUSD, " dolares que en pesos MXN son: $", casaCambio(dineroUSD);
FinAlgoritmo