// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let matriz = Object.entries(objeto)
  return matriz

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let nstring = string.trim().toLowerCase().split('')
  let cantidades = {}
  nstring.forEach(letra => {
    cantidades[letra] = (cantidades[letra] || 0) + 1
  });
  return cantidades
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let ns = s.split('')
  let mayus = "", minus = ""
  ns.forEach(letra => {
    if (letra === letra.toUpperCase()) mayus += letra
    else if (letra === letra.toLowerCase()) minus += letra
  });
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrStr = str.split(" "), final = ""
  arrStr.forEach(word => {
    arrWord = word.split("").reverse().join("")
    final += `${arrWord} `
  });
  return final.trim()
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let invertido = numero.toString().split("").reverse().join("")
  let res = invertido == numero ? "Es capicua" : "No es capicua"
  return res
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let arrCad = cadena.split("")
  let filtrado = arrCad.filter(letra => letra != "a" && letra != "b" && letra != "c")
  return filtrado.join("")

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let helper = ""
  let cont =0
  while (cont < arr.length) {
    for (let i = 0; i < (arr.length - 1); i++) {
      if (arr[i].length > arr[i + 1].length) {
        helper = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = helper
      }
    }
    cont++
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let pares = []
  arreglo1.forEach(datoA1 => {
    arreglo2.forEach(datoA2 => {
      if (datoA1 == datoA2) pares.push(datoA2)
    });
  })
  return pares
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

