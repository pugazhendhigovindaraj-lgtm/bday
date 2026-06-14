const overlay = document.getElementById("overlay");

/* ==========================
GIFT POPUP
========================== */

function openGift() {
overlay.style.display = "flex";
document.body.style.overflow = "hidden";
}

function closeGift() {
overlay.style.display = "none";
document.body.style.overflow = "auto";
}

/* ==========================
COUNTER ANIMATION
========================== */

function animateCounter(id, target, suffix = "") {

```
const element = document.getElementById(id);

if (!element) return;

let current = 0;

const increment = target / 100;

const timer = setInterval(() => {

    current += increment;

    if (current >= target) {
        element.innerHTML = target + suffix;
        clearInterval(timer);
    } else {
        element.innerHTML =
            Math.floor(current) + suffix;
    }

}, 20);
```

}

let counterStarted = false;

function startCounters() {

```
if (counterStarted) return;

counterStarted = true;

animateCounter("count1", 365, "+");
animateCounter("count2", 999, "+");
animateCounter("count3", 100, "%");
```

}

/* ==========================
COUNTER OBSERVER
========================== */

const statsSection =
document.querySelector(".stats");

if (statsSection) {

```
const statsObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            startCounters();
        }

    });

}, {
    threshold: 0.4
});

statsObserver.observe(statsSection);
```

}

/* ==========================
SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".glass-card,.card,.timeline-item,.stat-card,.gallery-grid img"
);

const revealObserver =
new IntersectionObserver((entries) => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }

});
```

}, {
threshold: 0.15
});

revealElements.forEach(element => {

```
element.classList.add("hidden");

revealObserver.observe(element);
```

});

/* ==========================
FLOATING HEARTS
========================== */

function createHeart() {

```
const heart =
document.createElement("div");

heart.innerHTML = "💚";

heart.classList.add("heart");

heart.style.left =
Math.random() * 100 + "vw";

heart.style.fontSize =
Math.random() * 15 + 15 + "px";

document.body.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 5000);
```

}

setInterval(createHeart, 2000);

/* ==========================
HERO GLOW
========================== */

const card =
document.querySelector(".glass-card");

if (card) {

document.addEventListener("mousemove", (e) => {
    const x =
    (e.clientX / window.innerWidth) * 20;

    const y =
    (e.clientY / window.innerHeight) * 20;

    card.style.boxShadow =
    `${x}px ${y}px 50px rgba(0,230,118,.15)`;

});


}

console.log("Happy Birthday Sunitha 💚");
