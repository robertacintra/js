/*
Crie um objeto que simule uma conta corrente, com as seguintes chaves: nome, agencia, conta e saldo.
Depois, crie funções para depositar dinheiro, remover dinheiro, consultar saldo da conta e mostrar todos os dados da conta;
*/

var conta = {
    nome: "Nubank",
    agencia: 0001,
    conta: 1010,
    saldo: 1
}

/* parâmetros - vão dentro dos parênteses */

var depositarDinheiros = function(valor){
    //var valor;
    //conta.saldo = conta.saldo + valor;
    conta.saldo += valor;
    return conta.saldo;
}

var removerDinheiros = function(valor){
    //var valor;
    //conta.saldo = conta.saldo - valor;
    conta.saldo -= valor;
    return conta.saldo;
}

var consultarSaldo = function(){
    console.log("SALDO: " + conta.saldo)
    //return "SALDO: " + conta.saldo
}

var mostrarTudo = function(){
    console.log("Nome:" + conta.nome);
    console.log("Agência:" + conta.agencia);
    console.log("Conta:" + conta.conta);
}