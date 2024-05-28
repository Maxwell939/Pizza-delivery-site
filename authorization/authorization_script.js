const openOverlayButton = document.getElementById('open-menu');
const overlayBackround = document.getElementById('menu-background');
const overlay = document.getElementById('menu')

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

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = '../main/main.html';
});