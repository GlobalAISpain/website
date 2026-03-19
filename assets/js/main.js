// Global AI Spain - AgentCamp 2026
// Countdown, navbar scroll, workshops accordion, smooth scroll

document.addEventListener('DOMContentLoaded', function () {

  // ==================== COUNTDOWN ====================
  const eventDate = new Date('2026-02-28T08:00:00+01:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById('countdown-days').textContent = '00';
      document.getElementById('countdown-hours').textContent = '00';
      document.getElementById('countdown-minutes').textContent = '00';
      document.getElementById('countdown-seconds').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
    document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==================== NAVBAR SCROLL ====================
  const header = document.getElementById('header');
  const logoWhite = document.getElementById('logo-white');
  const logoDark = document.getElementById('logo-dark');

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      if (logoWhite) logoWhite.classList.add('hidden');
      if (logoDark) logoDark.classList.remove('hidden');
    } else {
      header.classList.remove('scrolled');
      if (logoWhite) logoWhite.classList.remove('hidden');
      if (logoDark) logoDark.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ==================== MOBILE MENU ====================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileToggle.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        var icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ==================== WORKSHOP ACCORDION ====================
  document.querySelectorAll('.workshop-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var item = this.closest('.workshop-item');
      var content = item.querySelector('.workshop-content');
      var isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.workshop-item').forEach(function (ws) {
        ws.classList.remove('active');
        ws.querySelector('.workshop-content').classList.add('hidden');
        ws.querySelector('.workshop-toggle').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        content.classList.remove('hidden');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

});
