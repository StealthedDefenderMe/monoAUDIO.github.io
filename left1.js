let verticalleftclose = document.querySelector(".verticalleft");
let openfade = document.querySelector(".leftmax");
let blur1 = document.querySelector(".centerdiv");

function closeover() {
    verticalleftclose.style.display = "none";
    openfade.style.opacity = "0";
    blur1.style.filter = "blur(0px)";
}

function openover() {
    verticalleftclose.style.display = "block";
    openfade.style.opacity = "1";
    blur1.style.filter = "blur(5px)";
}