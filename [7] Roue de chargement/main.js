let loading = document.getElementById("loadingAnimation");
let content = document.getElementById("displayContent");

// Affiche l'animation de chargement pendant 3 secondes avant d'afficher le contenu
window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
        content.style.display = "block";
    }, "3000");
});