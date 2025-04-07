var logo = document.getElementById('logo');
var value = 0;

// Function to animate the logo
function animLogo() {
    if (value < 240) {
        value++;
        logo.style.width = value + 'px';
        logo.style.height = value + 'px';
        logo.style.fontSize = value / 10 + 'px';
    }
}

// Set an interval to call the animLogo function every 10 milliseconds
setInterval(animLogo, 10);