Funcion calcularHexaedro (lado)
	areaBase <- lado^2
	areaLateral <- 4*lado^2
	areaTotal <- 6*lado^2
	volumen <- lado^3
	Escribir 'Tamaño del lado del hexaedro ingresado: ',lado
	Escribir 'Área de la base: ',areaBase
	Escribir 'Área lateral: ',areaLateral
	Escribir 'Área total: ',areaTotal
	Escribir 'Volumen: ',volumen
FinFuncion

Algoritmo PS1_10
	Escribir 'Ingrese el tamaño del lado del hexaedro: '
	Leer hexaedroLado
	calcularHexaedro(hexaedroLado)
FinAlgoritmo