var gifs = [
    `<img src="giphy.gif" alt="gif de gatinho">`,
    `<img src="cat1.gif" alt="gif de gatinho">`,
    `<img src="cat2.gif" alt="gif de gatinho">`,
    `<img src="cat3.gif" alt="gif de gatinho">`,
    `<img src="cat4.gif" alt="gif de gatinho">`,
];

function sortearGifs() {
    var random = Math.floor(Math.random() * 5);
    document.getElementById('ondeVaoOsGifs').innerHTML = gifs[random];
};