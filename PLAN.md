# Byrcon — Plan de rediseño (WordPress → código propio)

**Objetivo:** reconstruir byrcon.com.ec fuera de WordPress, en HTML/CSS/JS plano, manteniendo la identidad de marca actual (fondo oscuro + verde lima) pero elevando la ejecución visual y corrigiendo los vacíos detectados en el audit inicial. Hosting destino: Hostinger, mismo dominio.

**Cómo trabajamos:** paso a paso en este chat hasta tener el Home completo y 1-2 páginas más; a partir de ahí generamos un prompt de contexto para que Claude Code continúe directo sobre la carpeta local (`byrcon-web/`), donde se harán auditorías, verificación de cambios y checklist de aprobación.

---

## Fase 0 — Fundamentos ✅ completo
- [x] Estructura de carpetas (`css/`, `js/`, `images/`)
- [x] Sistema base: variables de color, tipografía, botones, header con menú móvil
- [x] Logo oficial conectado (header + footer, tamaños independientes)
- [x] **Header rediseñado en dos filas (2026-09-23)**, igual en las 5 páginas: fila superior con logo de Byrcon (versión recortada `byrcon-logo-cropped.png`, 42px / 32px en móvil) + logo de La Doña Hacienda (`dona-hacienda-logo.webp`, 52px al 75% de opacidad, 100% al pasar el mouse — secundario frente a Byrcon) enlazado a `ladonahacienda.com.ec` y oculto en móvil; fila inferior con nav + Contáctanos, que queda pegada al hacer scroll (sticky en `.site-header` con `top` negativo, CSS puro). Se eliminó el truco de altura fija + `overflow:visible` del logo en el header. Nota: el logo de La Doña Hacienda es un sello circular sin margen que recortar — si aun así se ve pesado, pedir una versión sin sello.
- [ ] Confirmar hex exactos de marca + tipografía oficial (si existe manual) — *seguimos con la aproximación visual, nadie la ha objetado así que por ahora se queda*

## Fase 1 — Home ✅ completo
- [x] Hero (foto de fondo real + degradado)
- [x] Franja de cifras animada (+500, +20, +100.000, +60)
- [x] "20 años construyendo confianza" (con gráfico de crecimiento)
- [x] Soluciones integrales / servicios (selector interactivo)
- [x] "Comprometidos con entornos seguros..." + tags de prácticas
- [x] Proyectos destacados (con fotos reales de los 4 proyectos)
- [x] Testimonios (slider)
- [x] Formulario "Solicita una cotización" (interfaz lista, sin backend aún)
- [x] Preguntas frecuentes (acordeón, con accesibilidad)
- [x] Footer (con LinkedIn real, aviso de privacidad enlazado, logo propio)
- [x] Revisión de responsive + accesibilidad

## Fase 2 — Servicios (`servicios.html`) ✅ completo
- [x] Detalle ampliado de las 6 líneas de servicio
- [x] Sección "Cómo trabajamos" (proceso en 4 pasos)
- [x] Carrusel de "Aliados Estratégicos" (11 logos, compartido con Nosotros — historial en `docs/archivo/pending-aliados-carousel.md`)

## Fase 3 — Proyectos (`proyectos.html`)
- [x] Grid de proyectos con filtro por tipo (industrial / comercial) — los 4 proyectos actuales categorizados, ampliable
- [ ] **Pendiente real (no construido):** ficha individual por proyecto — galería, m², ubicación, cliente
- [ ] **Bloqueante para lo anterior y para ampliar el grid:** requiere más fotos reales de obra

## Fase 4 — Sobre Nosotros (`nosotros.html`)
- [x] Historia, valores (intro + 3 pilares), cifras, equipo (3 personas; fotos pendientes)
- [x] Carrusel de "Aliados Estratégicos" (compartido con Servicios)
- [ ] Certificaciones o normativas, si existen para mostrar

## Fase 5 — Contacto ⏸️ pausada por decisión del usuario
- [ ] Conectar el formulario a PHP de Hostinger (al final, como acordamos) — ver `TODO` en `js/home.js`
- [ ] WhatsApp funcional (flotante + ícono del footer, hoy en `href="#"` — ver `TODO` en `index.html`), dirección, mapa embebido

## Fase 6 — Optimización y lanzamiento
- [x] Página `pages/privacidad.html` (Aviso de Privacidad) — borrador creado, con placeholders `[completar...]` pendientes de que el usuario los complete antes de publicar
- [x] SEO on-page por página: title, meta description, canonical, Open Graph, favicon, `lang="es"`, nombres de archivo en español
- [x] Accesibilidad: alt en todas las imágenes, foco de teclado visible, `prefers-reduced-motion`, `aria-expanded` en menú y FAQ
- [x] Performance: lazy loading en todas las imágenes fuera del primer pantallazo
- [x] Pruebas responsive (auditoría dedicada, 8 fixes aplicados: inputs a 16px, scroll-padding-top, cierre de menú al navegar, zonas táctiles de los puntos, etc.)
- [ ] Agregar `width`/`height` a las etiquetas `<img>` para evitar salto de layout mientras cargan (CLS)
- [ ] Opcional: convertir las fotos JPG (165–260 KB) a WebP
- [ ] Estrategia de subida a Hostinger sin tumbar el sitio actual (staging o subcarpeta de prueba)
- [ ] Redirecciones 301 desde los slugs viejos de WordPress (ej. `/services/`) a las páginas nuevas, al momento de subir a Hostinger
- [ ] Revisar que canonical y `og:url` coincidan con la estructura final de URLs una vez subido (hoy apuntan a `https://byrcon.com.ec/pages/*.html`)

## Fase 7 — Handoff a Claude Code ✅ ocurrido
- [x] Prompt de contexto con este plan + decisiones tomadas (`CLAUDE.md`)
- [x] Flujo de auditorías y checklist de cambios aceptados sobre la carpeta local — en marcha desde hace varias sesiones

---

## Pendientes de tu parte (no bloquean nada técnico)
- Hex exactos de marca + tipografía oficial, si existe manual
- Fotos reales de más proyectos (para ampliar Proyectos y hacer las fichas individuales)
- Fotos de equipo (Eduardo y Ney; Silvana también usa placeholder en el sitio real)
- Certificaciones o normativas específicas a mostrar
- Número de WhatsApp real (el ícono del footer sigue apuntando a `#`)
- Completar los placeholders de `privacidad.html`: razón social y RUC, dirección, correo de contacto (x2) — idealmente con revisión de un abogado
- Logo de La Doña Hacienda: si el sello se ve pesado, conseguir una versión horizontal/sin sello
- Confirmar: el dominio (byrcon.com.ec) se mantiene igual, solo cambia lo que hay detrás (de WordPress a código)

## Próximo paso inmediato
Las 5 páginas están completas y auditadas. Lo que queda es contenido pendiente del usuario (ver lista de arriba) y la Fase 5 (formulario + WhatsApp), pausada por decisión del usuario, más la estrategia final de subida a Hostinger (incluye redirecciones 301 y revisión de canonical/OG).
