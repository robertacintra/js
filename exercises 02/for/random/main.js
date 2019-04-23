let frases = [
    `“Create the highest, grandest vision possible for your life, because you become what you believe”`,
    `“When you can’t find the sunshine, be the sunshine”`,
    `“The grass is greener where you water it”`,
    `“Wherever life plants you, bloom with grace”`,
    `“So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow”`,
    `“Little by little, day by day, what is mean for you WILL find its way”`,
    `“Don’t forget you’re human. It’s okay to have a meltdown. Just don’t unpack and live there. Cry it out. Then refocus on where you’re headed”`,
    `“An arrow can only be shot by pulling it backward. When life is dragging your back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming”`,
    `“A great attitude becomes a grea tday which becomes a great month which becomes a great year which becomes a great life”`,
    `“I am in charge of how I feel and today I am choosing happiness”`
];

function random(){
    let random = Math.floor(Math.random() * 9);
    document.getElementById('fraseAleatoria').innerHTML = frases[random];
}