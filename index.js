// let numero = 50;
// //operador ++, para incrementar de a 1
// numero = numero +1;
// numero += 1;
// numero++;

// operadores ternarios, es una forma de simplificar el if, else

// let temperatura = 31;

// if (temperatura > 30) {
//     console.log("hace calor");
// }else {
//     console.log("tranquilo");
// }
// en este caso saldra que hace calor

// pero trabajando con los operadores ternarios lo haremos de esta manera
// condicion signo de ? codigo1 : else codigo2;

// let temperatura = 31;

// temperatura > 30 ? console.log("hace calor") : console.log("tranquilo");

// esto es lo mismo que hicimos anteriormente, con el if y el else.

// y podenmos poner mas condiciones, anidar cosas, con el &&,  si son mas condiciones podemos usar el normal

// aca podemos poner en la condicion una funcion tambien, si se cumple la condicon poner la funcion y si no se cumple pondremos lo otro.

// let temperatura = 31;


// function name(params) {
    
// }
// temperatura > 30 ? name(params) : console.log("tranquilo");


// let permiso; 

// let edad = 15;

// if (edad >= 18) {
//     permiso = true;
// }else {
//     permiso = false;
// }
 
// if (permiso) {
//     console.log("puedes entrar");
// } else{
//     console.log(" no puedes entrar");
// }

// esto de arriba se puede resumir en operadorers ternarios
// el ternario tiene retorno implicito, y resumom todas las lineas anteriores en 3 lineas


// let edad = 18;

// let permiso = edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar") : console.log(" no puedes entrar");

//&& el concatenador and se puede usar tambien, lo podemos hacer con un carrito.

// const carrito = [];

// // if (carrito.length === 0) {
// //     console.log("carrito4 vacio");
// // }


// // cuando usamos este booleano, entonces si le pasamos un carrito.length y la condicon
// //  de carrito vacio, nos dara vacio, si no ponemos nada saltara a la segubda condicion,
// en este caso a ninguna, como resultado me dara nada

// carrito.length === 0 && console.log("carrito vacio");

// valor1 && valor2
// si el valor 1 es verdadero o tiene una representacion de verdadero entonces ejecuta el valor 2en caso contrario ejecuata el valor1

// vamos hacer un registro donde vamos a poner si el usuario tiene mas de 18 va a registrar el horario y dia que ingreso

// const usuario = {
//     nombre : "mariano",
//     // edad : 50,
//     edad: 10,// false
// }

// const ingreso = usuario.edad >= 18 && new Date();// fecha de ingreso si es verdadero el valor1
// console.log(ingreso);

// edad: 10, si el valor del usuario no se cumpple, es falso

//el valor or ||
//el valor1 || valor2, 
// si el valor1 no es falsy (distinto de todos), esto me va a devolver el valor1, en caso contrario,
// me va a devolver el valor2, retorna el valor2.

// console.log( 0 || "falsy");// falsy
// console.log( 40 || "falsy"); // 40
// console.log( nul || "falsy"); // falsy
// console.log( undefine || "falsy"); // falsy
// console.log( "hola mundo" || "falsy"); // hola mundo
// console.log( "hola mundo" || "falsy");// falsy
// console.log( "NaN" || "falsy");// falsy
// console.log( "true" || "falsy");//true
// console.log( "false" || "falsy");// falsy

// ¡ como se puede aplicar esto???

// si el usuario me llega nulo del local Storage. verificamos el usuartio y este no existe

// const usuario = {
//     nombre : "mariano",
//     edad : 40,
// };

// const usuario1 = null;

// console.log(usuario || "el usuario no existe");
// console.log(usuario1 || "el usuario no existe");

// en el primer ejemplo el usuario es truty, sacara el primer valor.
// pero cuando el primer usuario es falsy sale la segunda opcion.

// consola:
//primera respuesta
// //{
//     nombre : "mariano",
//     edad : 40,
// };

// segunda respuesta
// "el usuario no existe"


// en el caso de que hagamos un carrito para guardwar en el localStorage podemos hacrer esto


