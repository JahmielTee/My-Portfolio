const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});