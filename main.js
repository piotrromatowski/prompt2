let guzik = document.querySelector("button");
let par1 = document.getElementById("p1");
let par2 = document.getElementById("p2");



guzik.onclick = function () {
    par1.textContent='Liczba 1 to ' + prompt("Podaj 1 liczbę"), 
    par2.textContent='Liczba 2 to ' + prompt("Podaj 2 liczbę");
}




