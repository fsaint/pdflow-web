import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { APP_STORE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'PDFlow, PDF Editor for iPhone | No Subscription',
  description: 'Merge, compress, split, rotate, unlock and protect PDFs on your iPhone. Every tool runs on the device. $19.99 once, or $2.99 a month.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'PDFlow',
    title: 'PDFlow, PDF Editor for iPhone | No Subscription',
    description: 'Merge, compress, split, rotate, unlock and protect PDFs on your iPhone. Every tool runs on the device. $19.99 once, or $2.99 a month.',
    url: '/',
    images: [{ url: '/icon.png', width: 1024, height: 1024 }],
  },
}

const PRICE_LINE = '$19.99 once, or $2.99 a month'

// Only what the App Store listing states. No ratings: the listing has none yet.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PDFlow: PDF Editor & Tools',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'iOS 17.0 or later',
  url: 'https://pdflow.pro',
  image: 'https://pdflow.pro/icon.png',
  installUrl: APP_STORE_URL,
  author: { '@type': 'Person', name: 'Felipe Saint-Jean' },
  description:
    'Nine PDF tools for iPhone: merge, split, compress, reorder, remove pages, rotate, unlock, protect and convert to images. Every file is processed on the device.',
  offers: [
    {
      '@type': 'Offer',
      name: 'PDFlow Lifetime',
      price: '19.99',
      priceCurrency: 'USD',
      category: 'One-time purchase',
      url: APP_STORE_URL,
    },
    {
      '@type': 'Offer',
      name: 'PDFlow One Month',
      price: '2.99',
      priceCurrency: 'USD',
      category: '30 days, no auto-renewal',
      url: APP_STORE_URL,
    },
  ],
}

const tools = [
  { n: '01', slug: 'merge-pdf-iphone', label: 'Merge PDF', desc: 'Combine multiple PDFs into one' },
  { n: '02', slug: 'compress-pdf-iphone', label: 'Compress PDF', desc: 'Reduce file size without losing quality' },
  { n: '03', slug: 'split-pdf-iphone', label: 'Split PDF', desc: 'Separate pages into individual files' },
  { n: '04', slug: 'rotate-pdf-iphone', label: 'Rotate PDF', desc: 'Fix page orientation permanently' },
  { n: '05', slug: 'unlock-pdf-iphone', label: 'Unlock PDF', desc: 'Remove password protection' },
  { n: '06', slug: 'protect-pdf-iphone', label: 'Protect PDF', desc: 'Add password to any PDF' },
  { n: '07', slug: 'reorder-pdf-iphone', label: 'Reorder Pages', desc: 'Drag and drop to rearrange pages' },
  { n: '08', slug: 'remove-pages-pdf-iphone', label: 'Remove Pages', desc: 'Delete unwanted pages instantly' },
  { n: '09', slug: 'pdf-to-image-iphone', label: 'PDF to Image', desc: 'Export pages as JPG or PNG' },
]

