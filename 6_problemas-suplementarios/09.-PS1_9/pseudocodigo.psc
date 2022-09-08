Funcion calculadoraEsfera (radio)
	area <- 4 * PI * radio^2;
	volumen <- 4/3 * (PI * radio^3);
	
	Limpiar Pantalla
	Escribir "Radio de la esfera: ", radio
	Escribir "La esfera tiene un area de: ", area;
	Escribir "La esfera tiene un valumen de: ", volumen;
FinFuncion

Algoritmo PS1_9
	Escribir "Ingrese el radio de la esfera:"
	Leer radioEsfera
	
	Si radioEsfera = 0 Entonces
		Escribir "Error. Ingrese datos correctos."
	SiNo
		calculadoraEsfera(radioEsfera);
	FinSi
FinAlgoritmo
