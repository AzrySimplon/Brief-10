const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window object
window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        navbar.style.top = 0;
    }
    else {
        navbar.style.top = '-50px';
    }
}