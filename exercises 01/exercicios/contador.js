// Diferença entre FOR e WHILE

var contagem = 0;

while(contagem < 10) {
    contagem++;
    console.log(contagem);
}

for(var i = 0; i < 10; i++){
    contagem++;
    console.log(contagem);
}

//O QUE ESTÁ DENTRO, nada mais é do que um contador.

var numeros = 10

for (var contador = 0; contador <3; contador++) {
    console.log("Entrou valendo: " + numeros);
    numeros++
    console.log("Saiu valendo:" + numeros);
}

console.log("Saiu do 'for'")

/* Entrou valendo: 10
Saiu valendo:11
Entrou valendo: 11
Saiu valendo:12
Entrou valendo: 12
Saiu valendo:13
Saiu do 'for' */