const text = CONFIG.quote;
const typingElement = document.querySelector(".typing-text");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let index = 0;
let yesScale = 1;
let noScale = 1;

// Typing Animation
function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 70);
    }
}

typeText();

// Play music after first click (browser rule)
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

// YES button grows
yesBtn.addEventListener("mouseover", () => {
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
});

// NO button shrinks
noBtn.addEventListener("mouseover", () => {
    if (noScale > 0.3) {
        noScale -= 0.1;
        noBtn.style.transform = `scale(${noScale})`;
    }
});

// Navigate to second page
yesBtn.addEventListener("click", () => {
    window.location.href = CONFIG.nextPage;
});
