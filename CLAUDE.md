# Byrcon — Contexto del proyecto

## Qué es esto
Reconstrucción del sitio web de Byrcon (byrcon.com.ec), una constructora industrial y comercial en Ecuador. El sitio actual está en WordPress; lo estamos reconstruyendo en HTML/CSS/JS plano para hostearlo directamente en Hostinger (hosting compartido, soporta PHP si se necesita a futuro).

Este trabajo empezó en conversación con Claude (claude.ai), sección por sección, en base a un audit del sitio original (se identificaron: enlaces rotos, meta tags mal armados, cero fotos reales en proyectos destacados, slugs en inglés, sin aviso de privacidad, sin WhatsApp). El Home ya quedó completo y pulido. Ahora este proyecto continúa aquí, en Claude Code, directo sobre esta carpeta.

## Stack
- HTML/CSS/JS sin frameworks ni build tools (sin npm, sin bundler). Se abre directo con Live Server o se sube tal cual a Hostinger.
- Sin backend todavía — el formulario de contacto es solo interfaz (ver comentario `TODO` en `js/home.js`).
- Google Fonts (Inter) vía `<link>` en el `<head>`.

## Estructura
```
byrcon-web/
├─ index.html            ← Home, completo (se queda en la raíz, es la puerta de entrada del dominio)
├─ pages/
│  ├─ servicios.html     ← Servicios, completo
│  ├─ proyectos.html     ← Proyectos, completo
│  ├─ nosotros.html      ← Sobre Nosotros, completo
│  └─ privacidad.html    ← Aviso de Privacidad, completo (borrador — tiene placeholders `[completar...]` pendientes de que el usuario los llene antes de publicar)
├─ css/
│  ├─ base.css           ← compartido por todas las páginas: variables, reset, botones, header, footer, .reveal, .page-banner, .cta-band, tarjetas de proyecto (.project-card y compañía), cifras (.stats y compañía), carrusel de aliados (.partners y compañía)
│  ├─ home.css           ← solo Home (hero, confianza, selector de servicios, compromiso, sección de proyectos destacados, testimonios, contacto, faq)
│  ├─ servicios.css      ← solo Servicios (detalle de servicios, proceso)
│  ├─ proyectos.css      ← solo Proyectos (filtros, tag de tipo)
│  ├─ nosotros.css       ← solo Nosotros (intro+features, equipo)
│  └─ privacidad.css     ← solo Privacidad (tipografía del cuerpo legal)
├─ js/
│  ├─ base.js            ← compartido: menú móvil, observer de .reveal, contadores animados de cifras, carrusel de aliados
│  ├─ home.js            ← solo Home: selector de servicios, slider de testimonios, formulario, faq
│  └─ proyectos.js       ← solo Proyectos: filtro por tipo
├─ images/               ← logo, fotos de proyectos, hero, logos-aliados/ (logos de aliados estratégicos, PNG)
├─ PLAN.md               ← roadmap completo por fases
├─ pending-aliados-carousel.md ← spec del carrusel de aliados, pendiente de construir
└─ CLAUDE.md             ← este archivo
```

**Regla de rutas:** `index.html` está en la raíz, así que sus `<link>`/`<script>`/`<img>` usan rutas normales (`css/...`, `js/...`, `images/...`), pero sus enlaces a páginas internas usan `pages/servicios.html`, etc. Las páginas dentro de `pages/` usan `../css/...`, `../js/...`, `../images/...`, y `../index.html` para volver al Home — pero se enlazan entre sí sin prefijo (`servicios.html`, `proyectos.html`, etc.) porque son hermanas en la misma carpeta.

Cada página nueva sigue este patrón: `<link>` a `base.css` + su propio `[pagina].css`; `<script>` a `base.js` + su propio `[pagina].js` si lo necesita (páginas sin interactividad propia solo cargan `base.js`). Un componente que empieza siendo de una sola página se mueve a `base.css`/`base.js` en cuanto una segunda página lo necesita (así pasó con `.project-card` y `.stats`).

