let convert = document.getElementById("convert");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

//Calculate times from year and show it in the DOM
convert.addEventListener("click", () => {
    let numberOfYears = document.getElementById("numberOfYears").value;
    const days = numberOfYears * daysInYear;
    const hours = days * hoursInDay;
    const minutes = hours * minutesInHour;
    const seconds = minutes * secondsInMinute;

    document.getElementById("resultSeconds").innerText = `${seconds} seconds`;
    document.getElementById("resultMinutes").innerText = `${minutes} minutes`;
    document.getElementById("resultHours").innerText = `${hours} hours`;
    document.getElementById("resultDays").innerText = `${days} days`;
}); 