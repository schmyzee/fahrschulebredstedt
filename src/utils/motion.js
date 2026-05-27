export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after showing to prevent unnecessary calculations in production
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(element => {
    observer.observe(element);
  });
}
