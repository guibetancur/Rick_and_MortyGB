// manejo de objetos
let cadena = Array(5).fill('texto')
console.log(cadena)
let otro = cadena.map((elemento, indice) => { return elemento + indice })
console.log(otro)

const yo = {
  nombre: 'Guillermo',
  apellido: 'Betancur',
  edad: 45,
  correo: 'guibetancur@gmail.com',
  hobbies: ['Deporte', 'Música', 'Programación', 'Mascotas'],
  hijos: {
    hijo1: 'Sebastián',
    hijo2: 'Mauricio'
  }
}

//console.log(yo)
for (const propiedad in yo) {
  console.log(`Llave: ${propiedad} Valor: ${yo[propiedad]}`)
}

// recorro cualquier iterable
for (const iterator of otro) {
  console.log(iterator)
}
let str = 'Guillermo Betancur'
for (const char of str) {
  console.log(char)
}

// Deteccion de errores try catch finally
try {
  console.log('aca se agrega el código a evaluar')
  errorvoluntario
} catch (error) {
  console.log('captura cualquier error surgido en el try')
  console.log(error)
} finally {
  console.log('Se ejecutará siempre al final de un bloque (opcional)')
}

try {
  let numero = 10
  if (isNaN(numero)) {
    throw new Error("El valor no es un número válido")
  }
  console.log(`La potencia cuadrada del número es: ${numero ** 2}`)
} catch (error) {
  console.log(`Hubo un ${error}`)
}

// break and continue
const nros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < nros.length; i++) {
  const element = nros[i];
  if (i % 2 !== 1) continue
  if (i === 7) break
  console.log(nros[i])
}

// Desctructuring

const numeros = [1, 2, 3]
let [uno, dos, tres] = numeros
console.log(uno, dos, tres)

const persona = {
  nombre: 'Guillermo',
  apellido: 'Betancur',
  edad: 45
}
// en objetos conservar el nombre de las propiedades no importa el orden
let { nombre, apellido, edad } = persona
console.log(nombre, apellido, edad)

// Objetos literales

let mascota = 'Rolly', age = 2
const dog = {
  nombre,
  edad,
  tipo: 'Perro',
  ladrar() {
    console.log('guau guau')
  }
}

dog.ladrar()

// Parametreos REST y Spear Operator u operador de propagación
// REST
function sumar(a, b, ...c) {
  // la variable c almacena el resto de parámetros como un arreglo
  console.log(c) // [3,4,5,6,7,8,9,10]
  let suma = a + b
  c.forEach((n) => suma += n)
  return suma
}

console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55

// SPREAD
let arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 0]
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [1,2,3,4,5,6,7,8,9,0]

// Arrow functions
const saludar = () => 'Hola' // Return implícito
console.log(saludar())
const saludo2 = (nombre) => `Hola ${nombre}`
console.log(saludo2('Guillermo'))
const saludo3 = nombre => `Hola ${nombre}` // Si solo tiene un parámetro no necesita paréntesis
console.log(saludo2('Guillermo'))

const perro = {
  nombre: 'Rolly',
  raza: 'criollo',
  ladrar() { return 'guau' } // Las funciones con arrow no respetan el 'this' debe usar bind por eso es mejor así
}

console.log(perro.ladrar())

// Prototipos 
// Función constructora
function Animal(nombre, tipo, sonido) {
  // Atributos
  this.nombre = nombre;
  this.tipo = tipo;
  this.sonido = sonido
  // Métodos
  // No se deben hacer dentro de la clase
  //	this.sonido = function () {
  //		'guau'
  //	}
}

// Métodos prototipados
Animal.prototype.emite = function () {
  return this.sonido
}

const pet1 = new Animal('Rolly', 'perro', 'Guau'), pet2 = new Animal('Blacky', 'Gato', 'Miau')
console.log(pet1)
console.log(pet2)
console.log(pet1.emite())
console.log(pet2.emite())

// Herencia Prototípica
function Perro(nombre, tipo, tamanio) {
  //super() //llama el elemento constructor de la clase padre
  this.super = Animal; // Se invoca el constructor (acá, super no es palabra reservada)
  this.super(nombre, tipo)
  this.tamanio = tamanio
}

// Perro está heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro // Así toma todas las caracteristicas de Animal
// Cuando se hereda, se pueden crear sus propios métodos 
// ...y sobreescribirlos
Perro.prototype.sonido = function () { 'soy un perro' }
Perro.prototype.ladrar = function () { 'GUAUUUUU' }

const rolly = new Perro('Rolly', 'Perro', 'Mediano')
console.log(rolly)

//Clases
// Función constructora
class Animal2 {
  // El cosntructor es un método especia que se ejecuta en el momento de instanciar la clase
  constructor(nombre, tipo, sonido) {
    // Atributos
    this.nombre = nombre;
    this.tipo = tipo;
    this.sonido = sonido
  }
  // Métodos
  sonar() { return 'Emite sonidos' }
  saludar() { return `Mi nombre es ${this.nombre}` }
}

const tita = new Animal2('Tita', 'Gato', 'Miauuu'), leeloo = new Animal2('Leeloo', 'Gato', 'Mew')

console.log(tita, leeloo)
console.log(tita.saludar())
console.log(leeloo.sonar())

