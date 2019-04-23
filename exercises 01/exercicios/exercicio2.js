// Crie uma função com dois argumentos, que retorna a subtração deles.
function nome (){}

var sub = function (argumento1, argumento2){
    return argumento1 - argumento2;
}

// -->> function é um bloco de código que pode ser chamado.
// -->> return é o mesmo que enter

/* ?????????????????????????????????????????????? e se não nomearmos a function?

function (argumento1, argumento2){
    return argumento1 - argumento2;
} 

não consegue invocar a função, pois não NOMEOU a mesma. */


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.
var x = sub (50,5) + 5

// Qual o valor atualizado dessa variável?
50

// Declare uma nova variável, sem valor.
var roberta;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
function nome (x){
    var string = "O novo valor da minha variável agora é "
    return string + x
}

roberta = 15;

function chamaRoberta (){
    roberta = 15
    console.log("O novo valor da minha variável agora é " + roberta);
}

// Invoque a função criada acima.
chamaRoberta()

// Qual o retorno da função? (Use comentários de bloco).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/

function minhaFuncao(x, y, z){

    if(x > 10 && y > 100){
        console.log("Entrou no if!!!!")
    }
    else{
        console.log("Pulooooooooou o if")
    }
}

function agua(x){

    if(x == 10){
        console.log("Estou com sed!")
    }
    else{
        console.log("Estou de boas.")
    }
}



// Invoque a função criada acima, passando só dois números como argumento.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/

function tres(x,y,z){
    //Se somente um argumento for passado, retorne "Entrou no if".
    if(x && !y && !z){
        console.log("Entrou na primeira condição")
    }
    //Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    else if(x, y && !z){
        //return x + y
        console.log("Entrou na segunda condição")
        console.log(x + y)
    }
    //Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    else if(x,y,z){
        console.log("Entrou na terceira condição")
        console.log((x + y) / z)
    }
    //Se nenhum argumento for passado, retorne o valor booleano "false".
    else if(x && !y && !z){
    //x == undefined && y == undefined && z = undefined
        console.log("Entrou na quarta condição")
        console.log(false)
        //return false
    }
    //E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
    else{
        //return null
        console.log("Não entrou em nenhuma condição")
        console.log(null)
    }
}




// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.