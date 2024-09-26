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

/*
        for (let i= 3; i<=30; i+=3){ //incremento
console.log(i);
        }

for(let j= 20; j>=1; j-=1){
    console.log(j);
}

let tabla =4;
for (let i =1; i<=10; i++){
    console.log(`${tabla} * ${i} =${(tabla*i)}`);
}
    console.log ("-----------------------")
*/
//Decremento

// for(let j= 20; j >=1; j-=2){
//     console.log(j);
// }

//Ejercicio para tablas de multiplicar (Jueves 12_09-24)

/*
    let Tabla;
    Tabla =parseInt(prompt("Coloca la tabla de multiplicar que quieras"));
    for(let T = 1; T <= 10; T++){
        console.log(`${Tabla} * ${T} = ${Tabla*T}`);
    }

    */
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

/*

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

*/

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


                                //Clase Lunes 16-09-24

      //talas de multiplicar

//Ejercicio para tablas de multiplicar (Jueves 12_09-24)

/*
let Tabla;
Tabla = 1
for(let T = 1; T <= 10; T++){
  for(let T =1; i <= 10; i++){
    console.log(`${T} * ${T} = ${T*T}`);
  }

}
*/


       //Cuento suman lo primeros 100 números impares

       /*
let sum = 0;
let calculo = 0;
for (let i = 1; calculo <= 100; i+=2){
  sum += i;
  calculo++;
}
console.log (`la suma de los numeros impares es :${sum}`);

*/


          // Martes 17-09-24 ciclo while y Do 

/*
//los números de 1 al 10 con for
for(let i = 1; i<=10; i++){
  console.log(i);
}

//los números de 1 al 10 con while

let numero = 1;

while(numero <=10){
  console.log(numero);
  numero++;
}

*/


      // sumar números positivos

            //Método 1

/*
  
  let n=1;
  let sum=0;

  while(n > 0){
    n = parseInt(prompt("ingrese un numero positivo para sumarlos e ingrese un numero negativo para salir"));
    sum += n;
    console.log(sum);
}

console.log(`la suma de los números ingresados es : ${(sum+(n * -1))}`);
*/


               //Método 2 

/*

let n=1;
let sum=0;

while(n > 0){
  n = parseInt(prompt("ingrese un numero positivo para sumarlos e ingrese un numero negativo para salir"));

  if(n>0){
    sum += n;
    }
    console.log(sum);
}

console.log(`la suma de los números ingresados es : ${(sum)}`);

*/


      //otra solución otro compañero Jorge 

/*

let num2;
let sum2  = 0;

while ((num2 = parseInt(prompt("Ingrese un número positivo: ")))> 0){
  sum2 += num2;
  console.log(sum2);
}
console.log("La suma Total es : ", sum2);

*/


       //Desarrollar menu de opciones

/*

let opcion; 
let estado = true;

let coseno,seno,raiz,numero;
// 1.Raiz
// 2.Seno
// 3.Coseno

//opciones ralizar un calculo matematico

while(estado){

opcion = (parseInt(prompt(`SELECCIONE UNA OPCIÓN \n 1: Raiz \n 2: Seno de N1 \n 3: Coseno N1 \n 4: Salir `)));

switch(opcion){

  case 1: alert(`seleccionaste Raíz`);
    numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ `)));
     raiz = Math.sqrt(numero);
     alert(`LA RAIZ DE ${numero} ES: ${raiz}`);
    
  break;

  case 2: alert(`seleccionaste Seno N1`);
  numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR SENO`)));
   seno = Math.sin(numero);
   alert(`EL SENO DE ${numero} ES : ${seno}`);
   
  break;

  case 3: alert(`seleccionaste Coseno N1`);
  numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR COSENO`)));
   coseno = Math.cos(numero);
   alert(`EL COSENO DE ${numero} ES : ${coseno}`);
  break;

  case 4: alert("SALIENDO...");
  estado = false;
  break;
  
  default:
   alert("LA OPCIÓN NO EXISTE");
  
  }
}

*/


        //Ejercicio en clase Adivina el número


// let alea = Math.floor(Math.random() * 50) + 1; /**forma numero 1 */

