let check = document.getElementById("check");
const result = document.getElementById("result");

check.addEventListener("click", () => {
    let year = document.getElementById("year").value;
    // 	Leap Years are any year that can be exactly divided by 4 (such as 2020, 2024, 2028, etc)
    // not	but if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
    //  yes	except if it can be exactly divided by 400, then it is (such as 2000, 2400)
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result.innerHTML = `${year} est une année bissextile.`;
    }
    else {
        result.innerHTML = `${year} n'est pas une année bissextile.`;
    }

});