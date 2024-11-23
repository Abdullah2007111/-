let balance = 0;
let cooldown = 7 * 60 * 60 * 1000; // 7 ساعات بالمللي ثانية
let lastClick = localStorage.getItem('lastClick') || 0;

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = cooldown - (now - lastClick);

    if (timeLeft > 0) {
        document.getElementById('timer').textContent = new Date(timeLeft).toISOString().substr(11, 8);
        document.getElementById('earnButton').disabled = true;
    } else {
        document.getElementById('timer').textContent = "Ready!";
        document.getElementById('earnButton').disabled = false;
    }
}

function earnTokens() {
    const now = new Date().getTime();
    if (now - lastClick >= cooldown) {
        balance += 5000;
        document.getElementById('balance').textContent = balance;
        lastClick = now;
        localStorage.setItem('lastClick', lastClick);
        updateTimer();
    }
}

setInterval(updateTimer, 1000);