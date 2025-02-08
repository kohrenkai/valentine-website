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
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert('Yay! You made me the happiest person ever! ❤️');
});

playMusicButton.addEventListener('click', () => {
    valentineSong.play();
    playMusicButton.style.display = 'none';
});