/*

let alea = Math.floor(Math.random() * 50) + 1;
let nUsuario = 0;
let intentos = 0;

while (alea !== nUsuario){
  nUsuario = (parseFloat(prompt(`ingresa un número entre 1 y 50`)));
  intentos++;

  if (nUsuario < alea){
    alert("Tu número bebe ser mayor.");
  }else if (nUsuario > alea){
    alert("Tu número debe ser menor.");
  }else{
    alert(`✌👌Felicidades! Adivinaste¡ \n Mi número era 👍 ${ alea} \n y lo encontraste en: ${ intentos} intentos. Muy bien ✌👌👍`);
    
  }
}

*/
 
      // Do while

        //Calculo del area de un circulo, cuadrado, triangulo

        //area del circulo = pi* radio al cuadrado pi=* r+r
 // area circulo:  a= pi *r*r       
// area cuadrado  a= lado * lado
// rea triangulo: a= B*H/2

/*

let ac, acu, at;
let r, lado, b, h;
const pi= 3.141516;
let opcion;

// let estado = true; //buleano

      do {
        opcion = parseInt(prompt(`1. area Circulo \n 2. area del Cuadrado \n 3. area del triangulo`)); //lo que el usuario escoge. y guardar en opcion. 

        switch(opcion){

          case 1: alert("Area del circulo");
          r= parseInt(prompt("Ingrese el valor del radio"));
          
          ac = pi * (r * r);
          alert(`El Area del círculo es : ${ac}`);

          break;

          case 2: alert("Area del Cuadrado");
          // a= lado *lado
          lado = parseFloat(prompt("ingrese el valor del lado"));
          
          acu = (lado*lado);
          alert(`El Area del cuadrado es : ${acu}`);
          
          break;
          
          case 3: alert("Area del Triangulo");
         
                // a = (b*h)/2

                b = parseFloat(prompt("ingrese el valor de la base"));
                h = parseFloat(prompt("ingrese el valor de la altura"));

                at = (b*h)/2;
                alert(`El Area del triangulo es : ${at}`);

                break;
          case 4: alert("");
          
          alert("SALIENDO .........");
          // estado = false;

          break
          default: 
           alert("opcion no valida");
        }    

      }while(opcion !=4); // repite el menu  
      
      //otra opción 

      // }while (estado); // y en caso 4: activar estado = false;

      */

              //Mismo ejercicio pero utilizando while


/*        
              
      let ac, acu, at;
      let r, lado, b , h;      
      const pi = 3.1416;      
      let opcion;
      
      opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));
      
      while(opcion != 4){   
         
      
        switch(opcion){      
      
          case 1: alert("Area del circulo");
          // A = pi * r*r
          r = parseFloat(prompt("Ingrese el valor del radio"));
      
          ac = pi * (r*r);
      
          alert(`El area del circulo es: ${ac}`);
        
          break;
      case 2: alert("Area del cuadrado");
      
         // A = lado * lado
      
         lado = parseFloat(prompt("Ingrese el valor del lado"));
      
         acu = (lado*lado);
      
         alert(`El area del cuadrado es: ${acu}`);
      
          break;
      
          case 3: alert("Area del triangulo");
      
          // A = B*H/2
      
          b = parseFloat(prompt("Ingrese el valor de la base"));
          h = parseFloat(prompt("Ingrese el valor de la altura"));
      
          at = (b*h)/2;
      
          alert(`El area del triangulo es: ${at}`);
      
          break;
      case 4:
            alert("SALIENDO.....");
            //estado = false;
      
          break;
      
          default: 
          alert("Opción no valida");  
        
      
        }
      
        opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));
      
      }
      
*/

          // Ejercicio de Temperaturas


          /*

                //temperaturas  

                let valor;
                let resultado;
                let opcion;
                do {
                    opcion = prompt("Selecciona una opción para hacer la conversión:\n1. Kelvin a Celsius\n2. Kelvin a Fahrenheit\n3. Fahrenheit a Celsius\n4. Fahrenheit a Kelvin\n5. Celsius a Kelvin\n6. Celsius a Fahrenheit\n0. Salir");
                
                  
                
                    if (opcion !== "0") {
                        valor = parseFloat(prompt("Introduce el valor que quieres convertir de temperatura: 🌡🌡🌡🌡"));
                    }
                
                    switch (opcion) {

                        case "1":
                            // Kelvin a Celsius
                            resultado = valor - 273.15;
                            alert(valor + " Kelvin son " + resultado.toFixed(3) + " °Celsius");
                            break;

                        case "2":
                            // Kelvin a Fahrenheit
                            resultado = (valor - 273.15) * 9/5 + 32;
                            alert(valor + " Kelvin son " + resultado.toFixed(3) + " °Fahrenheit");
                            break;

                        case "3":
                            // Fahrenheit a Celsius
                            resultado = (valor - 32) * 5/9;
                            alert(valor + " °Fahrenheit son " + resultado.toFixed(3) + " °Celsius");
                            break;

                        case "4":
                            // Fahrenheit a Kelvin
                            resultado = (valor - 32) * 5/9 + 273.15;
                            alert(valor + " °Fahrenheit son " + resultado.toFixed(3) + " Kelvin");
                            break;

                        case "5":
                            // Celsius a Kelvin
                            resultado = valor + 273.15;
                            alert(valor + " °Celsius son " + resultado.toFixed(3) + " Kelvin");
                            break;

                        case "6":
                            // Celsius a Fahrenheit
                            resultado = (valor * 9/5) + 32;
                            alert(valor + " °Celsius son " + resultado.toFixed(3) + " °Fahrenheit");
                            break;

                        case "0":

                            alert("Saliendo del programa.......");
                            break;
                        default:
                            alert("Opción no válida. Inténtalo de nuevo.");
                    }
                    
                  }while (opcion !== "0");
                               

          */
         



    //lunes 23-09-24 Funciones 

