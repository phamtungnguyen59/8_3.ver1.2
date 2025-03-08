function createFlower() {
    const flower = document.createElement("img");
    flower.src = "/img/heart.png"; // Đảm bảo đường dẫn đúng
    flower.classList.add("flower");

    let size = Math.random() * 20 + 20; // Kích thước hoa từ 20px - 40px
    let maxX = window.innerWidth - size; // Giới hạn X hợp lý
    let posX = Math.random() * maxX;

    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.position = "absolute";
    flower.style.left = `${posX}px`;
    flower.style.top = "-50px"; // Bắt đầu từ trên màn hình

    document.body.appendChild(flower);

    gsap.to(flower, {
        duration: Math.random() * 4 + 4, // Rơi trong khoảng 4 - 8 giây
        y: window.innerHeight + 50,
        x: "+=" + (Math.random() * 100 - 50), // Tạo hiệu ứng gió mạnh hơn
        rotation: Math.random() * 180 - 90, // Xoay nhẹ tạo sự tự nhiên
        opacity: 0,
        ease: "power1.out",
        onComplete: () => flower.remove(), // Xóa khỏi DOM sau khi hoàn thành
    });
}

// Thay đổi thời gian tạo hoa để không quá đều đặn
setInterval(createFlower, Math.random() * 500 + 800);
