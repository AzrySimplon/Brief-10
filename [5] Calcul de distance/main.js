var checking = document.getElementById('check-distance');
var btn = document.getElementById('btn');

let villes = ["Bordeaux", "Nantes", "Lyon", "Marseille",
    "Monptellier", "Paris", "Rennes", "Strasbourg"];
let distance = [950, 850, 450, 800, 1000, 460, 840, 0];

//listener for the button
// when the button is clicked, we will check the distance and display the cities that are reachable
btn.addEventListener('click', () => {
    const answer = checking.value;
    let indexes = [];
    distance.map((dis) => {
        if (dis <= answer) {
            indexes.push(distance.indexOf(dis));
        }
    });
    console.log("Vous pouvez atteindre: ")
    indexes.map((i) => {
        console.log(villes[i]);
    });
});



