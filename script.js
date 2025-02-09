const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const valentineSong = document.getElementById('valentineSong');

// Add interactive hearts with explosion effect
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', () => {
    // Trigger confetti on heart click
    confetti();

    // Apply the explode animation to the clicked heart
    heart.classList.add('explode');

    // Optionally, remove the heart after explosion
    setTimeout(() => {
      heart.remove();
    }, 300); // Wait for the animation to finish before removing the heart
  });
});

// Handle "No" button clicks
let noButtonClicks = 0;
noButton.addEventListener('click', () => {
  noButtonClicks++;
  const opacity = 1 - (noButtonClicks * 0.2);
  noButton.style.opacity = opacity;

  if (opacity <= 0) {
    noButton.style.display = 'none';
  }
});

// Handle "Yes" button clicks
yesButton.addEventListener('click', () => {
  // Trigger confetti on clicking the "Yes" button
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Show the alert message
  alert('Yay! You made me the happiest person ever! ❤️');

  // Play the Valentine's song
  valentineSong.play();
});
 'none';
  }
});

yesButton.addEventListener('click', () => {
  // Trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Show the alert
  alert('Yay! You made me the happiest person ever! ❤️');

  // Try to play the music
  valentineSong.play().catch(() => {
    // If autoplay is blocked, show a message or button
    const playMusicButton = document.createElement('button');
    playMusicButton.id = 'playMusicButton';
    playMusicButton.innerText = 'Play Music 🎵';
    document.body.appendChild(playMusicButton);

    playMusicButton.addEventListener('click', () => {
      valentineSong.play();
      playMusicButton.style.display = 'none';
    });
  });
});
