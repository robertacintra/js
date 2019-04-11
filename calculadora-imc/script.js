function calculoIMC(){
    var peso = document.getElementById("peso").value;
    //js... armazena uma variável na id peso, e nessa variável, pegue um valor.
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = (peso / (altura * altura));
    var text;
    var gif;
    var cssclass;

    if (resultado < 18) {
        text = "Uma deusa! 📻";
        gif = `<img src="https://media.giphy.com/media/aaVPCB4v81oTS/giphy.gif" alt="Naruto surpreso e encantando com a sua beleza">`;
        cssclass = "linha1";
    }
    else if (resultado >= 18 && resultado < 25) {
        text = "Uma louca! 🎙️";
        gif = `<img src="https://66.media.tumblr.com/8fea841dd1cb5e5f16bc90422ba1e47f/tumblr_inline_p4i0b8djQ51u544cj_500.gif" alt="Sasuke e Naruto crianças muito felizes por você">`;
        cssclass = "linha2";
    }
    else if (resultado >= 25 && resultado < 30) {
        text = "Uma feiticeira! 🎻";
        gif = `<img src="https://media.giphy.com/media/teYmAZLHAdC2Q/giphy.gif" alt="Sasuke sorrindo de lado porque você é incrível">`;
        cssclass = "linha3";
    }
    else if (resultado >=30 && resultado < 40) {
        text = "Ela é demais! 🎺";
        gif = `<img src="https://media.giphy.com/media/8MyXEVgue4ucw/giphy.gif" alt="Naruto sorrindo bastante porque você o faz feliz">`;
        cssclass = "linha4";
    }
    else {
        text = "Meu deus ela é demais! 🎶";
        gif = `<img src="https://media.giphy.com/media/qgvwNftxbBjLG/giphy.gif" alt="Sasuke e Naruto prometendo serem tão incríveis quanto você">`;
        cssclass = "linha5";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}

/*console.log(peso / (altura * altura))*/

