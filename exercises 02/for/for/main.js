//let a = parseInt(prompt('digite um numero menor que 10'));

/*for (let a = 0; a <= 10; a++) {
    //console.log(a)
    document.write(a+" - "+"<br />");
}
for (let b = 10; b >= 0; b--) {
    //console.log(b)
    document.write(b+"<br />");
}*/

for (let a = 0, b = 10; a <= 10, b >= 0; a++, b--) {
    document.write(a+" - "+b+"<br />");
}


/*
O grande pulo do gato desse exercício é usar duas variáveis: a e b

A variável a inicia do 0 e vai sendo incrementada até chegar em 10.
Ao passo que b inicia de 10 e vai sendo decrementada em uma unidade até chegar a 0.

Na inicialização, criamos as duas variáveis e inicializamos ela corretamente.
Depois, temos dois testes: a deve ser menor ou igual a 10, e b deve ser maior ou igual a 0.
Por fim, demos um incremento (a++) e um decremento (b--).

Agora, dentro do laço FOR, é só imprimir linha por linha.
Primeiro o valor de a, depois um traço, o valor de b e uma quebra de linha do HTML
*/