// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
   for(var key in objeto){
    matriz.push([key, objeto[key]])
   } 
   return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var nroDeVeces = {};
  for(var a = 0; a < string.length; a++){
    if(!nroDeVeces.hasOwnProperty(string[a])){
      nroDeVeces[string[a]] = 1;
    } else nroDeVeces[string[a]]++;
  } return nroDeVeces;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '';
  var minus = '';
  for(var a = 0; a < s.length; a++){
    if(s[a] === s[a].toUpperCase()){
      mayus += s[a];
    } else minus += s[a];
  } return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strToArray = str.split(' ')
  var arrayFinal = strToArray.map(function(ele){
    return ele.split('').reverse().join('');
  })
  return arrayFinal.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString = numero.toString();
  var resultado = numString.split('').reverse().join('');
  if(numString === resultado){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var versionModificada = '';
  for( var i = 0; i < cadena.length; i++){
    if(cadena[i] === 'a'|| cadena[i] === 'b' || cadena[i] === 'c'){
      continue
    } else {
      versionModificada +=  cadena[i]
    }
  } return versionModificada;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var matrizOrdenada = arr.sort(function(a,b){
    return a.length - b.length
  }) 
  return matrizOrdenada;
}

//[1,2,3,4,5]
//[5,4,3,2,1]


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];
  for(var a = 0; a < arreglo1.length; a++){
    for(var b = 0; b < arreglo2.length; b++){
      if(arreglo1[a] === arreglo2[b]){
        nuevoArray.push(arreglo1[a])
      }
    }
  } 
  return nuevoArray;
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

