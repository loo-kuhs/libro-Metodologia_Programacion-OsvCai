Funcion calculadoraPrismaPentagonal(perimetro,apotema,altura)
	Si perimetro=0 O apotema=0 O altura=0 Entonces
		Escribir 'Error, ingrese datos correcto.'
	SiNo
		areaBase <- (perimetro*apotema)/2
		areaLateral <- perimetro*altura
		areaTotal <- 2*areaBase+areaLateral
		volumen <- areaBase*altura
		Borrar Pantalla
		Escribir 'Datos ingresados del prisma pentagonal: '
		Escribir 'Per�metro: ',perimetro,' unidades, Apotema: ',apotema,' unidades , Altura: ',altura,' unidades'
		Escribir '------------Calculos---------------'
		Escribir '�rea base: ',areaBase,' unidades'
		Escribir '�rea lateral: ',areaLateral,' unidades'
		Escribir '�rea total: ',areaTotal,' unidades'
		Escribir 'Volumen: ',volumen,' unidades'
	FinSi
FinFuncion

Algoritmo PS1_13
	Escribir 'Ingresa el per�metro de la base del prisma pentagonal: '
	Leer perPrisma
	Escribir 'Ingresa el apotema del prisma pentagonal: '
	Leer apoPrisma
	Escribir 'Ingresa la altura del prisma pentagonal: '
	Leer altPrisma
	calculadoraPrismaPentagonal(perPrisma,apoPrisma,altPrisma)
FinAlgoritmo
