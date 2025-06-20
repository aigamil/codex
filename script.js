(function () {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const yearSpan = document.getElementById('year');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
  }

  toggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    root.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      form.reset();
    });
  }
})();
