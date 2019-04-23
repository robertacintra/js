/* 
Crie uma função indique se o número passado por parâmetro é primo ou não. 
Lembrando: todo número primo é apenas divisível por 1 e por ele mesmo.
*/

/*
function primo(n) {
    var divisor = 2;
    while (n> divisor) {
        if (n % divisor == 0) {
            return false;
        }
        else {
            divisor++
        }
    return true;
    }
}

function primo(x) {
    for (var i = 2; i < x; i++)
        if (x % i === 0) return false;
    return true;
}

function primo (x) {
    for (var contador = 2; contador < x; contador++)
        if (x % 2 === 0) {
            return false;
        }
} */

//solução final:

function primo (x) {
    for (var i = 1; i < x; i++) {
        if (x % i === 0) {
            return true
        };
    }
    return false;
}

/* PRIMO

condições
cont

numero

var n, cont
while (n>cont) {
    if (n%cont)
}

ou seja: 

var n, cont, soma;
n = 27;
cont = n;
soma = 0;

while (cont>=1) {
    if (n % cont == 0){
        soma = soma + cont;
    }
    cont --;
}

if (soma == n+1) {
    console.log(n + " é um número primo!")
}
else {
    console.log("Não é um número primo!")
}

*/