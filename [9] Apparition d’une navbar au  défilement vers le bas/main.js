const navbar = document.getElementById('navbar');


window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        navbar.style.top = 0;
    }
    else {
        navbar.style.top = '-50px';
    }
}