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
		Escribir 'Perímetro: ',perimetro,' unidades, Apotema: ',apotema,' unidades , Altura: ',altura,' unidades'
		Escribir '------------Calculos---------------'
		Escribir 'Área base: ',areaBase,' unidades'
		Escribir 'Área lateral: ',areaLateral,' unidades'
		Escribir 'Área total: ',areaTotal,' unidades'
		Escribir 'Volumen: ',volumen,' unidades'
	FinSi
FinFuncion

Algoritmo PS1_13
	Escribir 'Ingresa el perímetro de la base del prisma pentagonal: '
	Leer perPrisma
	Escribir 'Ingresa el apotema del prisma pentagonal: '
	Leer apoPrisma
	Escribir 'Ingresa la altura del prisma pentagonal: '
	Leer altPrisma
	calculadoraPrismaPentagonal(perPrisma,apoPrisma,altPrisma)
FinAlgoritmo
