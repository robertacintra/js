/*
Crie uma função que receba três notas como parâmetro e retorne a média, 
indicando se a pessoa passou ou se foi reprovada. 
*/

/* media > 5 = aprovada 
media < 5 = reprovada */

function media(a,b,c) {
    var a;
    var b;
    var c;
    var resultado = (a + b + c) / 3
    if (resultado > 5) {
        console.log("Aprovado!")
    }
    else {
        console.log("Não aprovado!")
    }
}

/* 

function media(a,b,c) {
    var a, b, c;
    var resultado = (a + b + c) / 3
    if (resultado > 5) {
        console.log("Aprovado!")
    }
    else {
        console.log("Não aprovado!")
    }
}

*/