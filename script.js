// Password Check
function checkPassword() {
    var pass = document.getElementById("password").value;

    if (pass === "bobi123") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        document.getElementById("bgMusic").play();

        // Start Romantic Effects
        typeEffect();
        setInterval(createHeart, 500);

    } else {
        alert("Wrong Password 😜 Try Again!");
    }
}


// Surprise Show
function showSurprise() {
    document.getElementById("surpriseBox").style.display = "block";
    typeWriter();

    setTimeout(function () {
        document.getElementById("lovePopup").style.transform =
            "translate(-50%, -50%) scale(1)";
    }, 4000);

}


// Code Style Typing
var codeText = `if (life == hard) {
    I will always stand beside you;
}

while (heart.beats()) {
    I will love you forever ❤️;
}`;

var i = 0;

function typeWriter() {
    if (i < codeText.length) {
        document.getElementById("typingText").innerHTML += codeText.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}


// Romantic Text Typing
const romanticText = "You are the most beautiful part of my life ❤️";
let index = 0;

function typeEffect() {
    if (index < romanticText.length) {
        document.getElementById("typing-text").innerHTML += romanticText.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}


// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


// Countdown Timer
var birthday = new Date("Feb 18, 2026 00:00:00").getTime();

setInterval(function () {
    var now = new Date().getTime();
    var distance = birthday - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        "Countdown: " + hours + "h "
        + minutes + "m "
        + seconds + "s ";
}, 1000);
