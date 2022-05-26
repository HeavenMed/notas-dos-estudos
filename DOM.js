document.getElementById("elemento1").innerHTML = "Texto1 teste";
// document será o objeto, getElementById() é o método e o innerHTML é a propriedade
// o método getElementById ~ The most common way to access an HTML element is to use the id of the element.
// a propriedade innerHTML serve para getting or replacing the content of HTML elements.
let x
x = document.getElementById("elemento2").innerHTML;
console.log(x)
// o innerHTML também pode atribuir o conteúdo de um parágrafo a uma variável
//----------------------------------------------------------------------------------------------------------//
document.getElementById("titulo").style.color = "blue"
// Com esse, temos o objeto document, o método que seleciona o ID getelementbyId e temos a propriedade style, que com muda
// o style do elemento selecionado, usando style.property , sendo property podendo ser CSS propriedades, como color
//----------------------------------------------------------------------------------------------------------//
//document.getElementById().attribute = ""


//----------------------------------------------------------------------------------------------------------//
//document.getElementById(id).onclick = function(){code}// serve para criar um evento ao clicar no elemento ID com uma função


document.getElementById("clicar").onclick = clicar();
function clicar(){
    
}

//----------------------------------------------------------------------------------------------------------//
// JavaScript Form Validation

//HTML form validation can be done by JavaScript.

//If a form field (fname) is empty, this function alerts a message, 
//and returns false, to prevent the form from being submitted

function validar() {
    let x = document.forms["form1"]["nomefoda"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

// Função para validar um input em um determinado range no html // 
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value; // pega o value do input com id Numb e atribui a
  // variável x
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text; // vai escrever o valor de text antes atribuído
  // e criar um parágrafo com id Demo com o texto text.
}


// Automatic HTML Form Validation
// HTML form validation can be performed automatically by the browser:

// If a form field (fname) is empty, 
// the 'required' attribute prevents this form from being submitted, see the example 3 in html


// ----------------------------------------------------------------------------------------------//
// HTML DOM - Changing CSS //
// Changing HTML Style
let corH3 = document.getElementById("h3")  //atribuindo o elemento com o getelement
function azul(){  // fzendo uma função que está listada em onclick no button no html
  corH3.style.color = "blue"   //  a mudança
}


// ----------------------------------------------------------------------------------------------//

var numbercontador = document.getElementById("numerocontador")
var countvar = 0

function updatedisplay(val){
  numbercontador.innerHTML = val;
}


function somar(){
  countvar++
  updatedisplay(countvar)

}

function subtrair(){
  countvar--
  updatedisplay(countvar)

}

//--------------------------------------------------------------------------------------------------//
// HTML DOM Animation 










function operation(item){
  separado = item.split(" ")
  var operatio
  var numeross = [0,1,2,3,4,5,6,7,8,9]
  for (i=0 ; i<= separado.length ; i++){
    if(separado[i] in numeross){
      number = Integer.parseInt(separado[i])
    }
    else{
      
    }
  }
}


operation("50 + 30 + 90")