Funcion importeYMensualidad (monto)
	Si monto=0 Entonces
		Escribir 'Error. Ingrese un monto correcto.'
	SiNo
		enganche <- 35*monto
		enganche <- enganche/100
		mensualidad <- monto-enganche
		mesSinInteres <- mensualidad/18
		Escribir 'El costo del coche es: $',monto
		Escribir 'El enganche del 35% seria: $',enganche
		Escribir 'El resto a 18 meses sin intereses seria: $',mensualidad
		Escribir 'Cada mes se debera pagar: $',mesSinInteres
	FinSi
FinFuncion

Algoritmo PS1_6
	Escribir 'Ingrese el monto total del vehiculo'
	Leer montoVehiculo
	importeYMensualidad(montoVehiculo)
FinAlgoritmo
