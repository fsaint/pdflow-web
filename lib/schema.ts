// JSON-LD for every page. Search Console reported all thirteen pages as "Discovered, currently not
// indexed" with no structured data on any of them (SEO audit pdflow-landing-2026-09-21).
//
// Everything here is derived from what a page actually says. The HowTo steps are the page's own
// "Step N:" headings and the FAQ entries its own question headings, so the markup never claims
// something the reader cannot see. There is deliberately no aggregateRating: the app has zero
// ratings, and inventing one would be fake proof.

import fs from 'fs'
import path from 'path'
import { APP_STORE_URL } from './constants'

const SITE = 'https://pdflow.pro'
const contentDir = path.join(process.cwd(), 'content')

/** The raw markdown for a slug, or '' when there is none. */
function rawMarkdown(slug: string): string {
  const file = path.join(contentDir, `${slug}.md`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
}

/** Strip the anchor suffix and inline emphasis so a heading reads as plain text. */
function plain(text: string): string {
  return text
    .replace(/\s*\{#[^}]+\}/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim()
}

/** The paragraph text that follows a heading, up to the next heading, as one line. */
function bodyAfter(lines: string[], start: number): string {
  const out: string[] = []
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i]
    if (/^#{1,6}\s/.test(line) || line.trim() === '---') break
    if (line.trim()) out.push(plain(line.replace(/^[-*]\s+/, '')))
  }
  return out.join(' ').slice(0, 500)
}

export interface HowToStep {
  name: string
  text: string
}

/** The page's own "### Step N: ..." headings, in order. */
export function howToSteps(slug: string): HowToStep[] {
  const lines = rawMarkdown(slug).split('\n')
  const steps: HowToStep[] = []
  lines.forEach((line, i) => {
    const m = line.match(/^###\s+Step\s+\d+[:.]?\s*(.+)$/i)
    if (m) steps.push({ name: plain(m[1]), text: bodyAfter(lines, i) || plain(m[1]) })
  })
  return steps
}

export interface FaqEntry {
  question: string
  answer: string
}

/** The question headings under the page's FAQ section, with their answers. */
export function faqEntries(slug: string): FaqEntry[] {
  const lines = rawMarkdown(slug).split('\n')
  const out: FaqEntry[] = []
  let inFaq = false
  lines.forEach((line, i) => {
    if (/^##\s/.test(line)) inFaq = /frequently asked questions|\{#faq\}/i.test(line)
    if (!inFaq) return
    const m = line.match(/^###\s+(.+)$/)
    if (!m) return
    const answer = bodyAfter(lines, i)
    if (answer) out.push({ question: plain(m[1]), answer })
  })
  return out
}

/** The app itself. Offers says free to download, which is what the App Store shows. */
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PDFlow',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS',
    url: SITE,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      'Merge PDF files',
      'Split a PDF into pages',
      'Compress a PDF',
      'Rotate and reorder pages',
      'Delete pages',
      'Password protect a PDF',
      'Remove a PDF password',
      'Convert a PDF to images',
    ],
    // The two things that distinguish it from the subscription cloud tools.
    description:
      'Edit PDFs on iPhone without a subscription. Files are processed on the device and are not uploaded.',
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PDFlow',
    url: SITE,
  }
}

/** Matches the breadcrumb the reader can see at the top of a guide. */
export function breadcrumbSchema(slug: string, label: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PDFlow', item: SITE },
      { '@type': 'ListItem', position: 2, name: label, item: `${SITE}/${slug}` },
    ],
  }
}

/**
 * A guide's own markup: HowTo when the page really has numbered steps, Article otherwise, plus
 * FAQPage when it carries a question section. Returns only the ones the content supports.
 */
export function guideSchemas(slug: string, title: string, description: string) {
  const schemas: object[] = []
  const steps = howToSteps(slug)
  const url = `${SITE}/${slug}`

  if (steps.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title.split('|')[0].trim(),
      description,
      url,
      totalTime: 'PT2M',
      tool: [{ '@type': 'HowToTool', name: 'iPhone' }],
      step: steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${url}#step-${i + 1}`,
      })),
    })
  } else {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title.split('|')[0].trim(),
      description,
      url,
      mainEntityOfPage: url,
    })
  }

  const faqs = faqEntries(slug)
  if (faqs.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return schemas
}

/** A plain WebPage, for the pages that are neither guides nor the home page. */
export function webPageSchema(pathname: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE}${pathname}`,
    isPartOf: { '@type': 'WebSite', name: 'PDFlow', url: SITE },
  }
}
