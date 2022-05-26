var book = {
    "main-title" : "Freud" ,
    "sub-title" : "History" ,

    author : {
        name : "FreudX" ,
        lastname : "FreudY"

    }
}

var a = new Object()  // Cria um objeto vazio, {}
var b = new Array() // Cria um array vazio, []

// Todo objeto JavaScript tem um segundo objeto associado,
// esse segundo objeto é chamado de protótipo e o primeiro herda
// propriedades desse protótipo

// Todos os objetos herdam propriedades de um protótipo
// o Object.prototype, ele é um dos raros objetos
// que não tem protótipo

var o1 = Object.create({x:1 , y:2})// o1 herda as propriedades
// do objeto {x:1 , x:2}, sendo as propriedades x e y

// var o2 = Object.create() // este o2 não herda absolutamente
// nada, nem métodos nem propriedades, para criar
// um objeto vazio, você deve usar algo para herdar
// as propriedades de um objeto, no caso, o object.prototype

var o3 = Object.create(Object.prototype)
// o3 é um objeto vazio, {}, com métodos e propriedades
// de um objeto normal


// Consultando propriedades de um objeto

var titulo_principal = book["main-title"]; // a variável titulo_principal
// será atribuido ao valor da key "main-title"
console.log(titulo_principal) // return: Freud

var ultimonome_autor = book.author.lastname; 
console.log(ultimonome_autor) // return : FreudY

book.edition = 6 //
var editbook = book.edition; // adiciona uma propriedade ao objeto book
console.log(editbook);


// Herança --------------------------------------------- //
// usando inherit(), ele serve para herdar propriedades
// var p = inherit(z) -> nesse caso, p herda propriedades de z e Obj,Prot

function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create)                // If Object.create() is defined...
        return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                  // Define a dummy constructor function.
    f.prototype = p;                  // Set its prototype property to p.
    return new f();         
}



var oi = {}  // um objeto sem propriedades
oi.b = 1 // atribui propriedade b e valor dela 1 ao oi
var p = inherit(oi); // p herda propriedade b de oi
p.c = 2 // atribui propriedade c com valor 2 ao objeto p
var q = inherit(p); // herda todas as propriedades de p, c e b
q.d = 3 //
var s = inherit(q); // s receba propriedades d , c e b
console.log( s.b + s.d + s.c) /// return 6

//--------------------------------------------------------------
// para deletar propriedades, use delete objeto.propriedade
delete book["sub-title"];

// getter e setter : propriedades de acesso
// -> Quando o programa consulta o valor da propriedade de acesso o javascript chama o método
// getter, sem passar argumentos, o valor de retorno desse método será o valor da expressão
// de acesso à propriedade, o getter ele é apenas para LEITURA, ou seja, ao definir, não podemos
// sobreescrever
// -> Quando o programa configura o valor da propriedade de acesso o JS chama o método setter, responsávek
// por configurar o valor da propriedade, o return de setter é ignorado. o setter ele serve para gravar
// sintaxe : get nome(){} e set nome(value){}








//------------------------------------------------------------------------------------------------------------//
class Carro{
    constructor(modelo,marca,cor,ano){
        this.modelo = modelo,
        this.marca = marca,
        this.cor = cor,
        this.ano = ano
        this.comb = 0
    }

    info(){
        console.log("O modelo é :" + this.modelo),
        console.log("A marca  é :" + this.marca),
        console.log("A cor    é :" + this.cor),
        console.log("O ano    é :" + this.ano),
        console.log("O combustível  é :" + this.comb)
    }


    set definircomb(value){
        this.comb = value
    }
    // essa de cima é parar gravar o valor do combustível do carro



    get lercomb(){
        return this.comb
    }
    // essa é apenas para leitura, não pode se atribuir outro valor, mesmo se tentarmos.
}

let carro1 = new Carro("ModeloX" , "Volks" , "Vermelho" , "1994")
carro1.definircomb = 100
carro1.info()
console.log(carro1.lercomb)

// o extends fará que a class criada herde propriedades e métodos de uma classe parente
// nesse exemplo, a classe moto irá herdar , através de extends, propriedades de Carro
// para pegar essas propriedades, use o super() pois ele pegará 
// a propripedade da class parennt extendida.
class Moto extends Carro{
    constructor(vidro, velocidade, direção,modelo,marca,cor,ano){
        super(modelo, marca, cor, ano ),  // deve-se usar apenas um super(), e antes dos 'this', para nao causar erro de referência
        this.vidro = vidro,
        this.velocidade = velocidade,
        this.direção = direção
        

    }
}

let motox = new Moto("vidro1" , "180km/h" ,"n", "honda", "fiat","red" , "1934")
console.log(motox.cor)