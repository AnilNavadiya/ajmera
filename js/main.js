/* ==========================================================================
   AJMERA TRENDS - Main JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initStickyHeader();
  initMobileDrawer();
  initScrollTop();
  initModals();
  initCounters();
  initFaqAccordion();
  initLightbox();
});

/* Sticky Header on Scroll */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Mobile Offcanvas Drawer */
function initMobileDrawer() {
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close');

  if (!drawer) return;

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      drawer.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      drawer.classList.remove('active');
    });
  }

  // Close when clicking outside drawer
  document.addEventListener('click', function (e) {
    if (drawer.classList.contains('active') && !drawer.contains(e.target) && !hamburger?.contains(e.target)) {
      drawer.classList.remove('active');
    }
  });
}

/* Scroll To Top Button */
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Modals Handler */
function initModals() {
  // Trigger buttons
  document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(button => {
    button.addEventListener('click', function () {
      closeAllModals();
    });
  });

  // Click on backdrop to close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        closeAllModals();
      }
    });
  });

  // ESC key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllModals();
      closeLightbox();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = 'auto';
}

/* Video Modal Trigger */
window.openVideoModal = function (videoUrl) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    iframe.src = videoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeVideoModal = function () {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    iframe.src = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

/* Animated Stats Counter */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (counters.length === 0) return;

  let animated = false;

  function countUp() {
    const section = document.querySelector('.stats-section');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !animated) {
      animated = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count).toLocaleString() + suffix;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target.toLocaleString() + suffix;
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', countUp);
  countUp();
}

/* FAQ Accordion */
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const parentItem = this.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle clicked
      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });

  // Filter FAQ Search
  const faqSearch = document.getElementById('faqSearchInput');
  if (faqSearch) {
    faqSearch.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      const faqItems = document.querySelectorAll('.accordion-item');

      faqItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

/* Lightbox Modal */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.lightbox-close');

  if (!lightbox) return;

  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('data-lightbox-src') || this.querySelector('img')?.src;
      const caption = this.getAttribute('data-lightbox-title') || this.querySelector('h4')?.innerText || '';

      if (imgSrc && lightboxImg) {
        lightboxImg.src = imgSrc;
        if (lightboxCaption) lightboxCaption.innerText = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
