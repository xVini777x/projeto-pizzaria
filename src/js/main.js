var menuBtn = document.getElementById("menuBtn");
var menuMobile = document.getElementById("menuMobile");

menuMobile.style.right = "-450px";
menuBtn.onclick = function () {
    if (menuMobile.style.right === "-450px") {
        menuMobile.style.right = "0";
    } else {
        menuMobile.style.right = "-450px";
    }
};