const myBtn = document.getElementById('myBtn');
const cntClic = document.getElementById('cntClic');
let nbClic = 0;

// show number of click in the cntClic div
myBtn.addEventListener("click", () => {
    nbClic++;
    cntClic.innerText = `You clicked ${nbClic} times`;
})