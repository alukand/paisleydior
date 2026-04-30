(() => {
  'use strict';

  // ---------- Header scroll effect ----------
  const header = document.getElementById('header');
  const SCROLL_THRESHOLD = 60;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile navigation ----------
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Intersection Observer — animate elements on scroll ----------
  const animateElements = document.querySelectorAll('[data-animate], .service-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animateElements.forEach(el => observer.observe(el));
  } else {
    animateElements.forEach(el => el.classList.add('visible'));
  }

  // ---------- Testimonials Carousel ----------
  const track = document.getElementById('testimonialTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  let current = 0;
  const total = cards.length;

  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  let autoplay = setInterval(() => goTo(current + 1), 6000);
  [prevBtn, nextBtn, ...dotsContainer.querySelectorAll('.dot')].forEach(el => {
    el.addEventListener('click', () => {
      clearInterval(autoplay);
      autoplay = setInterval(() => goTo(current + 1), 6000);
    });
  });

  // ---------- Touch swipe for carousel ----------
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
      clearInterval(autoplay);
      autoplay = setInterval(() => goTo(current + 1), 6000);
    }
  }, { passive: true });

  // ---------- Services Accordion ----------
  const allItems = document.querySelectorAll('.accordion-item');

  function closeItem(item) {
    const body = item.querySelector('.accordion-body');
    const btn = item.querySelector('.accordion-header');
    body.style.maxHeight = body.scrollHeight + 'px';
    requestAnimationFrame(() => {
      body.style.maxHeight = '0px';
    });
    item.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function openItem(item) {
    const body = item.querySelector('.accordion-body');
    const btn = item.querySelector('.accordion-header');
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    body.style.maxHeight = body.scrollHeight + 'px';
    const onEnd = () => {
      if (item.classList.contains('open')) {
        body.style.maxHeight = 'none';
      }
      body.removeEventListener('transitionend', onEnd);
    };
    body.addEventListener('transitionend', onEnd);
  }

  allItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      allItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          closeItem(other);
        }
      });

      if (isOpen) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });
  });

  // Initialize: set max-height on the default-open item so it's visible
  allItems.forEach(item => {
    if (item.classList.contains('open')) {
      const body = item.querySelector('.accordion-body');
      body.style.maxHeight = 'none';
    }
  });

  // ---------- Contact form (placeholder) ----------
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sent! We\'ll be in touch.';
    btn.disabled = true;
    btn.style.background = 'var(--champagne-dark)';
    setTimeout(() => {
      form.reset();
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  });

})();
