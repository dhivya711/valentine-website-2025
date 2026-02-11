// =====================================
// 💝 VALENTINE SINGLE JS FILE 💝
// =====================================

const VALENTINE_CONFIG = {
    pageTitle: "Will You Be My Valentine? 💝",

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/degw0auyr/video/upload/v1770713100/poove_kadhal_pookum_kxirdr.mp3",
        volume: 0.5
    },

    cloudinary: {
        imageUrl: "https://res.cloudinary.com/dncywqfpb/image/upload/v1738399057/love_image.jpg"
        // 🔁 replace with your Cloudinary image if needed
    },

    loveText: "Love you arun. ❤️"
};

document.title = VALENTINE_CONFIG.pageTitle;

// ---------- ELEMENTS ----------
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveTextEl = document.getElementById("loveText");
const loveImage = document.getElementById("loveImage");

// ---------- SET IMAGE ----------
loveImage.src = VALENTINE_CONFIG.cloudinary.imageUrl;

// ---------- PAGE FLOW ----------
yesBtn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "flex";

    fadeInMusic();
    animateImage();
    typeText(VALENTINE_CONFIG.loveText);
    startHearts();
});

// ---------- NO BUTTON RUN AWAY ----------
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
});

// ---------- MUSIC FADE-IN ----------
let music = null;

function fadeInMusic() {
    if (!VALENTINE_CONFIG.music.enabled || music) return;

    music = new Audio(VALENTINE_CONFIG.music.musicUrl);
    music.volume = 0;
    music.play().catch(() => {});

    let vol = 0;
    const target = VALENTINE_CONFIG.music.volume;

    const fade = setInterval(() => {
        vol += 0.02;
        music.volume = vol;
        if (vol >= target) clearInterval(fade);
    }, 100);
}

// ---------- IMAGE ANIMATION ----------
function animateImage() {
    loveImage.style.opacity = "0";
    loveImage.style.transform = "scale(0.5) translateY(40px)";

    setTimeout(() => {
        loveImage.style.transition = "all 0.8s ease-out";
        loveImage.style.opacity = "1";
        loveImage.style.transform = "scale(1) translateY(0)";
    }, 200);
}

// ---------- TYPING EFFECT ----------
function typeText(text) {
    loveTextEl.textContent = "";
    let i = 0;

    const typing = setInterval(() => {
        loveTextEl.textContent += text.charAt(i);
        i++;
        if (i === text.length) clearInterval(typing);
    }, 100);
}

// ---------- FLOATING HEARTS ----------
const hearts = ["❤️", "💖", "💝", "💗", "💓"];

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = Math.random() * 16 + 20 + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatUp 6s linear";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 400);
}

// ---------- HEART ANIMATION CSS ----------
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
