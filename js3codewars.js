// --------------------------------------------------------- somar array -----------------------------------------------------

// Sintaxe do map:
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
//array.reduce(callback[, initialValue])

function positiveSum(arr){

    return arr.reduce((total , numero) => total + numero ,0); 
}
 
    console.log( " Deu : %c${positiveSum([2,4,10])}" , "color : red"  )



// -------------------------------------- reversed string ---------------------------------------------------------

//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
    array = Array.from(str)

    strInvertida = []

    array.map(

        function inverter(item){

            let tamanho = array.length + 1;

            for( i = tamanho ; i => tamanho ; i--){

                strInvertida.push(array[i])

            }

        }
    
    )

}

//-----------------------------------------------Numbers to string--------------------------------------------------------------
function numberToString(num) {
    var numero = num;
    let string0 = numero.toString()
    return string0
  }
console.log(numberToString(123))
console.log(typeof(numberToString(123)))
//-----------------------------------------------tirar os números-----------------------------------------------------------


function filter_list(l) {

    var listona = []

    filterarray = l.map(function filtrar(item){

        if(typeof(item) === "number" ){

        listona.push(item)

        }

    }
    )

    return(listona)
}

filter_list([2,4,5,6,"aaa"])

//-----------------------------------------------objetos ball desafio-----------------------------------------------------------

class Ball {
    constructor(ballType) {

        this.ballType = "regular";

    }
}

//--------------------------------------------------------Descending Order----------------------------------------------------
function descendingOrder(n){
    let desclist = []
    x = n.sort()
    for (i = n.length +1  ; i>= n.length ; i--){
        desclist.push(x[i])
    }
    console.log(desclist)
}

descendingOrder([2,4,24,234,1])

//----------------------------------------------------------isogram function -----------------------------------------------------//
//----------------------------------------------------------                   -----------------------------------------------------//
function isIsogram(str){ 
    var stset = new Set(str);
    console.log(stset)
    if(stset.lenght = str.lenght){ return true};
    {return false}
    
    }

console.log(isIsogram("ablueblue"))


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


//let lines = gets().split('\n');

//let month = lines.shift();

let months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July ",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December",

//TODO: Complete os espaços em branco com uma possível solução para o desafio

};

//console.log(months[month])

//--------------------------------------------------------------------------------//
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

//let lines2 = gets();

//TODO: Complete os espaços em branco com uma possível solução para o desafio

//let N = parseInt(lines2);
//for ( i=0 ; i<=N ; i++ ) {
//    if ( i<N          ) frase += frase     ;
 //   else frase += "!"     ;

//print(frase);



//--------------------------------------------------------------------------------//
//array.reduce(callbackFn, valor inicial)
  //const callbackFn = function(accumulator/prevValue  ,  valoratual ,    index, array ) { code}
    //const squareFunction = function(somatotal , valoratual){
      //let soma = somatotal + valoratual**2

//------------------------------------- ou -------------------------------------------//
/* const callback = (
    acumulador, 
    elementoAtual, 
    indexAtual, 
    arrayOriginal
) => {};' 
const valorInicial = XX;
const lista = []
const reducedValue = lista.reduce(
    callback(
        acumulador, 
        elementoAtual, 
        indexAtual, 
        arrayOriginal
    ), 
    valorInicial
)

*/

//------------------------------------------ somar os quadrados de um array --------------------------------------//
function squareSum(serie){
    let sum;
    let atual;
    const somarsquare = (sum , atual) => sum += atual**2;
    const ovalor = 0;
    const reducelist = serie.reduce(somarsquare);
    return sum;

}

console.log(squareSum([2,4,6]))


//--------------------------------------------------------------------------------//-


function squareSum2(serie2){
    const reducelist = serie2.reduce((acumulador, atual2) => acumulador += atual2**2, 0);                                                                 
    return reducelist;                                                 

}

console.log(squareSum2([2,4,6]))


// ------------------------------------------------------------------------------------------ //
function solution(number){
    var N = number;
    var list = []
    var sum
    for(var i = 1 ; i <= N ; i++){
      list.push(i);
    }
    function filtro(sum , item){
      if ( item%3 === 0){
        sum += item;
      }
      else if (item%5 === 0){
        sum += item;
      }
    }
    

    var filtrar = list.reduce(filtro)
    console.log(sum)
}

solution([10])