function AppStoreBadge({ position }: { position: string }) {
  return (
    <a
      href={APP_STORE_URL}
      data-cta
      data-position={position}
      data-plan="app-store"
      aria-label="Download PDFlow on the App Store"
      className="inline-block rounded-[9px] transition-opacity hover:opacity-90"
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={162}
        height={54}
        unoptimized
        className="h-[54px] w-auto"
      />
    </a>
  )
}

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Fold: app icon, the job headline, one button, the price, two proof marks */}
      <section className="bg-black text-white px-4 pt-12 pb-14 sm:pt-16 sm:pb-[4.5rem]">
        <div className="max-w-[44rem] mx-auto text-center">
          <Image
            src="/app-icon.png"
            alt="PDFlow app icon"
            width={96}
            height={96}
            priority
            className="mx-auto mb-6 h-24 w-24 rounded-[22px] shadow-[0_18px_40px_rgba(37,99,235,0.28)]"
          />
          <p className="text-[#60a5fa] font-medium text-[0.8125rem] tracking-[0.08em] uppercase mb-4">
            PDF Editor for iPhone
          </p>
          <h1 className="text-[2rem] sm:text-[2.75rem] font-bold leading-[1.12] tracking-[-0.02em] mb-5">
            Merge, compress and protect PDFs on your iPhone.{' '}
            <br className="hidden sm:inline" />
            They never leave it.
          </h1>
          <p className="text-gray-300 text-base sm:text-[1.0625rem] leading-[1.65] max-w-[34rem] mx-auto mb-8">
            Nine tools in one app: merge, compress, split, rotate, reorder, remove pages, unlock,
            protect, and export to image. Every one of them runs on the phone in your hand.
          </p>

          <AppStoreBadge position="hero" />
          <p className="text-base font-semibold text-white mt-4 mb-1">{PRICE_LINE}</p>
          <p className="text-gray-500 text-sm">Free to try &middot; No account required</p>

          <ul className="list-none mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <li className="flex items-center gap-3 text-left rounded-2xl border border-white/15 bg-white/5 px-[1.125rem] py-3.5 sm:min-w-[15.5rem]">
              <span className="text-[#60a5fa] shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                  <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <span className="flex flex-col">
                <strong className="text-[0.9375rem] font-semibold text-white">Stays on your iPhone</strong>
                <span className="text-[0.8125rem] text-gray-400">No upload, no server, no account</span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-left rounded-2xl border border-white/15 bg-white/5 px-[1.125rem] py-3.5 sm:min-w-[15.5rem]">
              <span className="text-[#60a5fa] shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10" />
                  <path d="M14.6 9.4a2.6 2.6 0 0 0-2.6-1.2c-1.6 0-2.6.8-2.6 2s1 1.8 2.6 2.1c1.6.3 2.6.8 2.6 2s-1 2-2.6 2a2.7 2.7 0 0 1-2.7-1.4" />
                </svg>
              </span>
              <span className="flex flex-col">
                <strong className="text-[0.9375rem] font-semibold text-white">$19.99, one payment</strong>
                <span className="text-[0.8125rem] text-gray-400">Lifetime access, nothing renews</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* The on-device promise: claim, mechanism, consequence */}
      <section className="px-4 py-[4.5rem] bg-gray-50 border-b border-gray-100">
        <div className="max-w-[42rem] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.2] mb-4">
            Your PDFs never leave your iPhone.
          </h2>
          <p className="text-gray-600 text-base sm:text-[1.0625rem] leading-[1.7] mb-5">
            Every tool runs on the device. Nothing is uploaded, there is no server to upload it to,
            and no account is required to use any of the nine tools.
          </p>
          <p className="text-gray-900 text-base sm:text-[1.0625rem] leading-[1.7] font-semibold border-l-[3px] border-blue-600 pl-4">
            Turn on Airplane Mode and merge a file. It still works. That is the whole proof.
          </p>
        </div>
      </section>

      {/* Nine tools, labelled */}
      <section className="px-4 py-16">
        <div className="max-w-[62rem] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.2] mb-4 text-center">
            Nine tools, one app
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Each one opens a file, does the job, and hands it back. No switching between apps.
          </p>
          {/* px breakpoints on both, so Tailwind orders 640 before 900 in the sheet */}
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="border border-gray-200 rounded-2xl p-5 bg-white transition-all hover:border-blue-300 hover:shadow-[0_6px_18px_rgba(15,23,42,0.06)]"
              >
                <span className="inline-block text-xs font-semibold tracking-[0.1em] text-blue-300 mb-2.5">
                  {t.n}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t.label}</h3>
                <p className="text-sm text-gray-500 leading-[1.5]">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What it costs */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-[46rem] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.2] text-center">
            What it costs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-5">
            <div className="bg-white border border-blue-600 rounded-2xl p-6 text-center shadow-[0_8px_24px_rgba(37,99,235,0.1)]">
              <p className="text-sm font-semibold text-gray-500 mb-2">PDFlow Lifetime</p>
              <p className="text-[2rem] font-bold text-gray-900 tracking-[-0.02em] mb-2">$19.99</p>
              <p className="text-sm text-gray-500">One payment, full access, no renewal.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <p className="text-sm font-semibold text-gray-500 mb-2">PDFlow One Month</p>
              <p className="text-[2rem] font-bold text-gray-900 tracking-[-0.02em] mb-2">$2.99</p>
              <p className="text-sm text-gray-500">30 days. It does not auto-renew.</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-[0.9375rem]">
            Try all nine tools free before you pay for either one.
          </p>
        </div>
      </section>

      {/* Closing band */}
      <section className="px-4 py-16 bg-blue-600 text-white text-center">
        <div className="max-w-[36rem] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] mb-3">
            Stop paying monthly for PDF tools
          </h2>
          <p className="text-blue-100 text-base sm:text-[1.0625rem] mb-7">
            PDFlow does the job on your phone, once, for a price you pay once.
          </p>
          <AppStoreBadge position="pricing" />
          <p className="text-base font-semibold text-white mt-4">{PRICE_LINE}</p>
        </div>
      </section>

      {/* Desktop handoff: scan to install on the phone. Hidden below 900px. */}
      <aside
        aria-label="Install PDFlow on your iPhone"
        className="hidden min-[900px]:flex fixed left-5 bottom-5 z-[60] items-center gap-3.5 bg-white border border-gray-200 rounded-2xl p-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.14)] max-w-[19rem]"
      >
        <Image
          src="/qr-appstore.png"
          alt="QR code linking to the PDFlow App Store page"
          width={88}
          height={88}
          className="h-[88px] w-[88px] rounded-lg shrink-0"
        />
        <div className="flex flex-col gap-1">
          <strong className="text-[0.9375rem] text-gray-900">Get PDFlow</strong>
          <span className="text-[0.8125rem] text-gray-500 leading-[1.45]">
            Scan this with your iPhone camera to install the app.
          </span>
        </div>
      </aside>
    </div>
  )
}
