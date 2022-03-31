

let consignaRectangulo="Para poder calcular el area de un rectangulo multiplicamos su Base por Altura";
alert(consignaRectangulo)
var baseRectangulo=prompt("ingrese la base del Rectangulo")
baseRectangulo=parseInt(baseRectangulo);
var alturaRectangulo=prompt("Ingrese la altura del rectangulo")
alturaRectangulo=parseInt(alturaRectangulo)
var superficieDelRectangulo=alturaRectangulo*baseRectangulo;
console.log("La superficie del rectangulo es de"+" "+superficieDelRectangulo );

let consignaTriangulo="Para poder calcular el area de un Triangulo multiplicamos su Base por Altura y lo dividimos por 2";
alert(consignaTriangulo)
var baseTriangulo=prompt("ingrese la base del Triangulo")
baseTriangulo=parseInt(baseTriangulo);
var alturaTriangulo=prompt("Ingrese la altura del Triangulo")
alturaTriangulo=parseInt(alturaTriangulo)
var superficieDelTriangulo=(alturaTriangulo*baseTriangulo)/2;
console.log("La superficie del Triangulo es de"+" "+superficieDelTriangulo );

let consignaCirculo="Para poder calcular el area de un Circulo multiplicamos su radio al cuadrado por PI";
alert(consignaCirculo)
var radioCirculo=prompt("ingrese ingrese el radio del circulo")
radioCirculo=parseInt(radioCirculo);
var superficieDelCirculo=radioCirculo**2 *Math.PI;
console.log("La superficie del circulo es de"+" "+superficieDelCirculo );


console.log("Asignacion de valores paras las operaciones")
var numeroUno , numeroDos ,numeroTres;
numeroUno=prompt("Ingrese el primer valor",0);
numeroUno=parseInt(numeroUno);
numeroDos=prompt("Ingrese el segundo valor",0);
numeroDos=parseInt(numeroDos);
numeroTres=prompt("Ingrese el tercer valor",0);
numeroTres=parseInt(numeroTres);
var resultado;
resultado=numeroUno+numeroDos+numeroTres;
resultado=parseInt(resultado)
console.log("Suma"+" "+ resultado)
resultado=numeroUno*numeroDos*numeroTres;
console.log("Producto"+" "+ resultado)
resultado=numeroUno+numeroDos+numeroTres/3;
console.log("Promedio"+" "+ resultado)

var pan=270;
var leche=150;
var detergente=150;
var yerba=260;
var cerveza=270;
var cuenta=pan+leche+detergente+yerba+cerveza;
console.log(cuenta)
var descuento=(cuenta/100)*15;
console.log("descuento de"+descuento);
console.log("Dolares");
const dolares=200;
var pesos=prompt("cantidad de pesos",0);
pesos=parseInt(pesos);
console.log("tus pesos ",+ pesos ," son equivalentes a "+" "+pesos/dolares +"dolares");
console.log("iva");
const iva=0.21;
var valorFactura=prompt("ingrese el valor de la factura para devolverle el iva");
valorFactura=parseInt(valorFactura);
console.log("el iva de la factura es de",iva*valorFactura);