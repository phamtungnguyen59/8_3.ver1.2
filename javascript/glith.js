const originalTitle = "Happy Womnan day";
const glitchChars = ["🥰", "💵", "😛", "🌻", "🌸", "🪻", "🌼", "🙆‍♀️", "🥀"];

function getRandomGlitchChar() {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
}

function createGlitchTitle() {
    let glitchedTitle = originalTitle.split("");
    for (let i = 0; i < glitchedTitle.length; i++) {
        if (Math.random() > 0.7) { // Xác suất thay đổi ký tự
            glitchedTitle[i] = getRandomGlitchChar();
        }
    }
    return glitchedTitle.join("");
}

function startGlitchEffect() {
    setInterval(() => {
        document.title = createGlitchTitle();
    }, 290); // Thay đổi tiêu đề mỗi 200ms
}

startGlitchEffect();
