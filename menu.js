// Mobile Menu Toggle
const menuToggleBtn = document.querySelector('#menu-toggle-btn');
const mobileMenu = document.querySelector('#mobileMenuList');
const menuIcon = document.querySelector('#menu-icon');
const menuText = document.querySelector('#menuText');
const body = document.body;

// Toggle menu open/close
menuToggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open');

  // Toggle between menu and close icon
  if (mobileMenu.classList.contains('active')) {
    menuIcon.src = 'NaviconExit.png';
    menuText.textContent = 'Exit';
  } else {
    menuIcon.src = 'Navicon.png';
    menuText.textContent = 'Menu';
  }
});

// Close menu when a link is clicked (on mobile only)
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only close menu on mobile devices
    if (window.innerWidth < 768) {
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
      menuIcon.src = 'Navicon.png';
      menuText.textContent = 'Menu';
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
    menuIcon.src = 'Navicon.png';
    menuText.textContent = 'Menu';
  }
});

