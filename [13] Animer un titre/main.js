const title = document.getElementById('title');
const salut = ['Salut !', 'Hello !', '¡Hola!', 'Ciao !', 'Hallo !', 'Привет', 'こんにちは', '안녕하세요', 'Merhaba !'];
let count = 0;

// On change le titre toutes les 3 secondes
function changeTitle() {
    count++;
    if (count >= salut.length) {
        count = 0;
    }
    title.innerHTML = salut[count];
}
setInterval(changeTitle, 3000);