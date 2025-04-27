  const fadeElements = document.querySelectorAll('.fade-up');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Opcional: para que solo lo haga una vez
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });
