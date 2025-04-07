////version 2 (vitesse de déplacement personnalisée) 
// (v1 avait une seule vitesse, et trop grande car basée sur le 'nombre' de clic, énorme quand on laisse appuyé. code du v1 en fin de page.)

const moveSize = 10; // le perso se déplace de 10px à chaque fois
let moveCount = 0;
let player = document.getElementById('player');

//direction : garde en mémoire la direction actuelle
//isMoving : indique si le personnage est en train de bouger (pas besoin de spammer)
let direction = null;
let isMoving = false;

document.addEventListener('keydown', (event) => {
    if (!isMoving) {
        if (event.code === 'ArrowUp') direction = 'up';
        else if (event.code === 'ArrowDown') direction = 'down';
        else if (event.code === 'ArrowLeft') direction = 'left';
        else if (event.code === 'ArrowRight') direction = 'right';

        if (direction) {
            isMoving = true;
            movePlayer();
            movementLoop = setInterval(movePlayer, 100); // toutes les 100ms
        }
    }
});
//quand isMoving est false :
// recup la direction
// lancement movePlayer()
// demarre boucle setInterval() toutes les 100ms pour continuer à bouger tant que la touche est enfoncée (keydown)
//Le if (!isMoving) empeche que plusieurs setInterval se déclenchent en même temps

document.addEventListener('keyup', () => {
    clearInterval(movementLoop);
    isMoving = false;
    direction = null;
});
//quand la touche est relachée on stoppe le setInterval (avec clearInterval()) et on réinitialise isMoving et direction

function movePlayer() {
    //compter les moves pour alterner les frames
    moveCount++;
    // met quel frame afficher et alterne entre 1 et 4 pour l’animation (4 frames par direction) et /2 pour ralentir, 
    // +1 car frames commencent à 1 et pas 0 (walk_direction1)
    const frame = Math.floor(moveCount / 2 % 4) + 1;

    //selon direction : 
    // On utilise player.offsetTop et player.offsetLeft pour connaître la position actuelle du personnage
    // On modifie directement player.style.top et player.style.left pour bouger l’élément
    if (direction === 'up') {
        player.style.top = (player.offsetTop - moveSize) + 'px';
    } else if (direction === 'down') {
        player.style.top = (player.offsetTop + moveSize) + 'px';
    } else if (direction === 'left') {
        player.style.left = (player.offsetLeft - moveSize) + 'px';
    } else if (direction === 'right') {
        player.style.left = (player.offsetLeft + moveSize) + 'px';
    }
    //On change player.style.backgroundImage en fonction de la direction et du moveCount:
    //on change dynamiquement avec les nom des images (pour ce code : walk_up1.png, walk_up2.png, walk_down1.png etc)
    player.style.backgroundImage = `url('img/walk_${direction}${frame}.png')`;
}


/** version originale (/v1) :
 * (mêmes variables et constantes au début; moveSize = 10; moveCount = 0; et player = document.getElementById('player');)
    
    document.addEventListener('keydown', (event) => {
    let direction = null;

    if (event.code === 'ArrowUp') {
        player.style.top = (player.offsetTop - moveSize) + 'px';
        direction = 'up';
    } else if (event.code === 'ArrowDown') {
        player.style.top = (player.offsetTop + moveSize) + 'px';
        direction = 'down';
    } else if (event.code === 'ArrowLeft') {
        player.style.left = (player.offsetLeft - moveSize) + 'px';
        direction = 'left';
    } else if (event.code === 'ArrowRight') {
        player.style.left = (player.offsetLeft + moveSize) + 'px';
        direction = 'right';
    }

    if (direction) {
        moveCount++;

        // alterne entre 1 et 4 pour l’animation (4frames par direction)
        const frame = (moveCount % 4) + 1;

        //on change dynamiquement le backgroundImage avec les nom des images (pour ce code : walk_up1.png, walk_up2.png, walk_down1.png etc)
        player.style.backgroundImage = `url('img/walk_${direction}${frame}.png')`;
    }
});
**/

