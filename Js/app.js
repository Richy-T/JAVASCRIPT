console.log("Привет Мир");

// Variables

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;

let direccion = "calle 123 #12-6";
// let suma;

const pi = 3.141516;
let estado = true;
let numero3 = 78;
numero3 = 125;

console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion);



suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;

console.log(suma);

// Concatenar Valores

console.log("EL PRIMER VALOR ES : " + numero1);
console.log("EL PRIMER VALOR ES : " + numero2);
console.log("La suma de " + numero1 + "y" + numero2 + "es:" +  suma );
console.log("La suma de " , numero1 , "y" , numero2 , "es:" ,  suma );

// Literal Template (Usar comillas invertidas alt + 96)

console.log(`LA SUMA DE ${numero1} y ${numero2} es: ${suma}`)
console.log(`LA RESTA DE ${numero1} y ${numero2} es: ${resta}`)
console.log(`LA MULTIPLICACION DE ${numero1} y ${numero2} es: ${multiplicacion}`)