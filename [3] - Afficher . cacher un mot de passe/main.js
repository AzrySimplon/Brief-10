const input = document.getElementById('input');
const display = document.getElementById('display');
const checkbox = document.getElementById('checkbox');

//change type for text or password depending on the current state
checkbox.addEventListener("click", () => {
    if (input.getAttribute("type") == "text") {
        input.setAttribute("type", "password")
    }
    else {
        input.setAttribute("type", "text")
    }
})