/*
//ejemplo 1
    saludar ("Richy");
    function saludar(nombre){
      alert(`Hola ${nombre}`);
    }
*/


//ejemplo 2
/*
function raiz (numero){
    return Math.sqrt(numero);
}
console.log(raiz(32));

*/

//Ejemplo 3

/*
function exponente(base, ciadrado){
  return Math.pow(base, ciadrado);

}

console.log(El cuadrado es: ${exponente(12, 6)});

*/


// Proyecto de temperaturas pero con funciones

/*

function kelvinACelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinAFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function fahrenheitAKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function celsiusAKelvin(celsius) {
  return celsius + 273.15;
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Función principal que ejecuta las conversiones
function converttemperatura() {
  let option;
  do {
      //Menu para las opciones
      option = prompt(
          "🌡🌡Introduce el valor que quieres convertir de temperatura: 🌡🌡:\n" +
          "1. Kelvin a Celsius\n" +
          "2. Kelvin a Fahrenheit\n" +
          "3. Fahrenheit a Celsius\n" +
          "4. Fahrenheit a Kelvin\n" +
          "5. Celsius a Kelvin\n" +
          "6. Celsius a Fahrenheit\n" +
          "0. Salir"
      );

      let temperatura, result;
      
      // Evaluar la opción que seleccione el usuario
      switch (option) {
          case '1':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Kelvin:"));
              result = kelvinACelsius(temperatura);
              alert(`${temperatura} grados Kelvin es : = ${result.toFixed(2)} grados °Celsius`);
              break;
          case '2':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Kelvin:"));
              result = kelvinAFahrenheit(temperatura);
              alert(`${temperatura} grados Kelvin es : = ${result.toFixed(2)} grados °Fahrenheit`);
              break;
          case '3':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:"));
              result = fahrenheitACelsius(temperatura);
              alert(`${temperatura} grados °Fahrenheit es : = ${result.toFixed(2)} grados °Celsius`);
              break;
          case '4':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:"));
              result = fahrenheitAKelvin(temperatura);
              alert(`${temperatura} grados °Fahrenheit es : = ${result.toFixed(2)} grados °Kelvin`);
              break;
          case '5':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
              result = celsiusAKelvin(temperatura);
              alert(`${temperatura} grados °Celsius es : = ${result.toFixed(2)} grados °Kelvin`);
              break;
          case '6':
            temperatura = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
              result = celsiusAFahrenheit(temperatura);
              alert(`${temperatura} grados °Celsius es : = ${result.toFixed(2)} grados °Fahrenheit`);
              break;
          case '0':
              alert("Saliendo del programa...");
              break;
          default:
              alert("Opción no válida. Inténtalo de nuevo.");
              break;
      }
  } while (option !== '0');
}

// Llamar a la función principal
converttemperatura();

*/

//Funcion tradicinal


/*

function multiplicacion (a,b){
  retur a*b;
}

console.log(multiplicacion(5, 6));


// Funcion Flecha

let multiplicacion1 =(a,b) => {
  return a*b;
}

console.log(multiplicacion1(6, 3));

// forma 3

let multiplicacion2 =(a,b)=> a+b;
console.log(multiplicacion(3,7));


          //otro ejemplo

let ra =(numero) =>Math.sqrt(numero);

console.log(ra(25));



            // Otro ejemplo


let funcion =() => console.log("hola, soy una funcion sin parametros")
funcion();
*/


            //Arrays 

