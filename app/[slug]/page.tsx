import { getAllSlugs, getPageContent } from '@/lib/markdown'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/id6779042750'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageContent(slug)
  if (!page) return {}
  return {
    title: page.meta.title,
    description: page.meta.meta,
    alternates: { canonical: `https://pdflow.pro/${slug}` },
    openGraph: {
      title: page.meta.title,
      description: page.meta.meta,
      url: `https://pdflow.pro/${slug}`,
      siteName: 'PDFlow',
      type: 'article',
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPageContent(slug)
  if (!page) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900">PDFlow</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">{page.meta.primaryKeyword}</span>
      </nav>

      {/* Article */}
      <article
        className="prose prose-gray max-w-none
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900
          prose-h2:text-xl prose-h2:font-semibold prose-h2:text-gray-900 prose-h2:mt-10
          prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-800
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900
          prose-table:text-sm prose-th:bg-gray-50 prose-th:font-semibold
          prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-code:text-sm
          prose-li:text-gray-700"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />

      {/* CTA */}
      <div className="mt-12 bg-black text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to try PDFlow?</h2>
        <p className="text-gray-300 mb-6">Free to download. One-time payment to unlock everything. No subscription, ever.</p>
        <a
          href={APP_STORE_URL}
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Download on the App Store
        </a>
      </div>

      {/* Related tools */}
      <div className="mt-10">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">More PDF Tools</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'merge-pdf-iphone', label: 'Merge PDF' },
            { slug: 'compress-pdf-iphone', label: 'Compress PDF' },
            { slug: 'split-pdf-iphone', label: 'Split PDF' },
            { slug: 'rotate-pdf-iphone', label: 'Rotate PDF' },
            { slug: 'unlock-pdf-iphone', label: 'Unlock PDF' },
            { slug: 'protect-pdf-iphone', label: 'Protect PDF' },
            { slug: 'reorder-pdf-iphone', label: 'Reorder Pages' },
            { slug: 'remove-pages-pdf-iphone', label: 'Remove Pages' },
            { slug: 'pdf-to-image-iphone', label: 'PDF to Image' },
            { slug: 'edit-pdf-iphone', label: 'Edit PDF (Full Guide)' },
          ]
            .filter((l) => l.slug !== slug)
            .map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                {l.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
