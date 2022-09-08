Funcion calculadoraCono (radio, altura, generatriz)
	areaBase <- PI * radio^2;
	areaLateral <- PI * radio * generatriz;
	areaTotal <- areaBase + areaLateral;
	volumen <- 1/3 * (areaBase * altura);
	
	Limpiar Pantalla
	Escribir "Datos del cono: radio = ", radio, ", altura = ", altura, ", generatriz = ", generatriz
	Escribir "El area base del cono es: ", areaBase 
	Escribir "El area lateral del cono es: ", areaLateral
	Escribir "El area total del cono es: ", areaTotal
	Escribir "El volumen del cono es: ", volumen;  
FinFuncion

Algoritmo PS1_8
	Escribir "Ingresa el radio del cono: "
	Leer radioCono
	Escribir "Ingresa la altura del cono: "
	Leer alturaCono
	
	Si radioCono = 0 O alturaCono = 0 Entonces
		Escribir "Error: Ingresa datos correctos."
	SiNo
		generatrizCono <- raiz(alturaCono^2 + radioCono^2);
		
		calculadoraCono(radioCono, alturaCono, generatrizCono)
	FinSi
FinAlgoritmo