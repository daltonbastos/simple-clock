const darkmodeInput = document.getElementById('dark-mode-input');

darkmodeInput.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});