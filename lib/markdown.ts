import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
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
    title: 'How to Edit PDF on iPhone: The Complete Guide | PDFlow',
    meta: 'How to edit PDF on iPhone: delete, reorder, rotate, split and merge pages, sign, compress, add a password. The text inside stays as it is. No subscription.',
    primaryKeyword: 'how to edit pdf on iphone',
  },
  'merge-pdf-iphone': {
    title: 'Combine PDF on iPhone: Merge Files in 3 Taps | PDFlow',
    meta: 'Combine PDF files on iPhone into one document. PDFlow merges them on the device and works offline. No subscription, one-time payment. Download free.',
    primaryKeyword: 'combine pdf on iphone',
  },
  'compress-pdf-iphone': {
    title: 'Compress PDF on iPhone: Reduce File Size Fast | PDFlow',
    meta: 'Compress PDF on iPhone and see the new size before you export. No subscription, works offline, one-time payment. Download PDFlow free.',
    primaryKeyword: 'compress pdf iphone',
  },
  'split-pdf-iphone': {
    title: 'Split PDF on iPhone: Separate Pages Instantly | PDFlow',
    meta: 'Split a PDF on iPhone into single pages or sections. No subscription. Works offline. One-time payment. Download PDFlow free on the App Store.',
    primaryKeyword: 'split pdf iphone',
  },
  'rotate-pdf-iphone': {
    title: 'How to Rotate PDF on iPhone and Keep It Turned | PDFlow',
    meta: 'How to rotate PDF on iPhone and keep the change: the pages stay turned when you share the file. No subscription, works offline. Download PDFlow free.',
    primaryKeyword: 'how to rotate pdf on iphone',
  },
  'unlock-pdf-iphone': {
    title: 'How to Remove Password from PDF on iPhone | PDFlow',
    meta: 'How to remove the password from a PDF on iPhone. You need the password to remove it. Your file never leaves your device. Download PDFlow free.',
    primaryKeyword: 'how to remove password from pdf on iphone',
  },
  'protect-pdf-iphone': {
    title: 'Password Protect PDF on iPhone | PDFlow',
    meta: 'Password protect a PDF on iPhone before you share it. Works offline, no cloud upload. No subscription. One-time payment. Download PDFlow free.',
    primaryKeyword: 'password protect pdf iphone',
  },
  'reorder-pdf-iphone': {
    title: 'How to Rearrange PDF Pages on iPhone | PDFlow',
    meta: 'How to rearrange PDF pages on iPhone: drag pages to reorder them, then save. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'how to rearrange pdf pages on iphone',
  },
  'remove-pages-pdf-iphone': {
    title: 'Delete Pages from PDF on iPhone | PDFlow',
    meta: 'Delete pages from a PDF on iPhone in seconds, before you send it. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'delete pages from pdf iphone',
  },
  'sign-pdf-iphone': {
    title: 'How to Sign a PDF on iPhone (Free, Two Ways) | PDFlow',
    meta: "How to sign a PDF on iPhone for free: Apple's Markup in Files or Mail, or PDFlow, which keeps your original file. Draw once, place, save. Nothing uploaded.",
    primaryKeyword: 'sign pdf iphone',
  },
  'pdf-to-image-iphone': {
    title: 'Convert PDF to JPG on iPhone (or PNG) | PDFlow',
    meta: 'Convert PDF to JPG on iPhone, or to PNG, one page or every page. No subscription, works offline. One-time payment. Download PDFlow free.',
    primaryKeyword: 'convert pdf to jpg iphone',
  },
}

function stripHtmlCommentFrontmatter(content: string): string {
  return content.replace(/^(<!--|&lt;!--)[\s\S]*?(-->|--&gt;)\n*/m, '').trim()
}

export async function getPageContent(slug: string): Promise<{ html: string; meta: PageMeta } | null> {
  const filePath = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const body = stripHtmlCommentFrontmatter(raw).replace(/\s*\{#[^}]+\}/g, '')

  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(body)
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
