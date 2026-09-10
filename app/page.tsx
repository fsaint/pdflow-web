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

      {/* Fold: app icon, the job headline, one button, the price, two proof marks.
          Plain Paper: the ground is paper, the ink is the one indigo sampled from the
          icon, and the icon is the only saturated object on the screen. */}
      <section className="ruled bg-paper text-ink px-4 pt-14 pb-16 sm:pt-[4.5rem] sm:pb-20 border-b border-rule">
        <div className="max-w-[44rem] mx-auto text-center">
          <Image
            src="/app-icon.png"
            alt="PDFlow app icon"
            width={96}
            height={96}
            priority
            className="mx-auto mb-7 h-24 w-24 rounded-[22px]"
          />
          <p className="text-signature font-semibold text-[0.72rem] tracking-[0.2em] uppercase mb-4">
            PDF Editor for iPhone
          </p>
          {/* The serif carries the claim and the italic carries the whole personality
              budget, which is the right size for this product. */}
          <h1 className="font-serif text-[2.05rem] sm:text-[2.9rem] font-medium leading-[1.12] tracking-[-0.018em] mb-5 text-signature">
            Merge, compress and protect PDFs on your iPhone.{' '}
            <br className="hidden sm:inline" />
            <em className="italic font-normal text-ink">They never leave it.</em>
          </h1>
          <p className="text-muted text-base sm:text-[1.0625rem] leading-[1.7] max-w-[34rem] mx-auto mb-8">
            Nine tools in one app: merge, compress, split, rotate, reorder, remove pages, unlock,
            protect, and export to image. Every one of them runs on the phone in your hand.
          </p>

          <hr className="border-0 border-t border-rule max-w-[33rem] mx-auto mb-8" />

          <AppStoreBadge position="hero" />
          <p className="font-serif text-[1.32rem] font-semibold text-ink mt-4 mb-1">{PRICE_LINE}</p>
          <p className="text-muted text-sm">Free to try &middot; No account required</p>

          <ul className="list-none mt-10 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <li className="fold flex items-center gap-3 text-left px-[1.125rem] py-4 sm:min-w-[15.5rem]">
              <span className="text-signature shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                  <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <span className="flex flex-col">
                <strong className="font-serif text-[1.0625rem] font-semibold text-signature">Stays on your iPhone</strong>
                <span className="text-[0.8125rem] text-muted">No upload, no server, no account</span>
              </span>
            </li>
            <li className="fold flex items-center gap-3 text-left px-[1.125rem] py-4 sm:min-w-[15.5rem]">
              <span className="text-signature shrink-0" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-[26px] w-[26px]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10" />
                  <path d="M14.6 9.4a2.6 2.6 0 0 0-2.6-1.2c-1.6 0-2.6.8-2.6 2s1 1.8 2.6 2.1c1.6.3 2.6.8 2.6 2s-1 2-2.6 2a2.7 2.7 0 0 1-2.7-1.4" />
                </svg>
              </span>
              <span className="flex flex-col">
                <strong className="font-serif text-[1.0625rem] font-semibold text-signature">$19.99, one payment</strong>
                <span className="text-[0.8125rem] text-muted">Lifetime access, nothing renews</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* The on-device promise: claim, mechanism, consequence */}
      <section className="px-4 py-[4.5rem] bg-canvas border-b border-rule">
        <div className="max-w-[42rem] mx-auto">
          <h2 className="font-serif text-[1.85rem] sm:text-[2.35rem] font-medium text-signature tracking-[-0.02em] leading-[1.16] mb-4">
            Your PDFs never leave your iPhone.
          </h2>
          <p className="text-muted text-base sm:text-[1.0625rem] leading-[1.72] mb-6">
            Every tool runs on the device. Nothing is uploaded, there is no server to upload it to,
            and no account is required to use any of the nine tools.
          </p>
          <p className="font-serif text-ink text-[1.2rem] sm:text-[1.4rem] leading-[1.62] font-medium border-l border-signature pl-5">
            Turn on Airplane Mode and merge a file. <span className="hl">It still works.</span> That is the whole proof.
          </p>
        </div>
      </section>

      {/* Nine tools, labelled */}
      <section className="ruled px-4 py-16 bg-paper">
        <div className="max-w-[62rem] mx-auto">
          <h2 className="font-serif text-[1.85rem] sm:text-[2.35rem] font-medium text-signature tracking-[-0.02em] leading-[1.16] mb-4 text-center">
            Nine tools, one app
          </h2>
          <p className="text-center text-muted mb-10">
            Each one opens a file, does the job, and hands it back. No switching between apps.
          </p>
          {/* px breakpoints on both, so Tailwind orders 640 before 900 in the sheet */}
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="fold p-5 transition-colors hover:border-signature"
              >
                <span className="inline-block font-serif text-sm font-semibold tracking-[0.06em] text-muted mb-2.5">
                  {t.n}
                </span>
                <h3 className="font-serif text-[1.15rem] font-semibold text-signature mb-1">{t.label}</h3>
                <p className="text-sm text-muted leading-[1.55]">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What it costs */}
      <section className="px-4 py-16 bg-canvas border-t border-rule">
        <div className="max-w-[46rem] mx-auto">
          <h2 className="font-serif text-[1.85rem] sm:text-[2.35rem] font-medium text-signature tracking-[-0.02em] leading-[1.16] text-center">
            What it costs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-5">
            <div className="fold border-signature p-6 text-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted mb-3">PDFlow Lifetime</p>
              <p className="font-serif text-[2.4rem] font-semibold text-signature tracking-[-0.02em] mb-2 leading-none">$19.99</p>
              <p className="text-sm text-muted">One payment, full access, no renewal.</p>
            </div>
            <div className="fold p-6 text-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted mb-3">PDFlow One Month</p>
              <p className="font-serif text-[2.4rem] font-semibold text-ink tracking-[-0.02em] mb-2 leading-none">$2.99</p>
              <p className="text-sm text-muted">30 days. It does not auto-renew.</p>
            </div>
          </div>
          <p className="text-center text-muted text-[0.9375rem]">
            Try all nine tools free before you pay for either one.
          </p>
        </div>
      </section>

      {/* Closing band */}
      {/* The one indigo field on the page, and it is the last thing read. */}
      <section className="px-4 py-16 bg-signature text-paper text-center">
        <div className="max-w-[36rem] mx-auto">
          <h2 className="font-serif text-[1.85rem] sm:text-[2.35rem] font-medium text-paper tracking-[-0.02em] leading-[1.16] mb-3">
            Stop paying monthly for PDF tools
          </h2>
          <p className="text-blue-200 text-base sm:text-[1.0625rem] mb-8">
            PDFlow does the job on your phone, once, for a price you pay once.
          </p>
          <AppStoreBadge position="pricing" />
          <p className="font-serif text-[1.32rem] font-semibold text-paper mt-4">{PRICE_LINE}</p>
        </div>
      </section>

      {/* Desktop handoff: scan to install on the phone. Hidden below 900px. */}
      <aside
        aria-label="Install PDFlow on your iPhone"
        className="fold hidden min-[900px]:flex fixed left-5 bottom-5 z-[60] items-center gap-3.5 p-3.5 max-w-[19rem]"
      >
        <Image
          src="/qr-appstore.png"
          alt="QR code linking to the PDFlow App Store page"
          width={88}
          height={88}
          className="h-[88px] w-[88px] shrink-0"
        />
        <div className="flex flex-col gap-1">
          <strong className="font-serif text-[1.0625rem] text-signature">Get PDFlow</strong>
          <span className="text-[0.8125rem] text-muted leading-[1.45]">
            Scan this with your iPhone camera to install the app.
          </span>
        </div>
      </aside>
    </div>
  )
}
