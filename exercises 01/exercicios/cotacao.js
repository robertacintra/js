// Crie uma função para converter bitcoin em reais, dada uma quantia e uma cotação.
var conversao = function (){
    var bitcoin = prompt("Quantos bitcoins você quer converter?");
    var cotacao = prompt("Quantos reais vale 1 bitcoin hoje?")

    var resultado = bitcoin * cotacao;
    alert("Você teria " + resultado)
}
