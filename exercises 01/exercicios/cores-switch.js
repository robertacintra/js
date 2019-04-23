/*
Usando a estrutura SWITCH, crie uma função que transforme uma core passadas por parâmetro em formato 'string', para o seu equivalente hexadecimal. Crie casos para quatro cores.
Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/
function transformaCor(cor){
    switch(cor){
        case 'yellow':
            console.log("O hexadecimal de " + cor + " é #FFFF00");
            break;
        case 'red':
            console.log("O hexadecimal de " + cor + " é #FF0000");
            break;
        case 'green':
            console.log("O hexadecimal de " + cor + " é #008000");
            break;
        case 'blue':
            console.log("O hexadecimal de " + cor + " é #0000FF");
            break;
        default:
            console.log("Não temos o equivalente hexadecimal para " + cor);
    }
}