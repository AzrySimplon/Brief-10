////version 2 (vitesse de déplacement personnalisée) 
// (v1 avait une seule vitesse, et trop grande car basée sur le 'nombre' de clic, énorme quand on laisse appuyé.)

const moveSize = 10; // le perso se déplace de 10px à chaque fois
let moveCount = 0;
let player = document.getElementById('player');
let compteur = document.getElementById('compteurN');

//direction : garde en mémoire la direction actuelle
//isMoving : indique si le personnage est en train de bouger (pas besoin de spammer)
let direction = null;
let isMoving = false;

//quand isMoving est false :
// recup la direction
// lancement movePlayer()
// demarre boucle setInterval() toutes les 90ms pour continuer à bouger tant que la touche est enfoncée (keydown)
//Le if (!isMoving) empeche que plusieurs setInterval se déclenchent en même temps
document.addEventListener('keydown', (event) => {
    if (!isMoving) {
        if (event.code === 'ArrowUp') direction = 'up';
        else if (event.code === 'ArrowDown') direction = 'down';
        else if (event.code === 'ArrowLeft') direction = 'left';
        else if (event.code === 'ArrowRight') direction = 'right';

        if (direction) {
            isMoving = true;
            movePlayer();
            movementLoop = setInterval(movePlayer, 90); // toutes les 90ms
        }
    }
});

//quand la touche est relachée on stoppe le setInterval (avec clearInterval()) et on réinitialise isMoving et direction
document.addEventListener('keyup', () => {
    clearInterval(movementLoop);
    isMoving = false;
    direction = null;
});

function movePlayer() {
    //compter les moves pour alterner les frames
    //moveCount++; -> mis dans les if else pour stopper le compteur contre les murs

    //selon direction : 
    // On utilise player.offsetTop et player.offsetLeft pour connaître la position actuelle du personnage
    // On modifie directement player.style.top et player.style.left pour bouger l’élément
    if (direction === 'up' && player.offsetTop + moveSize >= 15) {
        moveCount++;
        player.style.top = (player.offsetTop - moveSize) + 'px';
    } else if (direction === 'down' && player.offsetTop + moveSize <= 530) {
        moveCount++;
        player.style.top = (player.offsetTop + moveSize) + 'px';
    } else if (direction === 'left' && player.offsetLeft + moveSize >= 10) {
        moveCount++;
        player.style.left = (player.offsetLeft - moveSize) + 'px';
    } else if (direction === 'right' && player.offsetLeft + moveSize <= 550) {
        moveCount++;
        player.style.left = (player.offsetLeft + moveSize) + 'px';
    }

    compteur.innerHTML = moveCount; //compteur de pas
    
    // met quel frame afficher et alterne entre 1 et 4 pour l’animation (4 frames par direction) et /2 pour ralentir, 
    // +1 car frames commencent à 1 et pas 0 (walk_direction1)
    const frame = Math.floor(moveCount / 2 % 4) + 1;

    //On change player.style.backgroundImage en fonction de la direction et du moveCount:
    //on change dynamiquement avec les nom des images (pour ce code : walk_up1.png, walk_up2.png, walk_down1.png etc)
    player.style.backgroundImage = `url('img/walk_${direction}${frame}.png')`;
}
