import { getCollection } from 'astro:content';
import type { Locale } from '../i18n';

export async function getProfile() {
  const profiles = await getCollection('profile');
  return profiles[0]?.data;
}

export async function getSortedExperience() {
  const items = await getCollection('experience');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getSortedEducation() {
  const items = await getCollection('education');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getSortedPublications() {
  const items = await getCollection('publications');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedPublications() {
  const items = await getSortedPublications();
  return items.filter((item) => item.data.featured);
}

export async function getSortedProjects() {
  const items = await getCollection('projects');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  const items = await getSortedProjects();
  return items.filter((item) => item.data.featured);
}

export async function getSortedTeaching() {
  const items = await getCollection('teaching');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getSortedAwards() {
  const items = await getCollection('awards');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getSortedCertifications() {
  const items = await getCollection('certifications');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export function publicationAuthors(authors: string[], locale: Locale): string {
  if (locale === 'es') return authors.join(', ');
  return authors.join(', ');
}

export function publicationVenue(year: number, venue: string): string {
  return `${venue}, ${year}`;
}
