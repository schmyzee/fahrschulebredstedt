export function initSteps() {
  const stepButtons = document.querySelectorAll('.step-menu-item');
  const stepPanels = document.querySelectorAll('.step-content-panel');

  stepButtons.forEach(button => {
    button.addEventListener('click', () => {
      const stepNum = button.getAttribute('data-step');
      
      // Deactivate all buttons
      stepButtons.forEach(btn => btn.classList.remove('active'));
      // Deactivate all panels
      stepPanels.forEach(panel => panel.classList.remove('active'));
      
      // Activate selected button
      button.classList.add('active');
      
      // Activate selected panel
      const targetPanel = document.getElementById(`step-panel-${stepNum}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}
