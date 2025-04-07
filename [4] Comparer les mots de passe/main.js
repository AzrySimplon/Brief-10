let password = document.getElementById("password");
let checkPassword = document.getElementById("check-password");
let message = document.getElementById("message");
message.style.color = "red";

//check if the 2 passwords are the same
checkPassword.addEventListener("keyup", () => {
    if (password.value !== checkPassword.value) {
        message.innerText = "The password entered don't match";
    }
    else {
        message.innerText = null;
    }
}) 