Funcion calcularHexaedro (lado)
	areaBase <- lado^2
	areaLateral <- 4*lado^2
	areaTotal <- 6*lado^2
	volumen <- lado^3
	Escribir 'Tama�o del lado del hexaedro ingresado: ',lado
	Escribir '�rea de la base: ',areaBase
	Escribir '�rea lateral: ',areaLateral
	Escribir '�rea total: ',areaTotal
	Escribir 'Volumen: ',volumen
FinFuncion

Algoritmo PS1_10
	Escribir 'Ingrese el tama�o del lado del hexaedro: '
	Leer hexaedroLado
	calcularHexaedro(hexaedroLado)
FinAlgoritmo