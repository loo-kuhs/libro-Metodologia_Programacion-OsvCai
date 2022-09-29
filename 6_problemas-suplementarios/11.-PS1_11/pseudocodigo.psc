Funcion calcularPerimetroTrianguloPorCoordenadas(X1,Y1,X2,Y2,X3,Y3)
	distanciaP1P2 <- raiz((X1-X2)^2+(Y1-Y2)^2)
	distanciaP2P3 <- raiz((X2-X3)^2+(Y3-Y2)^2)
	distanciaP1P3 <- raiz((X1-X3)^2+(Y1-Y3)^2)
	perimetro <- distanciaP1P2+distanciaP2P3+distanciaP1P3
	Borrar Pantalla
	Escribir 'Distancia entre P1 a P2: ',distanciaP1P2,' unidades'
	Escribir 'Distancia entre P2 a P3: ',distanciaP2P3,' unidades'
	Escribir 'Distancia entre P1 a P3: ',distanciaP1P3,' unidades'
	Escribir 'Perímetro: ',perimetro,' unidades'
FinFuncion

Algoritmo PS1_11
	Escribir 'Ingrese la coordenada X1 (P1): '
	Leer cooX1
	Escribir 'Ingrese la coordenada Y1 (P1): '
	Leer cooY1
	Escribir 'Ingrese la coordenada X2 (P2): '
	Leer cooX2
	Escribir 'Ingrese la coordenada Y2 (P2): '
	Leer cooY2
	Escribir 'Ingrese la coordenada X3 (P3): '
	Leer cooX3
	Escribir 'Ingrese la coordenada Y3 (P3): '
	Leer cooY3
	calcularPerimetroTrianguloPorCoordenadas(cooX1,cooY1,cooX2,cooY2,cooX3,cooY3)
FinAlgoritmo
