import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedString = z.object({
  en: z.string(),
  es: z.string(),
});

const localizedText = z.object({
  en: z.string(),
  es: z.string(),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    tagline: localizedString,
    shortBio: localizedText,
    longBio: localizedText,
    email: z.string().email(),
    location: localizedString,
    portrait: z.string(),
    cvFile: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
        kind: z.enum(['linkedin', 'github', 'scholar', 'orcid', 'email', 'website', 'other']),
      }),
    ),
    researchAreas: z.array(localizedString),
    skills: z.object({
      programming: z.array(z.string()),
      data: z.array(z.string()),
      soft: z.array(localizedString),
    }),
    languages: z.array(
      z.object({
        name: localizedString,
        level: localizedString,
      }),
    ),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/experience' }),
  schema: z.object({
    title: localizedString,
    organization: z.string(),
    organizationUrl: z.string().url().optional(),
    location: localizedString.optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    track: z.enum(['research', 'professional', 'leadership']),
    highlights: z.array(localizedText),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/education' }),
  schema: z.object({
    degree: localizedString,
    institution: z.string(),
    institutionUrl: z.string().url().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    notes: z.array(localizedText).optional(),
    order: z.number(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    month: z.number().optional(),
    type: z.enum(['journal', 'conference', 'preprint', 'report', 'chapter']),
    featured: z.boolean().default(false),
    summary: localizedText,
    contribution: localizedText,
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        dataset: z.string().url().optional(),
        doi: z.string().optional(),
      })
      .optional(),
    status: localizedString.optional(),
    cover: z.string().optional(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/projects' }),
  schema: z.object({
    title: localizedString,
    organization: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    featured: z.boolean().default(false),
    summary: localizedText,
    role: localizedText,
    tags: z.array(z.string()),
    links: z
      .object({
        website: z.string().url().optional(),
        code: z.string().url().optional(),
      })
      .optional(),
    cover: z.string().optional(),
    order: z.number(),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/teaching' }),
  schema: z.object({
    role: localizedString,
    institution: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    details: z.array(localizedText),
    order: z.number(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/awards' }),
  schema: z.object({
    title: localizedString,
    issuer: z.string(),
    year: z.number().optional(),
    details: localizedText.optional(),
    order: z.number(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/certifications' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    year: z.number().optional(),
    url: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = {
  profile,
  experience,
  education,
  publications,
  projects,
  teaching,
  awards,
  certifications,
};
