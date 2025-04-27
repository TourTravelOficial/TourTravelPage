  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  // También cerramos el menú si hacen click en el overlay
  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('open');
    overlay.classList.remove('active');
  });