document.addEventListener("DOMContentLoaded", function () {
    function createFlower() {
        const flower = document.createElement("div");
        flower.innerHTML = "💯"; // Bạn có thể thay bằng hình ảnh hoa khác
        flower.style.position = "fixed";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = "-50px";
        flower.style.fontSize = Math.random() * 10 + 20 + "px";
        flower.style.opacity = Math.random();
        flower.style.transition = "top 5s linear, opacity 5s";
        document.body.appendChild(flower);

        setTimeout(() => {
            flower.style.top = window.innerHeight + "px";
            flower.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFlower, 500);
});
