export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export function t<T extends Record<Locale, string>>(value: T, locale: Locale): string {
  return value[locale];
}

export function localePath(path: string, locale: Locale): string {
  const normalized = path === '/' ? '' : path;
  if (locale === 'en') return normalized || '/';
  return `/es${normalized}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en';
}

export function formatDateRange(
  start: string,
  end: string | undefined,
  current: boolean,
  locale: Locale,
): string {
  const present = locale === 'es' ? 'Presente' : 'Present';
  const endLabel = current || !end ? present : end;
  return `${start} — ${endLabel}`;
}

export const ui = {
  nav: {
    about: { en: 'About', es: 'Sobre mí' },
    research: { en: 'Research', es: 'Investigación' },
    professional: { en: 'Professional', es: 'Profesional' },
    publications: { en: 'Publications', es: 'Publicaciones' },
    projects: { en: 'Projects', es: 'Proyectos' },
    cv: { en: 'CV', es: 'CV' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  sections: {
    featuredWork: { en: 'Selected work', es: 'Trabajo destacado' },
    publications: { en: 'Publications', es: 'Publicaciones' },
    experience: { en: 'Experience', es: 'Experiencia' },
    education: { en: 'Education', es: 'Formación' },
    teaching: { en: 'Teaching', es: 'Docencia' },
    projects: { en: 'Projects', es: 'Proyectos' },
    awards: { en: 'Recognition', es: 'Reconocimientos' },
    researchAreas: { en: 'Research focus', es: 'Líneas de investigación' },
    skills: { en: 'Tools & skills', es: 'Herramientas y habilidades' },
    service: { en: 'Service', es: 'Servicio' },
    allPublications: { en: 'All publications', es: 'Todas las publicaciones' },
    allProjects: { en: 'All projects', es: 'Todos los proyectos' },
    downloadCv: { en: 'Download CV (PDF)', es: 'Descargar CV (PDF)' },
    viewProject: { en: 'View project', es: 'Ver proyecto' },
    viewPaper: { en: 'Read paper', es: 'Leer artículo' },
    viewCode: { en: 'Source code', es: 'Código fuente' },
    placeholder: { en: 'Visual pending', es: 'Visual pendiente' },
    backHome: { en: 'Back to home', es: 'Volver al inicio' },
    contribution: { en: 'My contribution', es: 'Mi contribución' },
    authors: { en: 'Authors', es: 'Autores' },
    links: { en: 'Links', es: 'Enlaces' },
  },
  tracks: {
    research: { en: 'Research', es: 'Investigación' },
    professional: { en: 'Professional', es: 'Profesional' },
    leadership: { en: 'Leadership', es: 'Liderazgo' },
  },
  hero: {
    researchLead: {
      en: 'Graph- and learning-based methods for APT detection, threat intelligence, and provenance analysis.',
      es: 'Métodos basados en grafos y aprendizaje para detección de APTs, inteligencia de amenazas y análisis de procedencia.',
    },
    professionalLead: {
      en: 'Cybersecurity research, data science, and teaching across academia and applied settings.',
      es: 'Investigación en ciberseguridad, ciencia de datos y docencia en entornos académicos y aplicados.',
    },
  },
} as const;

export function uiText(key: keyof typeof ui.nav | keyof typeof ui.sections, locale: Locale): string {
  const group = key in ui.nav ? ui.nav : ui.sections;
  return t(group[key as keyof typeof group], locale);
}
