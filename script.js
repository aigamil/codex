(function() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    toggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
    });
})();
