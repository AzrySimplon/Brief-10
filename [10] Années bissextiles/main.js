let check = document.getElementById("check");
const result = document.getElementById("result");

// Add an event listener to the button to check if the year is a leap year
check.addEventListener("click", () => {
    let year = document.getElementById("year").value;
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result.innerHTML = `${year} est une année bissextile.`;
    }
    else {
        result.innerHTML = `${year} n'est pas une année bissextile.`;
    }

});