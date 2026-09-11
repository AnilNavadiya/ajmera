/* ==========================================================================
   AJMERA TRENDS - Forms & Lead Management Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initForms();
  createToastContainer();
});

function createToastContainer() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <i class="${type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}" style="color: ${type === 'success' ? '#27ae60' : '#e74c3c'}; margin-right: 8px;"></i>
      ${message}
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

function initForms() {
  // All forms with class .lead-form or form tags
  document.querySelectorAll('.lead-form, #heroLeadForm, #modalLeadForm, #contactLeadForm, #brochureLeadForm').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value?.trim();
      const phone = form.querySelector('[name="phone"]')?.value?.trim();
      const email = form.querySelector('[name="email"]')?.value?.trim();
      const state = form.querySelector('[name="state"]')?.value?.trim();
      const budget = form.querySelector('[name="budget"]')?.value?.trim();
      const message = form.querySelector('[name="message"]')?.value?.trim();

      // Basic Validation
      if (!name) {
        showToast('Please enter your full name.', 'error');
        return;
      }

      if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
        showToast('Please enter a valid 10-digit mobile number.', 'error');
        return;
      }

      // Submit feedback
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      }

      const leadData = {
        name,
        phone,
        email: email || 'N/A',
        state: state || 'N/A',
        budget: budget || 'N/A',
        message: message || 'N/A',
        timestamp: new Date().toISOString(),
        source: form.getAttribute('id') || 'General Form'
      };

      // Store in localStorage
      try {
        const storedLeads = JSON.parse(localStorage.getItem('ajmera_leads') || '[]');
        storedLeads.push(leadData);
        localStorage.setItem('ajmera_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        // Close any active modal
        if (typeof closeAllModals === 'function') {
          closeAllModals();
        }

        showToast(`Thank you, ${name}! Your franchise request has been received. Our senior franchise advisor will call you within 2 hours.`, 'success');

        // If brochure form, trigger simulated download
        if (form.id === 'brochureLeadForm') {
          setTimeout(() => {
            alert('Ajmera Trends Franchise Information Deck & Investment Brochure is downloading...');
          }, 1000);
        }
      }, 1000);
    });
  });
}
