/* Creating the read-only reference to the values below. */
const circle = document.getElementsByClassName('circle')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')
var len = circle.length;

/* Adding functionality for the colors to cycle through while its on or when its turned on. */
const on = function () {
    for (var i = 0; i < len; i++) {
        circle[i].removeAttribute("style");
        circle[i].style.animationPlayState = "running";
        circle[i].style.WebkitAnimationPlayState = "running";
    }
}

/* Turning off the colors on the bulbs and shutting down the loop while giving the cirlces a background color when turned off. */
const off = function () {
    title.style.animation = "none";

    for (var i = 0; i < len; i++) {
        circle[i].style.animation = "none";
        circle[i].style.background = "#727272";
        circle[i].style.border = "2px solid black";
    }
}

/* Adding functionality to either increase or decrease the speed at which the colors glow. */
function convert() {
    var speed = document.getElementById('quantity').value;
    for (var i = 0; i < len; i++) {
        circle[i].style.animationDuration = speed + "s";
    }
}

/* When "On" & "Off" buttons are clicked, it will either shut off the lights or turn on the lights. */
play.addEventListener('click', on);
stop.addEventListener('click', off);
