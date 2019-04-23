function exibir(){
    let mes = parseInt(document.getElementById("month").value);

    switch(mes){
        case 1:
            resultado.innerHTML = "Janeiro";
            break;
        case 2:
            resultado.innerHTML = "Fevereiro";
            break;
        case 3:
            resultado.innerHTML = "Março";
            break;
        case 4:
            resultado.innerHTML = "Abril";
            break;
        case 5:
            resultado.innerHTML = "Maio";
            break;
        case 6:
            resultado.innerHTML = "Junho";
            break;
        case 7:
            resultado.innerHTML = "Julho";
            break;
        case 8:
            resultado.innerHTML = "Agosto";
            break;
        case 9:
            resultado.innerHTML = "Setembro";
            break;
        case 10:
            resultado.innerHTML = "Outubro";
            break;
        case 11:
            resultado.innerHTML = "Novembro";
            break;
        case 12:
            resultado.innerHTML = "Dezembro";
            break;
        default:
            alert('Número inválido. Digite um número entre 1 e 12.');
    }
}
