const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const bar = document.getElementById("bar");

// When the user scrolls the page, execute myFunction
window.onscroll = function () { scrollIndicator() };

// on scroll, the width of the bar is set to the percentage of the page scrolled
function scrollIndicator() {
    const scroll = document.documentElement.scrollTop;
    const percentage = scroll / height * 100;
    bar.style.width = percentage + "%";
}