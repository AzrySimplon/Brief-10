const balanceIcon = document.querySelector('#balanceIcon');
balanceIcon.innerHTML = "&#xf24e;";

// On change l'icône toutes les 4 secondes
function balanceScale() {
    setTimeout(() => { balanceIcon.innerHTML = "&#xf515;"; }, 1000);
    setTimeout(() => { balanceIcon.innerHTML = "&#xf24e;"; }, 2000);
    setTimeout(() => { balanceIcon.innerHTML = "&#xf516;"; }, 3000);
    setTimeout(() => { balanceIcon.innerHTML = "&#xf24e;"; }, 4000);
}


balanceScale();
setInterval(balanceScale, 4000); 