import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDFlow — PDF Editor for iPhone | No Subscription',
  description: 'Merge, compress, split, rotate, unlock and protect PDFs on iPhone. One-time payment. No subscription. Works completely offline.',
}

const APP_STORE_URL = '#'

const features = [
  { slug: 'merge-pdf-iphone', label: 'Merge PDF', icon: '⊕', desc: 'Combine multiple PDFs into one' },
  { slug: 'compress-pdf-iphone', label: 'Compress PDF', icon: '◎', desc: 'Reduce file size without losing quality' },
  { slug: 'split-pdf-iphone', label: 'Split PDF', icon: '⊘', desc: 'Separate pages into individual files' },
  { slug: 'rotate-pdf-iphone', label: 'Rotate PDF', icon: '↻', desc: 'Fix page orientation permanently' },
  { slug: 'unlock-pdf-iphone', label: 'Unlock PDF', icon: '🔓', desc: 'Remove password protection' },
  { slug: 'protect-pdf-iphone', label: 'Protect PDF', icon: '🔒', desc: 'Add password to any PDF' },
  { slug: 'reorder-pdf-iphone', label: 'Reorder Pages', icon: '⇅', desc: 'Drag and drop to rearrange pages' },
  { slug: 'remove-pages-pdf-iphone', label: 'Remove Pages', icon: '✕', desc: 'Delete unwanted pages instantly' },
  { slug: 'pdf-to-image-iphone', label: 'PDF to Image', icon: '⬡', desc: 'Export pages as JPG or PNG' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-medium text-sm mb-4 tracking-wide uppercase">PDF Editor for iPhone</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Every PDF tool you need.<br />No subscription ever.
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Merge, compress, split, rotate, protect and unlock PDFs — right on your iPhone.
            Buy once, use forever. Works completely offline.
          </p>
          <a
            href={APP_STORE_URL}
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Download Free on the App Store
          </a>
          <p className="text-gray-500 text-sm mt-4">Free to try · One-time payment · No account required</p>
        </div>
      </section>

      {/* Why PDFlow */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">Why PDFlow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">One-Time Payment</h3>
              <p className="text-gray-600 text-sm">Adobe charges $10/month. PDF Expert charges $80/year. PDFlow is yours forever for a single purchase.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Works Offline</h3>
              <p className="text-gray-600 text-sm">No cloud upload. No internet required. Your PDFs are processed entirely on your iPhone — private and fast.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Built for iPhone</h3>
              <p className="text-gray-600 text-sm">Native iOS app with a clean, reliable interface. Every feature works exactly as expected, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">Everything you need to edit PDFs on iPhone</h2>
          <p className="text-center text-gray-500 mb-10">Nine powerful tools in one app. No switching between apps.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <Link
                key={f.slug}
                href={`/${f.slug}`}
                className="group border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{f.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stop paying monthly for PDF tools</h2>
          <p className="text-blue-100 mb-8 text-lg">PDFlow does everything you need — merge, compress, split, rotate, protect — for a single one-time price.</p>
          <a
            href={APP_STORE_URL}
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            Download PDFlow Free
          </a>
        </div>
      </section>
    </div>
  )
}
