# msrom.github.io

Web personal bilingüe (EN/ES) de **Manuel Suárez Román** — investigador en ciberseguridad (COSEC, UC3M).

Stack: [Astro](https://astro.build) · contenido en YAML · despliegue en GitHub Pages · edición con [Pages CMS](https://pagescms.com).

## Desarrollo local

Requisitos: Node.js ≥ 22.12

```bash
npm install
npm run optimize-images   # genera portrait.webp desde Foto CV.jpg
npm run dev               # http://localhost:4321
npm run build             # salida en dist/
npm run check             # comprobación de tipos
```

## Editar contenido (sin tocar código)

1. Ve a [pagescms.com](https://pagescms.com) e inicia sesión con GitHub.
2. Conecta el repositorio `msrom/msrom.github.io`.
3. Edita las colecciones definidas en [`.pages.yml`](.pages.yml):
   - **Profile** — biografía, enlaces, habilidades
   - **Experience** — experiencia profesional e investigación
   - **Education** — formación
   - **Publications** — publicaciones
   - **Projects** — proyectos
   - **Teaching** — docencia
   - **Awards** — reconocimientos
   - **Certifications** — certificaciones
4. Sube imágenes desde el gestor de medios (van a `public/images/`).
5. Guarda: Pages CMS crea un commit en `main`.
6. GitHub Actions construye y publica el sitio automáticamente.

### Previsualizar antes de publicar

- Opción A: edita en una rama y abre un PR; revisa el diff antes de mergear a `main`.
- Opción B: clona el repo, edita YAML localmente, `npm run dev` y haz commit cuando estés satisfecho.

### Revertir un cambio

```bash
git log --oneline
git revert <commit-hash>
git push
```

## Estructura del contenido

```
src/content/
├── profile/          # Datos globales (un archivo)
├── experience/       # Un YAML por puesto
├── education/
├── publications/
├── projects/
├── teaching/
├── awards/
└── certifications/
```

Campos bilingües usan objetos `{ en: "...", es: "..." }`.

## Despliegue

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) despliega en cada push a `main`.

**Primera vez:** en GitHub → Settings → Pages → Build and deployment → Source: **GitHub Actions**.

URL prevista: https://msrom.github.io

## Recursos pendientes

Consulta [`CONTENT_GAPS.md`](CONTENT_GAPS.md) para imágenes, datos por confirmar y pasos de configuración pendientes.

## Licencia del contenido

Textos y datos personales © Manuel Suárez Román. Código del sitio: uso personal.
