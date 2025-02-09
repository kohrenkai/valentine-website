const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const playMusicButton = document.getElementById('playMusicButton');
const valentineSong = document.getElementById('valentineSong');

let noButtonClicks = 0;

noButton.addEventListener('click', () => {
  noButtonClicks++;
  const opacity = 1 - (noButtonClicks * 0.2);
  noButton.style.opacity = opacity;

  if (opacity <= 0) {
    noButton.style.display = 'none';
  }
});

yesButton.addEventListener('click', () => {
  // Trigger confetti animation
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Play the valentine song when "Yes" is clicked
  valentineSong.play();

  // Show an alert to the user
  alert('Yay! You made me the happiest person ever! ❤️');
});

playMusicButton.addEventListener('click', () => {
  // Play the valentine song when playMusicButton is clicked
  valentineSong.play();
  
  // Hide the playMusicButton once clicked
  playMusicButton.style.display = 'none';
});
