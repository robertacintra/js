var elogios = [
    "Diva sem defeito",
    "Fada sensata",
    "Não é github, mas é gatinho",
    "Máquina de vencer",
    "Universal",
    "Ícone incompreendido",
    "Responsivo #SQN",
    "Maravilindo",
    "Cristalzinho perfeito",
    "Maravigold",
    "Sucesso",
    "Bombonzinho",
    "Um pão",
    "Uma deusa, uma louca, uma feiticeira",
    "demais",
    "mágico",
];

//contar coisas dentro de um array

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}