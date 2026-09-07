// =========================================================
// BYRCON — base.js (compartido por TODAS las páginas)
// Cargar SIEMPRE antes del JS propio de cada página.
// =========================================================

// Menú móvil
const nav = document.getElementById('primaryNav');
const toggle = document.getElementById('menuToggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Revelado genérico de secciones al hacer scroll (clase .reveal)
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// Contadores animados de la franja de cifras
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatNumber(value, useDots) {
  return useDots ? Math.round(value).toLocaleString('es-EC') : Math.round(value).toString();
}

function animateStat(el) {
  const target = parseFloat(el.dataset.target || '0');
  const suffix = el.dataset.suffix || '';
  const useDots = el.dataset.format === '1';

  if (prefersReducedMotion) {
    el.textContent = formatNumber(target, useDots) + suffix;
    return;
  }

  el.textContent = formatNumber(0, useDots) + suffix;
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = formatNumber(target * eased, useDots) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll('.stat-num');
if (statEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statEls.forEach(el => observer.observe(el));
}

// Carrusel de aliados estratégicos (tira continua, 1 logo por punto, reutilizado en Servicios y Nosotros)
const partnersSlider = document.getElementById('partnersSlider');
if (partnersSlider) {
  const pStrip = document.getElementById('partnersStrip');
  const pItems = pStrip.querySelectorAll('.partners-item');
  const pDotsWrap = document.getElementById('partnersDots');
  const pTotalReal = 11; // logos reales; los últimos 3 items del strip son copias para el loop
  let pCurrent = 0;
  let pTimer = null;

  for (let i = 0; i < pTotalReal; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'partners-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Ver aliado ${i + 1} de ${pTotalReal}`);
    dot.addEventListener('click', () => pGoTo(i));
    pDotsWrap.appendChild(dot);
  }
  const pDots = pDotsWrap.querySelectorAll('.partners-dot');

  function pStepWidth() {
    if (pItems.length < 2) return 0;
    return pItems[1].offsetLeft - pItems[0].offsetLeft;
  }

  function pRender() {
    pStrip.style.transform = `translateX(${-pCurrent * pStepWidth()}px)`;
  }

  function pGoTo(index) {
    pDots[pCurrent].classList.remove('is-active');
    pCurrent = (index + pTotalReal) % pTotalReal;
    pDots[pCurrent].classList.add('is-active');
    pRender();
    pRestartAutoplay();
  }

  function pRestartAutoplay() {
    clearInterval(pTimer);
    pTimer = setInterval(() => pGoTo(pCurrent + 1), 3500);
  }

  window.addEventListener('resize', pRender);

  partnersSlider.addEventListener('mouseenter', () => clearInterval(pTimer));
  partnersSlider.addEventListener('mouseleave', pRestartAutoplay);

  // Arrastrar con mouse o deslizar con el dedo
  let pStartX = 0;
  let pDragging = false;

  partnersSlider.addEventListener('pointerdown', (e) => {
    pDragging = true;
    pStartX = e.clientX;
    partnersSlider.classList.add('is-dragging');
    clearInterval(pTimer);
  });

  partnersSlider.addEventListener('pointerup', (e) => {
    if (!pDragging) return;
    pDragging = false;
    partnersSlider.classList.remove('is-dragging');
    const diff = e.clientX - pStartX;
    if (Math.abs(diff) > 30) {
      diff < 0 ? pGoTo(pCurrent + 1) : pGoTo(pCurrent - 1);
    } else {
      pRestartAutoplay();
    }
  });

  partnersSlider.addEventListener('pointerleave', () => {
    if (pDragging) {
      pDragging = false;
      partnersSlider.classList.remove('is-dragging');
      pRestartAutoplay();
    }
  });

  partnersSlider.addEventListener('pointercancel', () => {
    if (pDragging) {
      pDragging = false;
      partnersSlider.classList.remove('is-dragging');
      pRestartAutoplay();
    }
  });

  pRender();
  pRestartAutoplay();
}
