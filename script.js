const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const playMusicButton = document.getElementById('playMusicButton');
const valentineSong = document.getElementById('valentineSong');
const messageBox = document.getElementById('messageBox');  // This is the new message box element

// List of messages to show when "No" is clicked
const messages = [
  "Please?",
  "Give me a chance!",
  "Are you sure?",
  "Think again!",
  "You might regret this!",
  "One last chance!",
  "Pretty please?",
  "Don’t break my heart 💔"
];

// Function to show a random message
function showRandomMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageBox.textContent = randomMessage;
  messageBox.style.display = 'block'; // Show the message box
}

let noButtonClicks = 0;

noButton.addEventListener('click', () => {
  noButtonClicks++;

  // Show a random message each time "No" is clicked
  showRandomMessage();
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

  // Redirect to another page after a small delay (so user can see the confetti)
  setTimeout(() => {
    window.location.href = 'thankyou.html';  // Change 'thankyou.html' to the desired page URL
  }, 3000);  // 3-second delay, adjust as necessary
});

playMusicButton.addEventListener('click', () => {
  // Play the valentine song when playMusicButton is clicked
  valentineSong.play();
  
  // Hide the playMusicButton once clicked
  playMusicButton.style.display = 'none';
});
