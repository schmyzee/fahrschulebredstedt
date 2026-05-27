export function initContact() {
  const form = document.getElementById('prequal-contact-form');
  const submitText = document.getElementById('submit-btn-text');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Implement Rule 5: Interactive loading states
      if (submitText) {
        submitText.innerText = 'Wird gesendet...';
        submitText.disabled = true;
        submitText.style.opacity = '0.7';
      }

      // Simulate network request
      setTimeout(() => {
        // Change form view to success state
        form.innerHTML = `
          <div class="success-state" style="text-align: center; padding: 2rem 0; display: flex; flex-direction: column; gap: 1.5rem; align-items: center; justify-content: center; animation: fadeIn 0.5s ease forwards;">
            <div class="success-icon-wrapper" style="width: 4.5rem; height: 4.5rem; border-radius: 50%; background: rgba(245, 197, 24, 0.1); border: 2px solid var(--accent); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 2.25rem; font-weight: bold; line-height: 1;">✓</div>
            <h3 style="font-family: var(--font-title); font-size: 1.75rem; font-weight: 700; color: var(--text-main);">Vielen Dank für deine Anfrage!</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; max-width: 35ch;">
              Wir haben deine Wünsche erhalten und melden uns innerhalb der nächsten 24 Stunden über deinen bevorzugten Kontaktweg bei dir.
            </p>
          </div>
        `;
      }, 1500);
    });
  }
}