/*

let estudiantes = ["Laura","Julian","Andres", "Oscar", " Paola"];

console.log(estudiantes);

// Añadir un elemento al final del Arreglo

// estudiantes.push("Ricardo");
 console.log(estudiantes.push("Ricardo"));

 // Añadir elementos al inicio

console.log(estudiantes.unshift("Esmeralda"));

// añadir elementos en alguna posición 

console.log(estudiantes.splice(2 , 0 , "Sofia"));

// borrar ultimo  elemento

console.log(estudiantes.pop());

// borrar primer elemento

console.log(estudiantes.shift());

//Saber la posición de un elemento

console.log(estudiantes.indexOf("Andres"));

// borrar elemento  en una posición
console.log(estudiantes.splice(2, 1)); //2 es la posición y 1 el numero e elementos que quiero eliminar

//recorrer el arreglo

//op1 forma 1

estudiantes.forEach((est) =>{
  console.log(est);
});


//Que hay en posicion 3 (iterador) forma 2

estudiantes.forEach((est) =>{
    if(est === estudiantes[3]){
      console.log(est);
    }
});

// for(let est of estudiantes){
//   console.log(est);
// }


//to string
let vector = [];
  vector[0] = 15;
  vector[1] = 63;
  vector[2] = 48;

  console.log(vector);

  */

                             // Miércoles 25-09-24

/*
  
 let vector =[];

 //Recorrer para llenar el vector

 for(let i = 0; i <5; i++){

  vector.push(i+1);
 }

 // Recorro para mostrar el vector
 for(let i =0; i<5; i++){
  console.log(vector[i]);
 }

 */

                 //Otro vector de números

/*

      let numeros = [12,23,18,16,19];
      let suma = 0;
      for(let i = 0; i < numeros.length; i++){ //numeros.legth  es igual a la cantidad de numeros que hay en este caso (5)

            suma += numeros[i];

      } //aquí en consola dice que la suma de esos numeros es 88
      console.log(`La suma es : ${suma}`);

*/

/*
      //foreach
      numeros.forEach((nu) => {
        suma += nu;
      });

console.log(`la suma es: ${suma}`);

*/

      //Sumar pares y impares
/*
      let numeros = [12,23,18,16,19];
      let impares = 0;
      let pares = 0;

      for(let i = 0; i < numeros.length; i++){ 
          if(numeros[i]%2==0){
            pares += numeros[i]
          }else{
            impares += numeros[i]
          }          

        }
        console.log(`La suma en pares es : ${pares }`);    
        console.log(`La suma en impares es : ${impares}`);    

        */
 

    // identificar el mayor y el menor 
 
    
/*

let numeros = [12, 23, 18, 16, 19];
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    } else if (numeros[i] < numeroMenor) {
        numeroMenor = numeros[i];
    }
}

console.log("El número mayor es:", numeroMayor);
console.log("El número menor es:", numeroMenor);

*/

// para el usuario ingresar numeros que se alojen en el console.log

/*

let num = new Array(5);

//lo recorro para llenarlo
for (let i=0; i< num.length; i++){
  num[i]= parseInt(prompt("ingrese el numero entero"));

} // Recorro para mostrar
for (let i =0; i< num.length; i++){
  console.log(`${num[i]}`);
}

*/


            // Jueves 26-09-24

            
  //Ejercicio en Clase para determinar las Calificaciones de estudiantes


  let tamanio = parseInt(prompt("ingrese la cantidad de estudiantes"));
  let Calificaciones = new Array(tamanio);
  let sumar = 0;
  let cAlta= 0;
      

  for (let i = 0; i < Calificaciones.length; i++){

    Calificaciones[i] = parseFloat(prompt("ingrese las notas"));
    sumar += Calificaciones[i];

  }
  
  for(let i =0; i < Calificaciones.length; i++){
    console.log(`Calificaciones ${i+1} : ${Calificaciones[i]}`);    

    //Calificación máxima es
  if(Calificaciones[i] > cAlta){
    cAlta = Calificaciones[i];
    }
  
  }
 
    console.log (`la suma de las calificaciones es: ${sumar}`);
    console.log(`El promedio de las calificaciones es: ${(sumar/tamanio)}`);
    console.log(`La calificación mas alta es : ${cAlta}`);





