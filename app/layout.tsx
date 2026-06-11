import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDFlow — PDF Editor for iPhone',
  description: 'Merge, compress, split, rotate and protect PDFs on iPhone. No subscription. One-time payment. Works offline.',
  metadataBase: new URL('https://pdflow.pro'),
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'PDFlow',
    images: [{ url: '/icon.png', width: 1024, height: 1024 }],
  },
}

const APP_STORE_URL = 'https://apps.apple.com/app/id6779042750'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight text-gray-900">
              PDFlow
            </Link>
            <a
              href={APP_STORE_URL}
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Download Free
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-200 mt-16 py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            <p className="font-semibold text-gray-700 mb-2">PDFlow — PDF Editor for iPhone</p>
            <p className="mb-4">One-time payment. No subscription. Works offline.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-gray-600">
              <Link href="/merge-pdf-iphone" className="hover:text-gray-900">Merge PDF</Link>
              <Link href="/compress-pdf-iphone" className="hover:text-gray-900">Compress PDF</Link>
              <Link href="/split-pdf-iphone" className="hover:text-gray-900">Split PDF</Link>
              <Link href="/rotate-pdf-iphone" className="hover:text-gray-900">Rotate PDF</Link>
              <Link href="/unlock-pdf-iphone" className="hover:text-gray-900">Unlock PDF</Link>
              <Link href="/protect-pdf-iphone" className="hover:text-gray-900">Protect PDF</Link>
              <Link href="/reorder-pdf-iphone" className="hover:text-gray-900">Reorder Pages</Link>
              <Link href="/remove-pages-pdf-iphone" className="hover:text-gray-900">Remove Pages</Link>
              <Link href="/pdf-to-image-iphone" className="hover:text-gray-900">PDF to Image</Link>
            </div>
            <div className="flex justify-center gap-6 mb-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
              <Link href="/support" className="hover:text-gray-600">Support</Link>
            </div>
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} PDFlow. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
