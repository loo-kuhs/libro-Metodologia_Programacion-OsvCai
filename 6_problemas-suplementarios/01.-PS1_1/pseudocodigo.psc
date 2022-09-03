Funcion resultado <- operacionesBasicas (n1, n2, ope)
	Segun ope  Hacer
		'sumar':
			resultado <- n1+n2
		'restar':
			resultado <- n1-n2
		'multiplicar':
			resultado <- n1*n2
		De Otro Modo:
			Escribir 'Esa operación no es permitida en el programa'
	FinSegun
FinFuncion

Algoritmo PS1_1
	Escribir 'Ingrese el primer numero real'
	Leer num1
	Escribir 'Ingrese el segundo numero real'
	Leer num2
	Escribir 'Que operación hacer: multiplicar. sumar, restar'
	Leer operacion
	Escribir 'Resultado: ',operacionesBasicas(num1, num2, operacion)
FinAlgoritmo