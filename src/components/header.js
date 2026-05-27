export function initHeader() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const overlayMenu = document.getElementById('mobile-menu-overlay');
  const links = document.querySelectorAll('.mobile-nav-link, .nav-link');

  if (toggleBtn && overlayMenu) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      overlayMenu.classList.toggle('active');
      
      // Prevent scrolling when mobile menu is open
      if (overlayMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  // Close mobile menu on link click and do smooth scroll
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Close overlay
      if (toggleBtn && overlayMenu) {
        toggleBtn.classList.remove('active');
        overlayMenu.classList.remove('active');
        document.body.style.overflow = '';
      }

      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId === '#' ? 'body' : targetId);
        if (targetElement) {
          const headerHeight = 72; // 4.5rem in px
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Track active section on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = 80;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      } else if (current === '' && link.getAttribute('href') === '#') {
        link.classList.add('active');
      }
    });
  });
}
