const sections = document.querySelectorAll('.section, .photo-break, .temple, .friends');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {threshold: 0.12});
sections.forEach(section => observer.observe(section));