## Sistema de diseño (reutilizar, no reinventar)
Todo vive en variables CSS al inicio de `css/base.css` (`:root`):
- `--bg-dark` / `--bg-dark-deep`: fondos oscuros de marca
- `--accent`: verde lima (~#D7E01A — aproximado, pendiente confirmar hex oficial contra manual de marca)
- `--white`, `--text-muted`, `--border-soft`

Patrones reutilizables ya establecidos, úsalos en vez de crear nuevos:
- `.section-eyebrow` + `.section-lede`: encabezado pequeño en verde + párrafo intro, presente en casi todas las secciones
- `.reveal` + el IntersectionObserver genérico en `js/base.js`: fade-in al hacer scroll, reutilizado en todas las secciones de todas las páginas
- `.btn`, `.btn-accent`, `.btn-outline`: sistema de botones
- Patrón "logo grande sin que el contenedor crezca": clase base chica (`.logo-img`, la usa el footer a 34px) + override específico por contenedor (`.site-header .logo-img` a 140px), combinado con `height` fija + `overflow:visible` en el contenedor (`.header-row`, `.footer-top`) — así el logo puede ser más grande que la barra sin empujarla. Si se pide agrandar un logo o ícono en otro lado, replicar este mismo patrón.
- `.page-banner` / `.cta-band`: reutilizables para cualquier página interior nueva.
- Iconos: SVG en línea, `viewBox="0 0 48 48"`, `stroke="var(--accent)"`, `stroke-width="1.5"`, sin relleno salvo casos puntuales — mantener ese estilo en cualquier ícono nuevo.

## Estado actual
- ✅ **Home (`index.html`) completo**: hero con foto real de fondo, cifras animadas (contador al hacer scroll), sección "20 años construyendo confianza" con gráfico de crecimiento, selector interactivo de servicios, sección de compromiso + tags de prácticas, proyectos destacados con fotos reales (4), slider de testimonios (autoplay + controles), formulario de cotización (sin backend), FAQ con acordeón accesible (`aria-expanded`), footer con LinkedIn real y logo oficial.
- ✅ **Servicios (`servicios.html`) completo**: detalle ampliado de los 6 servicios, sección "Cómo trabajamos" (proceso en 4 pasos). Falta el carrusel de "Aliados Estratégicos" — ver `pending-aliados-carousel.md`.
- ✅ **Proyectos (`proyectos.html`) completo**: grid con filtro por tipo (industrial/comercial), los 4 proyectos actuales categorizados. Ampliable cuando haya más fotos.
- ✅ **Sobre Nosotros (`nosotros.html`) completo**: intro + 3 pilares, cifras, equipo (3 personas, nombres/cargos reales, fotos pendientes salvo Silvana que también usa placeholder en el sitio real).
- ✅ **Aviso de Privacidad (`privacidad.html`) completo**: borrador razonable en base a la LOPDP de Ecuador, no revisado por un abogado. Tiene placeholders `[completar razón social y RUC]`, `[completar dirección]`, `[completar correo de contacto]` (x2) que el usuario debe llenar antes de publicar.
- Ver `PLAN.md` para el roadmap completo por fases y qué sigue.

## Pendientes conocidos (no son bugs, son placeholders intencionales — no "arreglar" sin avisar)
- Formulario de cotización: no envía correos reales, solo simula éxito visualmente (`js/home.js`, buscar `TODO`)
- Ícono de WhatsApp en el footer: `href="#"` — falta el número real del negocio
- Hex de marca y tipografía: aproximados a ojo desde un screenshot, no confirmados contra un manual de marca oficial

## Cómo quiero trabajar contigo
1. **Antes de cambiar código existente, audita primero y muéstrame el reporte** — no apliques cambios grandes sin que yo los revise y apruebe.
2. Para trabajo nuevo (páginas nuevas, secciones nuevas) sí puedes construir directo, pero siguiendo el sistema de diseño de arriba — no introduzcas convenciones nuevas sin avisarme primero.
3. Todo el contenido del sitio va en español.
4. No conectes el formulario a un backend real todavía — esa es una fase aparte que vamos a acordar cuando lleguemos ahí.
5. Cuando termines una tarea, dime en una lista corta qué archivos tocaste y qué cambió — no hace falta que me expliques cada línea de código, solo el resumen.