// let carrito;

// let carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];

// if (carritoStorage) {
//     carrito = carritoStorage;

// } else {
//     carrito = [];


// }

// si lo queremos hacer en una sola linea

// let carrito = JSON.parce(localStorage.getItem("carrito") || []);

// entonces si esto llega como null me retorna al carrito vacio y si no llega como nulo va ala primera opcion,

// existe el operador nullish que tira el segundo es con dos signos ??
// funciona igual que el operador or, con la diferencia que admite mas valores
// como verdaderos, pior ejemplo:

//  console.log( null ?? "nullish");
//  console.log(undefined ?? "nullish");

// es como una especie de or, pero admite mas valores, no es mas frecuente 

//acceso condicional a un objeto

// const usuario = null;

// console.log(usuario.nombre || " el usuario no existe");

// esto me tira un error, porque no puede leer el usuario nombre porque no exist,
// pero si delante del usuario antes del punto ponemos un signo de pregunta.
// nos va a dar como resultado el segundo valor y no nos va a dar error

// const usuario = {
//     nombre : "pepito"
// };

// console.log(usuario?.nombre || " el usuario no existe");

// lo que hace es decir que lo primero no se puede hacer,  pero si existe la propiedad nombre en vez de null,
// me aparecera el nombre la primera opcion.


// se puede hacer con una funcion adentro

// const crear = (usuario) => {
//     ;dghbskjhfkj
//     ;hdbhsbhbbsk
//     ;dhgchskbckbkj
// }

// usuario ? crear(usuario) : null;

// entonces esto va a decir que si el usuario pasa por la funcion se va a dar esa condicion,
// si no no va a dar nada en este caso va a dar null, ya que en en el if else tendriamos que 
// escribir toda la funcion y en este caso solo la llamamos



// const usuario = {
//     nombre: "juan",
//     edad: 50,
//     direccion: "av",
//     estatura: 168
// }

// let {nombre, edad} = usuario;

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion= usuario.direccion;
// let estatura = usuario.estatura;

// console.log(nombre);


// en vez de hacer esto codigo largo, lo que podemos hacer es con las llaves,
// destructuracion del onbjeto, las llaves despues del let. Es solo para objetos

//ahora haremos este objeto y traeremos el nombre, el telefon y del telefono el cel, destructuramos
// como lo hacemos ?? pondremos la propiedad y entre llaves lo que queremos traer,
// en este caso el cel, y que salga en consola llamando a los datos que queremos traer

// const usuario = {
//     nombre: "juan",
//     edad: 50,
//     direccion: "av",
//     estatura: 168,
//     telefono: {
//         cel: 654654615,
//         casa: 546546464,
//         trabajo:554544
//     },
// };

// const {nombre, telefono: {cel}} = usuario;

// console.log(nombre, cel);

// yo quiero que me traiga el nombre y la edad, pero lo podemos renombrar por si lo necesityamos en algun momento
// de esta manera lo que hacemos es poder cambiar las categorias de los datos y ponerlos en otro idioma

// const  {
//     nombre: "juan",
//     edad: 50,
//     direccion: "av",
//     estatura: 168
// } = usuario ;

// const { nombre: namePerson, edad: age} = usuario;

// console.log(namePerson);
// console.log(age);

// de esta manera podemos renombre cada categoria de los datos de nuestro objeto

//Destructuracion de parametros, tenemos una funcion crearUsuario, y esto va a recibir un nombre , y una edad,
// y debajo de la funcion le pasamos los parametros con un objetoy dentro de los parentesis de la funcion le pasamos los datos del objeto.

// const crearUsuario = (nombre, edad) => {
//     console.log(nombre, edad);
// };

// crearUsuario({nombre: "juan", edad: 45});

// entonces creamos la funcion y queremos llamar de esta funcion datos de un objeto,
// lo que hacemos es asignarle a la funcion los datos y despues se los pasamos como parametros

