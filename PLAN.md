# Byrcon — Plan de rediseño (WordPress → código propio)

**Objetivo:** reconstruir byrcon.com.ec fuera de WordPress, en HTML/CSS/JS plano, manteniendo la identidad de marca actual (fondo oscuro + verde lima) pero elevando la ejecución visual y corrigiendo los vacíos detectados en el audit inicial. Hosting destino: Hostinger, mismo dominio.

**Cómo trabajamos:** paso a paso en este chat hasta tener el Home completo y 1-2 páginas más; a partir de ahí generamos un prompt de contexto para que Claude Code continúe directo sobre la carpeta local (`byrcon-web/`), donde se harán auditorías, verificación de cambios y checklist de aprobación.

---

## Fase 0 — Fundamentos ✅ completo
- [x] Estructura de carpetas (`css/`, `js/`, `images/`)
- [x] Sistema base: variables de color, tipografía, botones, header con menú móvil
- [x] Logo oficial conectado (header + footer, tamaños independientes)
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

## Fase 2 — Servicios (`servicios.html`)
- [ ] Detalle ampliado de las 6 líneas de servicio (hoy solo tienen una frase cada una)
- [ ] Posible sección de proceso o alcance por servicio
- [x] Carrusel de "Aliados Estratégicos" (compartido con Nosotros, ver `pending-aliados-carousel.md`)

## Fase 3 — Proyectos (`proyectos.html`)
- [ ] Grid completo de proyectos, con filtro por tipo (industrial / comercial)
- [ ] Ficha individual por proyecto: galería, m², ubicación, cliente
- [ ] **Bloqueante:** requiere fotos reales de obra — hoy el sitio actual no tiene ninguna en esta sección

## Fase 4 — Sobre Nosotros (`nosotros.html`)
- [ ] Historia, valores, equipo
- [ ] Certificaciones o normativas, si existen para mostrar
- [x] Carrusel de "Aliados Estratégicos" (compartido con Servicios, ver `pending-aliados-carousel.md`)

## Fase 5 — Contacto
- [ ] Conectar el formulario a PHP de Hostinger (al final, como acordamos)
- [ ] WhatsApp flotante, dirección, mapa embebido

## Fase 6 — Optimización y lanzamiento
- [x] Página `pages/privacidad.html` (Aviso de Privacidad) — borrador creado, con placeholders `[completar...]` pendientes de que el usuario los complete antes de publicar
- [ ] SEO on-page por página (title, meta description, slugs en español — hoy están en inglés)
- [ ] Accesibilidad: alt en imágenes, contraste, foco de teclado visible
- [ ] Performance: compresión de imágenes, lazy loading
- [ ] Pruebas responsive (móvil / tablet / desktop) y en distintos navegadores
- [ ] Estrategia de subida a Hostinger sin tumbar el sitio actual (staging o subcarpeta de prueba)

## Fase 7 — Handoff a Claude Code
- [ ] Prompt de contexto con este plan + decisiones tomadas
- [ ] Flujo de auditorías y checklist de cambios aceptados sobre la carpeta local

---

## Pendientes de tu parte (bloquean ciertas fases)
- Hex exactos de marca + tipografía oficial, si existe manual
- Fotos reales de más proyectos (para la página completa de Proyectos, no solo los 4 destacados del Home)
- Fotos de equipo/oficina, si se usarán en "Sobre Nosotros"
- Certificaciones o normativas específicas a mostrar
- Número de WhatsApp real (el ícono del footer sigue apuntando a `#`)
- Confirmar: el dominio (byrcon.com.ec) se mantiene igual, solo cambia lo que hay detrás (de WordPress a código)

## Próximo paso inmediato
Home terminado. Siguiente: página de Servicios (`servicios.html`), reutilizando el mismo sistema de diseño (header, footer, colores, componentes) que ya está resuelto.
