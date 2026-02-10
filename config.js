// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Arun",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/degw0auyr/video/upload/v1770713100/poove_kadhal_pookum_kxirdr.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const clearApp = () => app.innerHTML = "";

    const button = (text, handler) => {
        const btn = document.createElement("button");
        btn.className = "val-btn";
        btn.textContent = text;
        btn.onclick = handler;
        return btn;
    };

    // ================= QUESTION 1 =================
    function questionOne() {
        clearApp();

        const q = document.createElement("h1");
        q.textContent = CONFIG.questions.first.text;

        const yes = button(CONFIG.questions.first.yesBtn, questionTwo);
        const no = button(CONFIG.questions.first.noBtn, () => {});

        no.onmouseenter = () =>
            no.textContent = CONFIG.questions.first.secretAnswer;
        no.onmouseleave = () =>
            no.textContent = CONFIG.questions.first.noBtn;

        app.append(q, yes, no);
    }

    // ================= QUESTION 2 =================
    function questionTwo() {
        clearApp();

        const q = document.createElement("h1");
        q.textContent = CONFIG.questions.second.text;

        const value = document.createElement("div");
        value.className = "meter-value";
        value.textContent = "0%";

        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = 0;
        slider.max = 6000;

        const msg = document.createElement("p");

        slider.oninput = () => {
            const v = slider.value;
            value.textContent = `${v}%`;

            if (v > 5000) msg.textContent = CONFIG.loveMessages.extreme;
            else if (v > 1000) msg.textContent = CONFIG.loveMessages.high;
            else if (v > 100) msg.textContent = CONFIG.loveMessages.normal;
            else msg.textContent = "";
        };

        const next = button(CONFIG.questions.second.nextBtn, questionThree);

        app.append(q, value, slider, msg, next);
    }

    // ================= QUESTION 3 =================
    function questionThree() {
        clearApp();

        const q = document.createElement("h1");
        q.textContent = CONFIG.questions.third.text;

        const yes = button(CONFIG.questions.third.yesBtn, () => {
            celebration();
            setTimeout(proposalAnimation, 900);
        });

        const no = button(CONFIG.questions.third.noBtn, () => {
            no.style.position = "absolute";
            no.style.left = Math.random() * 80 + "vw";
            no.style.top = Math.random() * 80 + "vh";
        });

        app.append(q, yes, no);
    }

    // ================= CELEBRATION =================
    function celebration() {
        clearApp();

        const title = document.createElement("h1");
        title.textContent = CONFIG.celebration.title;

        const msg = document.createElement("p");
        msg.textContent = CONFIG.celebration.message;

        const box = document.createElement("div");
        box.className = "emoji-box";

        CONFIG.celebration.emojis.split("").forEach(e => {
            const span = document.createElement("span");
            span.textContent = e;
            box.appendChild(span);
        });

        app.append(title, msg, box);
    }

    // ================= FIREWORKS =================
    function launchFireworks(count = 120) {
        for (let i = 0; i < count; i++) {
            const fw = document.createElement("div");
            fw.className = "firework";

            fw.style.left = Math.random() * 100 + "vw";
            fw.style.top = Math.random() * 100 + "vh";
            fw.style.background = `hsl(${Math.random() * 360},100%,70%)`;

            fw.style.setProperty("--x", (Math.random() - 0.5) * 400 + "px");
            fw.style.setProperty("--y", (Math.random() - 0.5) * 400 + "px");

            document.body.appendChild(fw);
            setTimeout(() => fw.remove(), 1200);
        }
    }

    // ================= PROPOSAL =================
    function proposalAnimation() {
        launchFireworks(150);

        const overlay = document.createElement("div");
        overlay.className = "proposal-overlay";

        const box = document.createElement("div");
        box.className = "proposal-box";

        box.innerHTML = `
            <div class="ring">💍</div>
            <h1>Will you marry me, ${CONFIG.valentineName}?</h1>
            <p>Forever starts with us ❤️</p>
        `;

        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    // ================= START =================
    questionOne();
});

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
