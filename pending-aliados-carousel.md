# Carrusel "Aliados Estratégicos" (Servicios + Nosotros)

**Estado: ✅ listo para construir — ver prompt final en `prompt-build-aliados.txt`.**

## Qué es
Sección en `servicios.html`, entre "Cómo trabajamos" (`.process`) y la banda de CTA final (`.cta-band`), mostrando los logos de los aliados/proveedores estratégicos de Byrcon. Replica lo que ya existe en el sitio actual (byrcon.com.ec/services/), sección "Confianza y Calidad → Aliados Estratégicos".

## Contenido conocido hasta ahora
- **Actualización:** confirmado con una segunda tanda de capturas (página "Sobre Nosotros" del sitio actual) que el set de logos NO es siempre el mismo. En Servicios se vieron: Grupo Pasquel, Kubiec, Alfa, Novacero. En Nosotros se vieron: arneg, Grupo Pasquel, De Rigo Refrigeration, Esycmet Cía. Ltda. — solo "Grupo Pasquel" se repite. Esto confirma que hay más de 4 aliados en total (los ~11 puntos de paginación tienen sentido) rotando en grupos.
- **Importante:** la sección aparece en AL MENOS 2 páginas (Servicios y Sobre Nosotros), no solo en Servicios como pensábamos al inicio. Por eso el componente (CSS y JS) debería vivir en `base.css`/`base.js`, no en `servicios.css` — para poder reutilizarlo en ambas páginas sin duplicar código.
- Aliados confirmados hasta ahora (posiblemente incompleto): Grupo Pasquel, Kubiec, Alfa, Novacero, arneg, De Rigo Refrigeration, Esycmet Cía. Ltda. (7 de ~11 posibles).
## Cómo se va a construir
Reutilizando el mismo patrón del slider de testimonios (`.testi-slider`) que ya funciona bien en el Home: dots de navegación + autoplay + pausa al pasar el mouse. La diferencia es que cada "slide" va a mostrar un grupo de logos en fila, no un bloque de texto.

- Logos en escala de grises por defecto (a color al hacer hover, detalle sutil y opcional).
- Archivos a tocar/crear:
  - **HTML**: se repite en dos páginas: `servicios.html` (después de `.process` y antes de `.cta-band`) y `nosotros.html` (después de `.team` y antes de `.cta-band`).
  - **CSS**: va en `css/base.css` (no en `servicios.css` — se reutiliza en 2 páginas, mismo criterio que usamos con `.project-card` y `.stats`).
  - **JS**: va en `js/base.js` (mismo criterio). Ninguna página necesita un archivo JS propio solo por esto.

## Pendiente de tu parte antes de construir
- [ ] Archivos de logo de cada aliado, en `images/aliados/`, idealmente con fondo transparente (PNG o SVG), nombre en kebab-case: `grupo-pasquel.png`, `kubiec.png`, `alfa.png`, `novacero.png`, `arneg.png`, `de-rigo.png`, `esycmet.png`, y los que falten.
- [ ] Confirmar la lista completa de aliados (llevamos 7 identificados de ~11 posibles, por los puntos de paginación).
- [ ] Confirmar si quieres el mismo autoplay de 6 segundos que usa el slider de testimonios, o preferís otro tiempo / sin autoplay (solo navegación manual).

## Historial de este documento
- Creado tras revisar las capturas del sitio actual (servicios/), donde se identificó esta sección faltante en el rediseño.
- Actualizado tras revisar capturas de Sobre Nosotros: se descubrió que hay más de 4 aliados en total y que la sección se repite en más de una página — cambia la ubicación de CSS/JS a base.css/base.js.
- **2026-09-04: construido.** Sección `.partners` insertada en `pages/servicios.html` y `pages/nosotros.html` (antes de `.cta-band`), CSS en `css/base.css`, JS en `js/base.js`. 11 aliados confirmados y renombrados en `images/logos-aliados/`: kubiec, alfa, de-rigo, esycmet, seing, arneg, novacero, ie-ingenieria, duquematriz, opm, grupo-pasquel. Carrusel con dots + autoplay cada 5s + pausa al hover (mismo patrón que `.testi-slider`, sin escala de grises por ahora).