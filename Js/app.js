
// console.log("Привет Мир");


// //*Comentario multilinea */

// // Variables

// let numero1 = 45;
// let numero2 = 39;
// let suma, resta, multiplicacion, mod;


// // let suma;

// const pi = 3.141516;
// let estado = true;
// let numero3 = 78;
// numero3 = 125;
// let direccion = "calle 123 #12-6";
// let nulo = null;

// console.log(numero1);
// console.log(numero2);
// console.log(pi);
// console.log(estado);
// console.log(numero3);
// console.log(direccion);



// suma = numero1 + numero2;
// resta = numero1 - numero2;
// multiplicacion = numero1 * numero2;
// mod = numero1 % numero2;

// console.log(suma);

// // Concatenar Valores

// console.log("EL PRIMER VALOR ES : " + numero1);
// console.log("EL PRIMER VALOR ES : " + numero2);
// console.log("La suma de " + numero1 + "y" + numero2 + "es:" +  suma );
// console.log("La suma de " , numero1 , "y" , numero2 , "es:" ,  suma );

// // Literal Template (Usar comillas invertidas alt + 96)

// console.log(`LA SUMA DE ${numero1} y ${numero2} es: ${suma}`);
// console.log(`LA RESTA DE ${numero1} y ${numero2} es: ${resta}`);
// console.log(`LA MULTIPLICACION DE ${numero1} y ${numero2} es: ${multiplicacion}`);
// console.log(`LA DIVICIÓN MODULO ES ${numero1} y ${numero2} es: ${mod}`);


// // 10-09-24, Martes

// // Ingreso de datos pro el Usuario

// // let nu1 = parseInt(prompt(("Ingrese el primer Valor")));
// // let nu2 = parseInt(prompt(("Ingrese el segundo Valor")));

// // let s = nu1 + nu2;

// // console.log(`el primer valor ingresado es: ${nu1} y el segundo valor es ${nu2}`); 
// // console.log(`La suma : ${s}`);    


// // Generación de números Aleatorios
// // Número aleatorio en re  1 - 5

// //Método 1
// let alea = Math.floor(Math.random() * 50) + 1; /**forma numero 1 */

// console.log(alea);


// //Método 2
// let alea1 = Math.floor(Math.random() * 100) + 1; /**forma numero 2 */

// console.log(alea1);

// ejercicio 1
// let edad = 18;


// if(edad >= 18){
//     console.log("Es mayor de edad");
// }else{
//     console.log("Es menor de Edad");
// }


// ejercicio 2

// let calificacion;

// calificacion = parseFloat(prompt("Ingrese calificación"));

// if (calificacion < 3.0){
//     console.log("REPROBÓ");
// }else if(calificacion < 3.1 || calificacion <= 4.0){ //operador lógico (||)
//     console.log("El estudiante Aprobó");
// }else{
//     console.log("Es muy Bueno");
// }


/* Ejercicio 3. Descubrir el tipo de Generación que corresponde según el rango de edad.
            (Condiciones compuestas)*/


let generacion;

generacion = prompt("Ingresa tú edad");

if (generacion <= 1900){
    console.log("Eres de la Generación Perdida")
}else if (generacion >=1901 && generacion <=1924){
    console.log("Eres de la Generación Grandiosa");
}else if (generacion >=1925 && generacion <=1945){
    console.log("Eres de la Generación Silenciosa");
}else if (generacion >=1946 && generacion <=1964){
    console.log("Eres de la Generación Baby Boomer");
}else if (generacion >=1965 && generacion <=1980){
    console.log("Eres de la Generación X");
}else if (generacion >=1981 && generacion <=1996){
    console.log("Eres de la Generación Y");
}else if (generacion >=1997 && generacion <=2012){
    console.log("Eres de la Generación Z");
}else if (generacion >=2013 && generacion <=2025){
    console.log("Eres de la Generación Alpha");
}else{
    console.log("Aun no has Nacido");
}