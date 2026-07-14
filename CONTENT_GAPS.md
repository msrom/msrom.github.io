# Recursos y datos pendientes

Este documento lista lo que falta por incorporar, confirmar o sustituir en la web personal. Los placeholders visuales actuales están en `public/images/placeholders/`.

## Acciones externas (una sola vez)

| Acción | Por qué | Cómo |
|--------|---------|------|
| Autorizar **Pages CMS** | Editar contenido sin tocar código | Entra en [pagescms.com](https://pagescms.com), conecta el repo `msrom/msrom.github.io` y autoriza acceso GitHub |
| Configurar **GitHub Pages** | Publicar el sitio | Repo → Settings → Pages → Source: **Deploy from a branch** → rama **`gh-pages`** / root |
| Confirmar **dominio** | URL canónica y SEO | Si usarás dominio propio, añade `public/CNAME` y actualiza `site` en `astro.config.mjs` |
| Revisar **traducciones ES** | Calidad editorial | Repasa textos bilingües en `src/content/` desde Pages CMS |

## Recursos gráficos faltantes

| Recurso | Ubicación sugerida | Formato recomendado | Notas |
|---------|-------------------|---------------------|-------|
| Retrato final de alta calidad (recorte editorial) | `public/images/portrait.webp` | WebP, ~960 px ancho | Existe optimización desde `Foto CV.jpg`; valorar recorte más editorial |
| Imagen de proyecto **SDTED** | `public/images/projects/sdted.webp` | WebP 1280×800 | Sustituir `public/images/placeholders/project-sdted.svg` |
| Imagen de proyecto **HiP** | `public/images/projects/hip.webp` | WebP 1280×800 | Diagrama de taxonomías / grafo de alias |
| Imagen de proyecto **APAMCiber** | `public/images/projects/apamciber.webp` | WebP 1280×800 | Logo INCIBE o captura del observatorio |
| Imagen de proyecto **CTICore** | `public/images/projects/cti-core.webp` | WebP 1280×800 | Visualización de cobertura CTI |
| Imagen de publicación **SDTED** | `public/images/publications/sdted.webp` | WebP 1280×800 | Figura del paper o esquema de grafos |
| Imagen de publicación **HiP** | `public/images/publications/hip.webp` | WebP 1280×800 | Figura del grafo de alias |
| Imagen de publicación **CTI Echo Chamber** | `public/images/publications/cti-echo.webp` | WebP 1280×800 | Figura principal del preprint |
| **Open Graph image** | `public/images/og-default.webp` | WebP 1200×630 | Para compartir en redes |
| **Favicon** definitivo | `public/favicon.svg` | SVG | Actualmente monograma provisional “MS” |

Tras añadir una imagen real, actualiza el campo `cover` en el YAML correspondiente (`src/content/publications/` o `src/content/projects/`).

## Datos personales y contacto

| Dato | Estado | Decisión |
|------|--------|----------|
| Teléfono (+34 696 49 32 55) | **No publicado** | Confirmar si debe aparecer en la web |
| Año de nacimiento (1997) | **No publicado** | Confirmar si debe aparecer |
| Email personal (`manuelsuarezroman@outlook.com`) | **No publicado** | Se usa el email académico `mansuare@pa.uc3m.es` |
| Email académico | Publicado | Verificado en [perfil COSEC](https://cosec.inf.uc3m.es/people/manuel-suarez-roman/) |

## Contenido a ampliar o confirmar

| Elemento | Estado | Acción sugerida |
|----------|--------|-----------------|
| CV descargable en **español** | Solo PDF en inglés en `public/cv/` | Aportar `public/cv/manuel-suarez-roman-es.pdf` |
| Fecha exacta inicio UC3M | CV dice 2024; LinkedIn dice sep 2024 | Confirmar mes en `src/content/experience/uc3m-cosec.yaml` |
| Fecha fin CSIC | CV 2022–2024; LinkedIn hasta oct 2024 | Confirmar mes de salida |
| Proyecto **Go IT!** (2023–) | Mencionado en LinkedIn | Añadir ficha en `src/content/projects/` si debe mostrarse |
| Charlas y divulgación | No inventariadas | Añadir colección `talks` si quieres sección tipo [alexdelacruz.me](https://www.alexdelacruz.me/) |
| Artículo divulgativo IMF (Bluetooth BLE) | En LinkedIn | Decidir si entra como publicación o enlace externo |
| **Certificaciones** restantes del CV | Parcialmente cargadas | Completar en `src/content/certifications/` (Blockchain, Scrum, Graph Analytics, AI-900, etc.) |
| Detalle de **asignaturas** UNIE | Resumido | Ampliar en `src/content/teaching/` |
| Métricas Scholar (citas, h-index) | No mostradas | Decidir si añadir bloque de métricas (requiere actualización manual) |
| Sección **Blog** | No incluida | Opcional; requiere nueva colección `posts` |

## Conflictos entre fuentes (revisar)

| Tema | Fuente A | Fuente B | Resolución aplicada |
|------|----------|----------|---------------------|
| Email de contacto | CV: outlook | COSEC: `mansuare@pa.uc3m.es` | Se usa email académico |
| Rol UNIE director | CV: 2023–2024 | LinkedIn: jul 2023 – sep 2024 | Se mantiene 2023–2024 |
| Publicaciones totales | Scholar lista 6+ | COSEC/arxiv más recientes | Se incluyen 8 entradas verificadas |

## Analítica y legal

| Elemento | Estado |
|----------|--------|
| Analytics (Plausible, Umami, etc.) | No activado — decidir si instalar |
| Aviso legal / privacidad | No incluido — necesario si se añade analytics o formulario |
| `public/robots.txt` | Generado vía sitemap; personalizar si hay secciones privadas |

## Mantenimiento rutinario

1. Edita contenido en [Pages CMS](https://pagescms.com) (colecciones YAML).
2. Sube imágenes a `public/images/` desde el gestor de medios del CMS.
3. Cada guardado crea un commit; GitHub Actions publica automáticamente en unos minutos.
4. Para revertir: `git revert <commit>` en GitHub o desde terminal.
