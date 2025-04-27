  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.3, // 30% visible para activar
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target); // Deja de observar después de animar
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

