export function initStrategie() {
  const navItems = document.querySelectorAll('.strategy-nav-item');
  const sections = document.querySelectorAll('.strategy-section');

  if (navItems.length === 0 || sections.length === 0) return;

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetSectionId = item.getAttribute('data-section');
      if (!targetSectionId) return;

      // Update Nav active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update Section active state
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetSectionId) {
          section.classList.add('active');
        }
      });

      // Scroll content area back to top on switch
      const contentArea = document.querySelector('.strategy-content');
      if (contentArea) {
        contentArea.scrollTop = 0;
      }
      
      // On mobile, scroll down to the content area
      if (window.innerWidth <= 1024) {
        const contentOffset = document.querySelector('.strategy-content')?.offsetTop || 0;
        window.scrollTo({
          top: contentOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}
