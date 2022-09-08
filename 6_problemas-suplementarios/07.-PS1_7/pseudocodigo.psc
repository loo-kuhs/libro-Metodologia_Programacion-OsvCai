Funcion importeYMensualidades (monto,enganche,interes,meses)
	Si monto=0 O meses=0 Entonces
		Escribir 'Error. Ingrese datos correctos'
	SiNo
		interesGlob <- interes/100
		enganche <- enganche*monto/100
		mensualidades <- monto-enganche
		mensualidadesConInteres <- mensualidades*(1+interesGlob)
		mensualidad <- mensualidadesConInteres/meses
		Borrar Pantalla
		Escribir 'Monto del vehiculo: $',monto
		Escribir 'Enganche del vehiculo: $',enganche
		Escribir 'Total a pagar a ',meses,' meses con interes global del ',interes,'%: $',mensualidadesConInteres
		Escribir 'Cada mes se debera pagar: $',mensualidad
	FinSi
FinFuncion

Algoritmo PS1_7
	Escribir 'Ingrese el monto total del vehiculo:'
	Leer montoVehiculo
	Escribir 'Ingrese el enganche del vehiculo: '
	Leer engancheVehiculo
	Escribir 'Ingrese el interes global:'
	Leer interesGlobal
	Escribir 'Ingrese la cantidad de meses a pagar: '
	Leer mesesTotales
	importeYMensualidades(montoVehiculo,engancheVehiculo,interesGlobal,mesesTotales)
FinAlgoritmo