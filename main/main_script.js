const openOverlayButton = document.getElementById('open-menu');
const overlayBackround = document.getElementById('menu-background');
const overlay = document.getElementById('menu')
const pepperoni = document.getElementById('open-pepperoni');
const margherita = document.getElementById('open-margherita');
const four_seasons = document.getElementById('open-four_seasons')
const hawaiian = document.getElementById('open-hawaiian');

function toggleOverlay() {
    overlay.classList.toggle('active');
    overlayBackround.style.display = 'block';
}

overlayBackround.addEventListener('click', (event) => {
    if (event.target === overlayBackround) {
        overlayBackround.style.display = 'none';
        overlay.classList.remove('active')
}
});

pepperoni.addEventListener('click', () => {
    window.location.href = '../pizzas/Pepperoni.html';
});

margherita.addEventListener('click', () => {
    window.location.href = '../pizzas/Margherita.html'
})

four_seasons.addEventListener('click', () => {
    window.location.href = '../pizzas/Four_seasons.html'
})

hawaiian.addEventListener('click', () => {
    window.location.href = '../pizzas/Hawaiian.html'
})
