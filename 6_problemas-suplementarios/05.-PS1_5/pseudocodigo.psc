Funcion capitalFinal <- inversion(capitalInicial,tasaInteres,meses)
	meses <- meses/12
	tasaInteres <- tasaInteres/100
	interes <- capitalInicial*(tasaInteres*meses)
	capitalFinal <- capitalInicial+interes
FinFuncion

Algoritmo PS1_5
	Escribir 'Monto monetario inicial'
	Leer capitalInvertir
	Escribir 'Tasa de interes mensual'
	Leer porcentajeInteres
	Escribir 'Meses a invertir'
	Leer tiempoMeses
	Escribir 'Su inversion $',capitalInvertir,' con ',porcentajeInteres,'% de interes por ',tiempoMeses,' meses sera $',inversion(capitalInvertir,porcentajeInteres,tiempoMeses)
FinAlgoritmo
