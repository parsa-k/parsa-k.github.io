// Floating hearts effect
function createFloatingHearts() {
    const floatingHeartsContainer = document.querySelector('.floating-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💓'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (5 + Math.random() * 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        floatingHeartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 13000);
    }, 500);
}

// Sparkle effect
function createSparkle(x, y) {
    const sparkleContainer = document.getElementById('sparkleContainer');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = x + 'px';
    sparkle.top = y + 'px';
    
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200 - 100;
    
    sparkle.style.setProperty('--x', randomX + 'px');
    sparkle.style.setProperty('--y', randomY + 'px');
    
    sparkleContainer.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Create sparkles on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        createSparkle(e.clientX, e.clientY);
    }
});

// Yes button click handler
document.getElementById('yesBtn').addEventListener('click', function() {
    const card = document.querySelector('.invitation-card');
    const successMessage = document.getElementById('successMessage');
    const buttons = document.querySelector('.button-container');
    
    // Hide buttons
    buttons.style.display = 'none';
    
    // Create explosion of sparkles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createSparkle(
                window.innerWidth / 2 + (Math.random() - 0.5) * 200,
                window.innerHeight / 2 + (Math.random() - 0.5) * 200
            );
        }, i * 30);
    }
    
    // Show success message
    setTimeout(() => {
        successMessage.style.display = 'block';
        // Add confetti-like effect
        createConfetti();
    }, 600);
});

// No button escape effect
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Also escape on mobile tap
document.getElementById('noBtn').addEventListener('touchstart', function(e) {
    e.preventDefault();
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Confetti effect
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ffd700'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '100';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize floating hearts on page load
window.addEventListener('load', createFloatingHearts);

// Create initial sparkles on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createSparkle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }
});