// destructuracion de un arreglo, tenemos una funcion con un arreglo con diferentes nombres, y abajo para traer los datos,
// pondremos cochetes xon la ubicacion de el dato que queremos traer y que sea igual al nombre de la funcion,
// y segun el lugar de los datos que queremos traer pondremos comas con espacios, y si queremos que salgan por consola
// traemos con el console.log con el nombre que le asiganamos en la funcion.



// const nombres = ["juan", "julieta", "carlos", "mariela"];

// const [a, ,b] = nombres;// juan y carlos
// // const [a, b] = nombres; juan y julieta

// console.log(a);
// console.log(b);


// si yo creo una variable que sea igual a los datos de una persona(persona1), y luego creo otra variable(persona2),
//que esta sea igual a persona1, y despues quiero modificar a persona2, se modificaran los datos de ambas,


// let persona1 = {nombre: "andres", edad: 45};
// let persona2 = persona1;

// persona2.nombre = "camila";
// console.log(persona1);

// pero si a persona1 lo ponemos entre llaves y con tre puntos adelante de la palabra, los datos de persona1 no cambiaran,


// let persona1 = {nombre: "andres", edad: 45};
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);

//si traigo un arreglo con todos los nombres y llamos a la constante nombres con 3 puntos adelante, me los trae a todos juntos


// const nombres = ["juan", "julieta", "carlos", "mariela"];
// console.log(...nombres);

// // y si hacemos nombres.join(" ") cumple la misma funcion.


// console.log(nombres.join(" "));

// si hacemos un arreglo de numeros y queremos traer el numero mas alto, hacemos un log con math.max() y dentro pondremos el nombre de la contante y 3 puntos delante

// const numeros = [4, 5, 100, 57, 123];
// console.log(Math.max(...numeros));

//si tenemos un usuario con sus datos, y para hacer una copia de este usuario, y queremos hacer un cambio, hacemos una nueva constante (usuario2), igual, abrimos llaves,,
//ponemos 3 puntos despues el nombre de la constante que vamos a copiar, coma y debajo lo que queremos que sea diferente a la otra
// cerramos llaves y hacemos un log del usuario que creamos, nos saldra un usuario simililar, pero con diferentes datos.

// const usuario = {
//     nombre : "juan",
//     edad: 50,
//     direccion: "av",
//     estatura: 1.80
// };

// const usuario2 = {
//     ...usuario,
//     nombre: "pepito",
//     mama: "pepita"
// };

// console.log(usuario2);


// creamos una funcion que se llame Prueba, que sea igual a un parametro que sea numero con 3 puntos delante (...numeros), despues, 
// una arrow function, y dentro un log con el nombre del parametro.

// const prueba = (...numeros) => {
//     console.log(numeros);
// }

// // entonces, si yo a esta funcion prueba(), le paso parametros, nombres, numeros, etc, los va a traer por el console.log

// prueba("pepeito", "juan", 5, 8, 4);

// se transforma en un arreglo, y si dentro de la funcion hacemos un forEach del parametro, con un item y log del item, este me traera los datos pero de a uno.

// const prueba = (...varios) => {
//     varios.forEach(item => console.log(item));
// };

// prueba("pepeito", "juan", 5, 8, 4);

//los 3 puntitos convierten todo en un arreglo.

// tambien podemos hacer una suma con todo esto, creamos una constante sumar igual a un parametro numeros con 3 puntitos, arrow function,
// retornamos los numeros punto reduce, reduce a un unico valor, y dentro de parentesis,
// pondremos el acomulador coma item, arrow function acumulador mas item coma 0, cerramos llaves.


// const sumar = (...numeros) => {
//     return numeros.reduce((acumulador, item) => acumulador + item, 0);
// };

// console.log(sumar(2, 5, 6, 89));

// entonces creamos la funcion sumar, le pasamos com om parametro el arreglo, por una arrow function retornamos
//este arreglo con un reduce, que lo que hace es reducir el rsultado, dentro ponemos el acumulador coma item, arrow functio el acumulador
// + el item coma 0, cerramos llaves y fuera de las llaves pondremos ewl log con la funcion sumar y dentro los items que queremos que se sumen




































































































































