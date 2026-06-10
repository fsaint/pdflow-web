import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface PageMeta {
  slug: string
  title: string
  meta: string
  primaryKeyword: string
}

const pageMeta: Record<string, Omit<PageMeta, 'slug'>> = {
  'edit-pdf-iphone': {
    title: 'Edit PDF on iPhone — The Complete Guide | PDFlow',
    meta: 'Everything you need to edit PDFs on iPhone: merge, compress, split, rotate, protect and more. No subscription — one-time payment. Download PDFlow free.',
    primaryKeyword: 'edit pdf iphone',
  },
  'merge-pdf-iphone': {
    title: 'Merge PDF on iPhone — Fast, Free to Try | PDFlow',
    meta: 'Merge PDF files on iPhone in seconds with PDFlow. No subscription — one-time payment. Works offline. Download free on the App Store.',
    primaryKeyword: 'merge pdf iphone',
  },
  'compress-pdf-iphone': {
    title: 'Compress PDF on iPhone — Reduce File Size Fast | PDFlow',
    meta: 'Compress PDF files on iPhone without losing quality. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'compress pdf iphone',
  },
  'split-pdf-iphone': {
    title: 'Split PDF on iPhone — Separate Pages Instantly | PDFlow',
    meta: 'Split a PDF into individual pages or sections on iPhone. No subscription. Works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'split pdf iphone',
  },
  'rotate-pdf-iphone': {
    title: 'Rotate PDF on iPhone — Fix Page Orientation | PDFlow',
    meta: 'Rotate PDF pages permanently on iPhone. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'rotate pdf iphone',
  },
  'unlock-pdf-iphone': {
    title: 'Unlock PDF on iPhone — Remove Password Protection | PDFlow',
    meta: 'Remove PDF password protection on iPhone. Your file never leaves your device. No subscription. One-time payment. Download PDFlow free.',
    primaryKeyword: 'unlock pdf iphone',
  },
  'protect-pdf-iphone': {
    title: 'Password Protect PDF on iPhone | PDFlow',
    meta: 'Add password protection to any PDF on iPhone. Works offline, no cloud upload. No subscription. One-time payment. Download PDFlow free.',
    primaryKeyword: 'password protect pdf iphone',
  },
  'reorder-pdf-iphone': {
    title: 'Rearrange PDF Pages on iPhone | PDFlow',
    meta: 'Drag and drop to reorder pages in any PDF on iPhone. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'rearrange pdf pages iphone',
  },
  'remove-pages-pdf-iphone': {
    title: 'Delete Pages from PDF on iPhone | PDFlow',
    meta: 'Remove unwanted pages from any PDF on iPhone in seconds. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'delete pages from pdf iphone',
  },
  'pdf-to-image-iphone': {
    title: 'Convert PDF to Image on iPhone — JPG & PNG | PDFlow',
    meta: 'Convert any PDF page to JPG or PNG on iPhone. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'convert pdf to image iphone',
  },
}

function stripHtmlCommentFrontmatter(content: string): string {
  return content.replace(/^<!--[\s\S]*?-->\n*/m, '').trim()
}

export async function getPageContent(slug: string): Promise<{ html: string; meta: PageMeta } | null> {
  const filePath = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const body = stripHtmlCommentFrontmatter(raw)

  const result = await remark().use(remarkHtml, { sanitize: false }).process(body)
  const html = result.toString()

  const meta = pageMeta[slug]
  if (!meta) return null

  return { html, meta: { slug, ...meta } }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''))
}

export function getAllPages(): PageMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const meta = pageMeta[slug]
      return meta ? { slug, ...meta } : null
    })
    .filter(Boolean) as PageMeta[]
}
