Funcion calculadoraCono (radio,altura)
	Si radio=0 O altura=0 Entonces
		Escribir 'Error: Ingresa datos correctos.'
	SiNo
		generatriz <- raiz(altura^2+radio^2)
		areaBase <- PI*radio^2
		areaLateral <- PI*radio*generatriz
		areaTotal <- areaBase+areaLateral
		volumen <- 1/3*(areaBase*altura)
		Borrar Pantalla
		Escribir 'Datos del cono: radio = ',radio,', altura = ',altura,', generatriz = ',generatriz
		Escribir 'El area base del cono es: ',areaBase
		Escribir 'El area lateral del cono es: ',areaLateral
		Escribir 'El area total del cono es: ',areaTotal
		Escribir 'El volumen del cono es: ',volumen
	FinSi
FinFuncion

Algoritmo PS1_8
	Escribir 'Ingresa el radio del cono: '
	Leer radioCono
	Escribir 'Ingresa la altura del cono: '
	Leer alturaCono
	calculadoraCono(radioCono,alturaCono)
FinAlgoritmo