// Herencia a otro método (perro) con extends
class Perro2 extends Animal2 {
  constructor(nombre, tipo, sonido, tamanio) {
    // Con el método super() se llama el constructor de la clase padre (animal2)
    super(nombre, tipo, sonido)
    this.tamanio=tamanio // Esta es propia de la nueva clase
    this.raza = null
  }
  // sobreescribo los métodos del padre
  sonar() {return 'Ladro desde la clase hija: Perro2'}
  // un método estático se puede ejecutar sin necesidad de intanciar la clase
  // usando la palabra static
  static queEres() {
    return 'Los perros somos mamiferos pertenecientes a la familia de los caninos y considerados como el mejor amigo del hombre... y la mujer'
  }
  // Los setters y getters son métodos especiales que permiten establecer y obtener los valores de atributos de una clase
  get getRaza() { // método get u obtenedor
    return this.raza
  }
  set setRaza(raza) {
    this.raza= raza
  }
}

const milo = new Perro2('Milo', 'perro', 'Ladra', 'mediano')
// obteniendo el valor del getter
console.log(milo.getRaza) // null
milo.setRaza = 'Criollo' // Se trata como una propiedad, no como un método
console.log(milo.getRaza) // Ahora cambia a "Criollo"

// Métodos estáticos, getters y setters
// Llamo al método estático queEres(sin necesidad de instanciar Perro2)
console.log(Perro2.queEres())

// Objeto consola console.es un objeto con muchas propiedades
// se pueden ver haciendo...
console.log(console)

console.error('este es un error enviado directamente a la consola')  // color rojo
console.warn('Error de advertencia en la consola') // color amarillo
console.info('Mensaje de información en la consola') // Color verde
// usando comodines %s string %d digitos
let name='Guillermo', last = 'Betancur', age2 = 45
console.log('Nombre: %s, Apellido: %s, Edad: %d', name, last, age2)

console.clear()

console.dir(window)
console.dir(document) // Muetra toda la estructura del documento como objetos y atributos
// hacer grupos en la consola
console.group('Esto lo vi con JonMircha')
console.log('Curso de Javascript')
console.log('Curso de React')
console.log('Curso de NodeJS')
console.groupEnd()
// grupo colapsado
console.groupCollapsed('Esto lo vi con JonMircha')
console.log('Curso de Javascript')
console.log('Curso de React')
console.log('Curso de NodeJS')
console.groupEnd()
// Propiedades de la console como tabla
console.table(Object.entries(console).sort())

const numberos = [1,2,3,4,5], vocales = ['a','e','i','o','u']
console.table(numberos)
console.table(vocales)
// con objetos
console.table(dog)

// Para conocer el tiempo de proceso de un procedimiento
console.log('Cuánto tiempo tarda mi código')
console.time('Control1')
const arreglo = Array(1000000)
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i
}
console.timeEnd('Control1')
console.timeStamp()

console.count() // Cuenta las veces que se ejecuta un ciclo

let x=3, y=2, mensaje='X debe ser menor que Y'
// console.assert() evalua y muestra si se cumple la condición
console.assert(x<y, {x,y,mensaje})

// Objeto Date (constructor)
let fecha = new Date()
fecha.getDate() // Dia del mes
fecha.getDay()
fecha.getMonth()
fecha.getFullYear()
fecha.getHours()
fecha.getMinutes()
fecha.getSeconds()
fecha.getMilliseconds()

fecha.toString()
fecha.toDateString()
fecha.toLocaleString()
fecha.toLocaleDateString()
fecha.toLocaleTimeString()

fecha.getTimezoneOffset()
fecha.getUTCDate()

Date.now() // número del timestamp desde el 1/1/1980 Util para calcular fechas
// https://moment.js es especial para calcular fechas
let cumpleGMO = new Date(1968,3,24)
console.log(cumpleGMO)
console.log((Date.now()-cumpleGMO)/1000/60/60/24/365) // años de edad a la fecha

// objeto Math
console.log(Math.PI) // 3.1416
Math.abs(-7.8)
Math.ceil(7.8)
Math.floor(7.8)
Math.round(7.2)
Math.sqrt(15)
Math.pow(2,5)  // 2 a la 5
Math.sign(-7.8)
Math.round(Math.random()*1000)


// operador de corto circuito
function saludarx(nombre) {
  // si no recibe el parámetro se almacena desconocido
nombre = nombre || "Desconocido"
}
// && hace lo contrario

// Alert, Confirm, Prompt
// Métodos del objeto window
alert('Alerta')
confirm('Confirme')
prompt('Escriba la respuesta')

// Expresiones regulares
// https://es.wikipedia.org/wiki/Expres%C3%B3n_regular
// hhtps://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

// Hay dos maneras de declararlos con la función constructora
let strx = 'lorem ipsum dolor sit amet consectetur adi lorem, perrefas ea iure a odio doloremque earum voluptate.'
let expReg = new RegExp('lorem','gi') // Texto, banderas
let expReg2 = /lorem/ig // texto a buscar, banderas
// Para validarlo
console.log(expReg.test(strx)) // opción 1 devuelve true
console.log(expReg.exec(strx)) // opción 2 devuelte objeto

// Banderas
// g Global - i ignore may min - [0-9] que existan numeros - {1,3} que se repita de 1 a 3 {3,} al menos 3 veces

// Funciones anónimas autoejecutables IIFE
// Clásica
(function (d,w,c){
  // Dentro de esta funciíon, d=document, w=window, c=console (c.log, w.alert()) etc
})(document,window,console);

// La Crockford 
((function (d,w,c){
  // Dentro de esta funciíon, d=document, w=window, c=console (c.log, w.alert()) etc
})(document,window,console));

// La unaria
+function (d,w,c){
  // Dentro de esta funciíon, d=document, w=window, c=console (c.log, w.alert()) etc
}(document,window,console);

// Facebook
!function (d,w,c){
  // Dentro de esta funciíon, d=document, w=window, c=console (c.log, w.alert()) etc
}(document,window,console);
