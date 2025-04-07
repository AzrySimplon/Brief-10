const button = document.getElementById("btn");

//creates a snackbar notification on button clicked and disappears after 3 seconds
button.addEventListener("click", () => {
    const snackbar = document.getElementById("snackbar");
    snackbar.classList.add("show");

    setTimeout(() => {
        snackbar.classList.remove("show");
    }, 3000);
})