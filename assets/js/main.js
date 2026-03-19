/* Global AI Spain — JS principal */
(function () {
  'use strict';

  // ── Formulario de contacto con validación ──────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    const charCountEl = document.getElementById('charCount');
    const messageField = document.getElementById('contactMessage');

    // Contador de caracteres
    if (messageField && charCountEl) {
      messageField.addEventListener('input', () => {
        charCountEl.textContent = messageField.value.length;
      });
    }

    // Validación Bootstrap + envío Formspree
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          form.classList.remove('was-validated');
          charCountEl && (charCountEl.textContent = '0');
          showAlert('formSuccess');
        } else {
          showAlert('formError');
        }
      } catch (_err) {
        showAlert('formError');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  function showAlert(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('d-none');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => el.classList.add('d-none'), 8000);
  }

  // ── Navbar: marcar activo correctamente en SPA-like navs ──────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // ── Scroll suave para anclas internas ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Lazy loading de imágenes ──────────────────────────────────────
  if ('IntersectionObserver' in window) {
    const imgs = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(img => observer.observe(img));
  }

}());
