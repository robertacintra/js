function palindromo() {
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");

    for(var i = 0; i < palavra.length; i++){
        if(palavra[i] !== palavra[palavra.length -1 -i]){
            resposta.innerText = "Não é :6"
        }
        else {
            resposta.innerText = "É sim! :9"
        }
    }
}