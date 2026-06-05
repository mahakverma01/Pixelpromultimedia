document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const heroImage = document.getElementById('heroImage');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // Helper: close mobile menu
  function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (navbar) navbar.classList.remove('menu-active');
  }

  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navbar.classList.toggle('menu-active');
    });
  }

  // Close menu when a nav link is clicked
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (navbar && navbar.classList.contains('menu-active')) {
      if (!navbar.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on window resize (if resized beyond mobile)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Dynamic 3D effect on mousemove for hero image
  document.addEventListener('mousemove', (e) => {
    if (!heroImage) return;
    
    // Check if device is likely a touch device / mobile
    if (window.innerWidth <= 1024) return;
    
    // Calculate rotation based on mouse position relative to the center of the screen
    const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
    
    // Combining the default rotate with mouse movement
    // The base rotation is rotateY(-12deg) rotateX(4deg)
    heroImage.style.transform = `rotateY(${-12 + xAxis}deg) rotateX(${4 + yAxis}deg)`;
  });
  
  // Reset on mouse leave window
  document.addEventListener('mouseleave', () => {
    if (!heroImage) return;
    if (window.innerWidth <= 1024) return;
    heroImage.style.transform = `rotateY(-12deg) rotateX(4deg)`;
  });
});
