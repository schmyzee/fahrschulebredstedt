export function initClasses() {
  const tabButtons = document.querySelectorAll('.class-tab-btn');
  const grids = document.querySelectorAll('.classes-category-grid');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      // Deactivate all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Deactivate all grids
      grids.forEach(grid => grid.classList.remove('active'));

      // Activate selected button
      button.classList.add('active');

      // Activate selected grid
      const targetGrid = document.getElementById(`category-${category}`);
      if (targetGrid) {
        targetGrid.classList.add('active');
      }
    });
  });
}
