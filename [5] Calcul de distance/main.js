//Objectif : Ecrire un programme qui, connaissant un ensemble de villes et la distance
//les séparant d'un point de référence, soit capable de dire, après que l'utilisateur ait
//saisi une distance parcourue depuis le point de référence, quelles villes auraient pu
//être atteintes.
var checking = document.getElementById('check-distance');
var btn = document.getElementById('btn');

let villes = ["Bordeaux", "Nantes", "Lyon", "Marseille", 
    "Monptellier","Paris","Rennes","Strasbourg"];
let distance = [950,850,450,800,1000,460,840,0];

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



    