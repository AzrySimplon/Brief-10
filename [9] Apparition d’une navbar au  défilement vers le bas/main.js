const navbar = document.getElementById('navbar');

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.style.top = 0;
    }
    else {
        navbar.style.top = '-50px';
    }
}