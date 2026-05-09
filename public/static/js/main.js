// =========================================================
// Intracoastal Installs — Premium Interactions Engine
// World-class micro-interactions, scroll choreography,
// parallax, magnetic effects, smooth counters.
// $60K website feel. No shortcuts.
// =========================================================
(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // 1. SCROLL REVEAL — Cinematic intersection observer
  // ═══════════════════════════════════════════════════════════
  function initScrollReveal() {
    var selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .stagger-children';
    var elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
      elements.forEach(function (el) { observer.observe(el); });
    } else {
      elements.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // ═══════════════════════════════════════════════════════════
  // 2. HEADER — Scroll-aware with shrink + shadow
  // ═══════════════════════════════════════════════════════════
  function initHeader() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    var scrollThreshold = 12;
    var ticking = false;
    var lastScrollY = 0;
    var headerHeight = 64;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var currentY = window.scrollY;
          
          // Add/remove scrolled class
          if (currentY > scrollThreshold) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }

          // Hide on scroll down, show on scroll up (after 300px)
          if (currentY > 300) {
            if (currentY > lastScrollY + 5) {
              header.style.transform = 'translateY(-100%)';
            } else if (currentY < lastScrollY - 5) {
              header.style.transform = 'translateY(0)';
            }
          } else {
            header.style.transform = 'translateY(0)';
          }

          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Add transition for hide/show
    header.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s, box-shadow 0.25s, border-color 0.25s';
  }

  // ═══════════════════════════════════════════════════════════
  // 3. MOBILE NAV — Smooth toggle with body lock
  // ═══════════════════════════════════════════════════════════
  function initMobileNav() {
    var navToggle = document.getElementById('navToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (!navToggle || !mobileNav) return;

    navToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 4. PARALLAX — Subtle depth on scroll
  // ═══════════════════════════════════════════════════════════
  function initParallax() {
    var parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Skip on mobile

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          parallaxElements.forEach(function (el) {
            var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
            var rect = el.getBoundingClientRect();
            var center = rect.top + rect.height / 2;
            var viewCenter = window.innerHeight / 2;
            var offset = (center - viewCenter) * speed;
            el.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ═══════════════════════════════════════════════════════════
  // 5. SMOOTH COUNTER — Animated number counting
  // ═══════════════════════════════════════════════════════════
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing: ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  // ═══════════════════════════════════════════════════════════
  // 6. MAGNETIC BUTTONS — Subtle cursor attraction
  // ═══════════════════════════════════════════════════════════
  function initMagneticButtons() {
    if (window.innerWidth < 1024) return; // Desktop only
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var magnets = document.querySelectorAll('[data-magnetic]');
    magnets.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        var strength = parseFloat(btn.getAttribute('data-magnetic')) || 0.3;
        btn.style.transform = 'translate(' + (x * strength) + 'px, ' + (y * strength) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(function () { btn.style.transition = ''; }, 400);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 7. IMAGE TILT — Premium 3D hover on cards
  // ═══════════════════════════════════════════════════════════
  function initImageTilt() {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var tiltX = (0.5 - y) * 8;
        var tiltY = (x - 0.5) * 8;
        el.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) scale(1.02)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
      });
      el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 8. PROGRESS INDICATOR — Reading progress bar
  // ═══════════════════════════════════════════════════════════
  function initProgressBar() {
    var bar = document.getElementById('readingProgress');
    if (!bar) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          var progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
          bar.style.width = progress + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ═══════════════════════════════════════════════════════════
  // 9. CONTACT FORM — Enhanced with validation + animations
  // ═══════════════════════════════════════════════════════════
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    var submitBtn = form.querySelector('button[type="submit"]');
    var successEl = document.getElementById('formSuccess');
    var errorEl = document.getElementById('formError');

    form.addEventListener('submit', function (e) {
      var bot = form.querySelector('input[name="botcheck"]');
      if (bot && bot.value) { e.preventDefault(); return; }
      e.preventDefault();

      if (submitBtn.disabled) return;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Sending…';
      if (errorEl) errorEl.style.display = 'none';

      var formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (resp) { return resp.json().then(function (j) { return { ok: resp.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok && res.body && res.body.success !== false) {
          form.style.opacity = '0';
          form.style.transform = 'translateY(-10px)';
          setTimeout(function () {
            form.style.display = 'none';
            if (successEl) {
              successEl.style.display = 'block';
              successEl.style.opacity = '0';
              successEl.style.transform = 'translateY(10px)';
              requestAnimationFrame(function () {
                successEl.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                successEl.style.opacity = '1';
                successEl.style.transform = 'translateY(0)';
              });
            }
          }, 300);
        } else {
          throw new Error('failed');
        }
      })
      .catch(function () {
        if (errorEl) errorEl.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
    });

    // Pre-fill from URL params
    try {
      var params = new URLSearchParams(window.location.search);
      var svc = params.get('service');
      if (svc) {
        var sel = form.querySelector('select[name="project_type"]');
        if (sel) {
          for (var i = 0; i < sel.options.length; i++) {
            if (sel.options[i].value === svc) { sel.selectedIndex = i; break; }
          }
        }
      }
      var city = params.get('city');
      if (city) {
        var citySel = form.querySelector('select[name="city"]');
        if (citySel) {
          for (var j = 0; j < citySel.options.length; j++) {
            if (citySel.options[j].value === city) { citySel.selectedIndex = j; break; }
          }
        }
      }
    } catch (_) {}

    // Floating label effect
    form.querySelectorAll('input, textarea, select').forEach(function (input) {
      input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
      });
      input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
        if (this.value) this.parentElement.classList.add('filled');
        else this.parentElement.classList.remove('filled');
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 10. LAZY MAP — IntersectionObserver for Google Maps
  // ═══════════════════════════════════════════════════════════
  function initLazyMaps() {
    var mapWrappers = document.querySelectorAll('[data-map-embed]');
    if (!mapWrappers.length) return;

    if ('IntersectionObserver' in window) {
      var mapIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var w = entry.target;
            var src = w.getAttribute('data-map-src');
            var title = w.getAttribute('data-map-title') || 'Map';
            if (!src || w.dataset.loaded === '1') return;
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', src);
            iframe.setAttribute('loading', 'lazy');
            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
            iframe.setAttribute('title', title);
            iframe.style.cssText = 'width:100%;height:100%;border:0;';
            w.appendChild(iframe);
            w.dataset.loaded = '1';
            mapIo.unobserve(w);
          }
        });
      }, { rootMargin: '300px' });
      mapWrappers.forEach(function (w) { mapIo.observe(w); });
    }
  }

  // ═══════════════════════════════════════════════════════════
  // 11. CURSOR GLOW — Premium light-follow on hero
  // ═══════════════════════════════════════════════════════════
  function initCursorGlow() {
    var glowElements = document.querySelectorAll('[data-cursor-glow]');
    if (!glowElements.length) return;
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    glowElements.forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        el.style.setProperty('--glow-x', x + 'px');
        el.style.setProperty('--glow-y', y + 'px');
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 12. FOOTER YEAR
  // ═══════════════════════════════════════════════════════════
  function initFooterYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ═══════════════════════════════════════════════════════════
  // 13. SMOOTH ANCHOR SCROLL
  // ═══════════════════════════════════════════════════════════
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var offset = 80; // Header height
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 14. IMAGE ERROR HANDLER — Graceful degradation
  // ═══════════════════════════════════════════════════════════
  function initImageFallbacks() {
    document.querySelectorAll('img[data-fallback]').forEach(function (img) {
      img.addEventListener('error', function () {
        var fallback = img.getAttribute('data-fallback');
        if (fallback === 'gradient') {
          var parent = img.parentElement;
          parent.style.background = 'linear-gradient(135deg, var(--c-atlantic), var(--c-navy))';
          img.style.display = 'none';
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 15. GALLERY FILTER — Smooth filtering with FLIP
  // ═══════════════════════════════════════════════════════════
  function initGalleryFilter() {
    var buttons = document.querySelectorAll('[data-filter]');
    var grid = document.getElementById('galleryGrid');
    if (!buttons.length || !grid) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Update active state
        buttons.forEach(function (b) { b.classList.remove('bg-navy', 'text-white', 'border-navy'); b.classList.add('bg-white'); });
        btn.classList.add('bg-navy', 'text-white', 'border-navy');
        btn.classList.remove('bg-white');

        var filter = btn.getAttribute('data-filter');
        var items = grid.querySelectorAll('[data-category]');
        
        items.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.display = '';
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(function () { item.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // 16. TYPED TEXT — Typewriter effect for hero
  // ═══════════════════════════════════════════════════════════
  function initTypedText() {
    var typedElements = document.querySelectorAll('[data-typed]');
    if (!typedElements.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      typedElements.forEach(function (el) { el.style.opacity = '1'; });
      return;
    }

    typedElements.forEach(function (el) {
      var text = el.getAttribute('data-typed');
      var speed = parseInt(el.getAttribute('data-typed-speed')) || 40;
      el.textContent = '';
      el.style.opacity = '1';
      
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          typeText(el, text, speed);
          observer.unobserve(el);
        }
      }, { threshold: 0.5 });
      observer.observe(el);
    });
  }

  function typeText(el, text, speed) {
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // ═══════════════════════════════════════════════════════════
  // 17. LIGHTBOX — Full-screen image viewer for gallery
  // ═══════════════════════════════════════════════════════════
  function initLightbox() {
    var triggers = document.querySelectorAll('[data-lightbox-src]');
    if (!triggers.length) return;

    // Create lightbox overlay
    var overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Image lightbox');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(11,37,69,0.95);display:none;align-items:center;justify-content:center;flex-direction:column;padding:2rem;opacity:0;transition:opacity 0.3s ease;';
    
    var img = document.createElement('img');
    img.style.cssText = 'max-width:90vw;max-height:80vh;object-fit:contain;border-radius:12px;box-shadow:0 25px 50px rgba(0,0,0,0.4);transition:transform 0.3s ease;';
    
    var caption = document.createElement('p');
    caption.style.cssText = 'margin-top:1rem;color:rgba(255,255,255,0.7);font-size:0.875rem;text-align:center;font-family:Inter,sans-serif;';
    
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    closeBtn.setAttribute('aria-label', 'Close lightbox');
    closeBtn.style.cssText = 'position:absolute;top:1.5rem;right:1.5rem;color:white;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;';
    
    overlay.appendChild(closeBtn);
    overlay.appendChild(img);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    function openLightbox(src, alt, cap) {
      img.src = src;
      img.alt = alt || '';
      caption.textContent = cap || '';
      overlay.style.display = 'flex';
      requestAnimationFrame(function () { overlay.style.opacity = '1'; });
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.style.opacity = '0';
      setTimeout(function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }

    triggers.forEach(function (el) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function () {
        var src = el.getAttribute('data-lightbox-src');
        var alt = el.getAttribute('data-lightbox-alt');
        var cap = el.getAttribute('data-lightbox-caption');
        openLightbox(src, alt, cap);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.style.display === 'flex') closeLightbox();
    });
  }

  // ═══════════════════════════════════════════════════════════
  // INIT — Run everything on DOM ready
  // ═══════════════════════════════════════════════════════════
  function init() {
    initFooterYear();
    initHeader();
    initMobileNav();
    initScrollReveal();
    initParallax();
    initCounters();
    initMagneticButtons();
    initImageTilt();
    initProgressBar();
    initContactForm();
    initLazyMaps();
    initCursorGlow();
    initSmoothScroll();
    initImageFallbacks();
    initGalleryFilter();
    initTypedText();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
