var btn = document.getElementById('btn');
var result = document.getElementById('result');

//fonction qui return un nombre au hasard entre 0 et 1 (fonction de base Math.random)
function PileOuFace() {
    return Math.random();
}

//Si le résultat de PileOuface() est inférieur à 0,5 alors c’est pile, sinon c’est face.
btn.addEventListener('click', () => {
    const randomNumber = PileOuFace();
    console.log(randomNumber);
    if (randomNumber < 0.5) {
        result.innerHTML = "pile";
    } else {
        result.innerHTML = "face";
    }
});

