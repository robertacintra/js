
let botao = document.getElementById('calcular');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let resultado = document.getElementById('resultado');

botao.addEventListener("click", function(){
    let media = (parseFloat(n1.value) + parseFloat(n2.value))/2;
    console.log(media);

    if (media >= 5 && media < 10.0) {
        resultado.innerHTML = "Aprovado.";
    } 
    else if (media == 10) {
        resultado.innerHTML = "Aprovado com distinção!";
    } 
    else {
        resultado.innerHTML = "Reprovado."
    }

})

/* function media(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let media = (nota1 + nota2)/2 ;

    if(media >= 7)
    if(media==10)
    alert("Uau! Aprovado com distinção");
    else
    alert("Parabéns, aprovado! Media "+media);
    else
    alert("Reprovado!")

}*/