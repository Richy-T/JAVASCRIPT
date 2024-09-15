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

// // Ingreso de datos por el Usuario

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

// con operador ternario
// primer bloque debe ser verdadero y segundo el Falso
// let res = (edad>=18)? "Es mayor de edad": "Es menor de edad";
// console.log(res);

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

// let generacion;

// generacion = prompt("¿De que Generación Eres?");

// if (generacion <= 1900) {
//   console.log("Eres de la Generación Perdida");
// } else if (generacion >= 1901 && generacion <= 1924) {
//   console.log("Eres de la Generación Grandiosa");
// } else if (generacion >= 1925 && generacion <= 1945) {
//   console.log("Eres de la Generación Silenciosa");
// } else if (generacion >= 1946 && generacion <= 1964) {
//   console.log("Eres de la Generación Baby Boomer");
// } else if (generacion >= 1965 && generacion <= 1980) {
//   console.log("Eres de la Generación X");
// } else if (generacion >= 1981 && generacion <= 1996) {
//   console.log("Eres de la Generación Y");
// } else if (generacion >= 1997 && generacion <= 2012) {
//   console.log("Eres de la Generación Z");
// } else if (generacion >= 2013 && generacion <= 2025) {
//   console.log("Eres de la Generación Alpha");
// } else {
//   console.log("Aun no has Nacido");
// }

// estructura de switch y case

// let dia= 4;

// switch(dia){
//     case 1: console.log("imprimir Lunes");
//     break;

//     case 2: console.log("imprimir Martes");
//     break;

//     case 3: console.log("imprimir Miércoles");
//     break;

//     case 4: console.log("imprimir Jueves");
//     break;
// }

// Otro Ejemplo de SWITCH

// let operador = '*';

// switch(operador){

//     case '+':
//     break;
//     case '-':
//     break;
//     case '*':
//     break;
//     case '/':
//     break;

//     default: console.log("Operación NO existe");
// }

// Ejercicio de clase Miércoles-11-09-24 Conversión de divisas
/*
            Dolar 4280
            Euro  4728
            Libra Esterlina 5601
            */

/*
let divisa = parseInt(prompt("ingresa tu dinero en pesos"));

let moneda = parseInt(
    prompt("Escoge la divida a convertir 1: Dolar, 2: Euro, 3: Libra Esterlina"));

let Dolar = 4280;
let Euro = 4728;
let LibraEsterlina = 5601;


switch (moneda) {

    case 1:
        console.log(`Tu conversión en Dolares es de: $ ${divisa / Dolar}`);
        break;
    case 2:
        console.log(`Tu conversión en Euros es de: $ ${divisa / Euro}`);
        break;
    case 3:
        console.log(`Tu conversión en Libras Esterlinas es de: $ ${divisa / LibraEsterlina}`);
        break;

    default:
        console.log("Escoge una Opción correcta");
        break;  
}
*/

//Estructuras repetitivas jueves 12-09-24

//         for (let i= 3; i<=30; i+=3){ //incremento
// console.log(i);
//         }

// for(let j= 20; j>=1; j-=1){
//     console.log(j);
// }

// let tabla =4;
// for (let i =1; i<=10; i++){
//     console.log(`${tabla} * ${i} =${(tabla*id)}`);
// }
//     console.log ("-----------------------")

//Decremento

// for(let j= 20; j >=1; j-=2){
//     console.log(j);
// }

//Ejercicio para tablas de multiplicar (Jueves 12_09-24)

//     let Tabla;
//     Tabla =parseInt(prompt("Coloca la tabla de multiplicar que quieras"));
//     for(let T = 1; T <= 10; T++){
//         console.log(`${Tabla} * ${T} = ${Tabla*T}`);
//     }

//Repaso Viernes 13-09-24

// let apell = null;
// apell = "Richy";
// console.log(apell);

//Casos para trabajar
//menu de restaurante

/*
let menu = prompt("Escoge que tipo de comida quieres \n carne, pescado, Ensalada").toLowerCase();

switch (menu) {
    case "carne":
        console.log("Quieres acompañar tu carne con vino tinto");
        break;
    case "pescado":
        console.log("Quieres acompañar tu pescado con vino Blanco");
        break;
    case "ensalada":
        console.log("¿Quieres acompañar tu Ensalada con Agua?");
        break;

    default:
        console.log("elija carne, pescado o ensalada");
        break;  
}
*/

//Mismo ejercicio pero desarrollado por el Instructor (MAS OPTIMO)

/*
let menu, bebida;
switch (menu = prompt("Tipo de menu: Carne, Pescado, Ensalada").toLowerCase()){
        case "carne":
                bebida = "Desea beber Vino Tinto";
                break;
        case 'pescado':
                bebida = "Desea beber Vino Blanco";
                break;
        case "ensalada":
                bebida = "Desea beber Agua";
                break;
                
        default: bebida = "Debes elegir entre Carne, Pescado o Ensalada";
}
alert(bebida);
*/

                                //Dos ejercicios para desarrollar en casa (Sábado 14-09-24)


                        //Ejercicio de un negocio de Video Juegos



let salas, juegos;
salas = parseInt(prompt("¿Cuantos créditos quieres Jugar?"));
switch (salas) {
  case 1:
    juegos = "Solo puedes ingresar a la sala de Consolas";
    break;

  case 2:
    juegos = "Puedes ingresar a la salas de Consolas y Juegos 2D";
    break;

  case 3:
    juegos = "Puedes ingresar a la salas de Consolas,  Juegos 2D y Juegos 3D ";
    break;
  case 4:
    juegos =
      "Puedes ingresar a la salas de Consolas,  Juegos 2D, Juegos 3D y Realidad Virtual ";
    break;

  default:
    juegos =
      "Esos Créditos no Existen, debes escoger entre 1, 2, 3, o 4 Créditos";
}
alert(juegos);



                        //Caso Numero 2 (porcentajes de descuentos)

                                //mi lógica sin if ni switch

/*
                        const a = 0.05;
                        let precio, descuento, pagar;
                        precio = parseFloat(prompt("Ingresa el costo de tú compra"));
                        
                        descuento = (precio) * a;
                        pagar = precio - descuento;
                        
                        alert("El descuento es de: " +descuento);
                        alert(" El total a pagar es: "+pagar);
                        */


                //código funcional y listo
/*

 const a = 0.05;
 const b = 0.1;
 const c = 0.15;
                        
        let compra,
        descuento = 0;
        compra = parseFloat(prompt("Ingresa el costo de tú compra"));
                        
        if (compra < 100000) {
        descuento = 0; // sin descuento
        } else if (compra >= 100000 && compra <= 300000) {
        descuento = a; // Descuento del 5%
        } else if (compra > 300001 && compra <= 500000) {
        descuento = b; // Descuento del 10%
        } else if (compra > 500001) {
        descuento = c; // Descuento del 15%
        }
                        
                        // Descuento aplicado
        let totalDescuento = compra * descuento + "\n El cual es un " + descuento * 100 + "%";
                        // Pago con descuento
        let totalPagar = compra - compra * descuento;
                        
                        //Calcula el descuento
        alert("El descuento total es de = $  " + totalDescuento);
                        
                        // Calcula el total a pagar después del descuento
        alert("El total a pagar es = $ " + totalPagar);
                        
        
*/
