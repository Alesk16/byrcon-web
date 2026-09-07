// =========================================================
// BYRCON — home.js (interactividad propia del Home)
// Cargar SIEMPRE después de base.js.
// =========================================================

// Selector de servicios
const serviceData = [
  {
    icon: '<path d="M4 40h40M6 40V22l18-10 18 10v18M6 22h36"/>',
    desc: 'Desarrollamos galpones, bodegas y plantas productivas que cumplen normativas y se adaptan a tu operación.'
  },
  {
    icon: '<path d="M6 42h36M8 42V18l2-10h28l2 10v24M18 42v-12h12v12"/>',
    desc: 'Creamos locales, plazas y oficinas que maximizan el atractivo para el consumidor y optimizan el flujo del negocio.'
  },
  {
    icon: '<rect x="6" y="6" width="24" height="24"/><rect x="18" y="18" width="24" height="24"/>',
    desc: 'Reimaginamos tus espacios existentes con soluciones modernas, eficientes y preparadas para el futuro.'
  },
  {
    icon: '<path d="M10 6h20l8 8v28H10z"/><path d="M30 6v8h8"/><path d="M17 26l6 6 10-12"/>',
    desc: 'Convertimos tu idea en un proyecto viable, rentable y escalable, con planificación ajustada a tus necesidades reales.'
  },
  {
    icon: '<rect x="6" y="6" width="14" height="14"/><rect x="28" y="6" width="14" height="14"/><rect x="6" y="28" width="14" height="14"/><rect x="28" y="28" width="14" height="14"/>',
    desc: 'Integramos soluciones modulares con estilo industrial moderno y funcionalidad personalizada.'
  },
  {
    icon: '<path d="M24 5 L9 11 V22 C9 33 16 40 24 43 C32 40 39 33 39 22 V11 Z"/><path d="M17 23l5 5 10-11"/>',
    desc: 'Aseguramos que tus espacios mantengan su valor operativo y estético a lo largo del tiempo.'
  }
];

const serviceItems = document.querySelectorAll('.service-item');
const servicePanelIcon = document.getElementById('servicePanelIcon');
const servicePanelDesc = document.getElementById('servicePanelDesc');

serviceItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    serviceItems.forEach(el => el.classList.remove('is-active'));
    item.classList.add('is-active');

    if (servicePanelIcon && servicePanelDesc) {
      servicePanelIcon.style.opacity = '0';
      servicePanelDesc.style.opacity = '0';
      setTimeout(() => {
        servicePanelIcon.innerHTML = serviceData[index].icon;
        servicePanelDesc.textContent = serviceData[index].desc;
        servicePanelIcon.style.opacity = '1';
        servicePanelDesc.style.opacity = '1';
      }, 150);
    }
  });
});

// Slider de testimonios
const testiSlider = document.getElementById('testiSlider');
if (testiSlider) {
  const slides = testiSlider.querySelectorAll('.testi-slide');
  const dotsWrap = document.getElementById('testiDots');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  let current = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'testi-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.testi-dot');

  function goTo(index) {
    slides[current].classList.remove('is-active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('is-active');
    restartAutoplay();
  }

  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
  });

  function restartAutoplay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  testiSlider.addEventListener('mouseenter', () => clearInterval(timer));
  testiSlider.addEventListener('mouseleave', restartAutoplay);

  restartAutoplay();
}

// Formulario de cotización (interfaz por ahora, sin backend conectado)
// TODO: conectar a un endpoint real (PHP en Hostinger o servicio de formularios) antes de publicar
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Mensaje enviado ✓';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  });
}

// Acordeón de preguntas frecuentes
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(open => {
      open.classList.remove('is-open');
      open.querySelector('.faq-a').style.maxHeight = null;
      open.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('is-open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
