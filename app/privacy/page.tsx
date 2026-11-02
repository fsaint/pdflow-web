import type { Metadata } from 'next'
import { JsonLd } from '@/app/JsonLd'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Privacy policy: your PDFs stay on your iPhone | PDFlow',
  description: 'How PDFlow handles your data: every PDF is processed on your iPhone, nothing is uploaded to a server, and no account is needed to use the app.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    type: 'article',
    siteName: 'PDFlow',
    title: 'Privacy policy: your PDFs stay on your iPhone | PDFlow',
    description: 'How PDFlow handles your data: every PDF is processed on your iPhone, nothing is uploaded to a server, and no account is needed to use the app.',
    url: '/privacy',
    images: [{ url: '/icon.png', width: 1024, height: 1024 }],
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">

      <JsonLd schema={webPageSchema('/privacy', 'PDFlow privacy policy', 'Every PDF is processed on your iPhone and nothing is uploaded to a server.')} />
      <h1 className="text-3xl font-medium text-signature mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: November 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Overview</h2>
          <p>
            PDFlow is designed with privacy as a core principle. All PDF processing happens
            entirely on your device. We do not collect, transmit, or store your documents.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Data We Do Not Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your PDF files or their contents</li>
            <li>Personal information such as your name, email, or address</li>
            <li>Usage data tied to your identity</li>
            <li>Location data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">On-Device Processing</h2>
          <p>
            Every operation in PDFlow — merging, compressing, splitting, rotating, protecting,
            unlocking, reordering, removing pages, and converting to images — is performed
            locally on your iPhone. Your files are never uploaded to any server.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">App Store &amp; Analytics</h2>
          <p>
            PDFlow is distributed through Apple&apos;s App Store. Apple may collect aggregate,
            anonymized analytics as part of the standard App Store framework. This data is
            governed by{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Apple Ads</h2>
          <p>
            Some people find PDFlow through an ad on the App Store. To learn which ads and search
            terms bring people who go on to buy, PDFlow asks Apple once, after install, whether the
            install came from an Apple Ads tap. Apple answers with the ad&apos;s campaign, ad group,
            keyword and country. It does not tell us who you are.
          </p>
          <p>
            PDFlow sends that answer to our own server once, and again with each purchase, along with
            which product was bought and a scrambled form of the purchase number. Nothing else goes
            with it: no name, no email, no device id, no advertising id, and never a document or a
            file name. Your PDFs are still processed on your iPhone and never uploaded.
          </p>
          <p>
            This data is not linked to you and is not shared with anyone. We use it only to count
            which ads work. It is not used to track you across other apps or websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Purchases</h2>
          <p>
            In-app purchases are processed entirely by Apple. PDFlow does not receive or store
            any payment information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Children&apos;s Privacy</h2>
          <p>
            PDFlow does not knowingly collect any information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page
            with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-signature mb-3">Contact</h2>
          <p>
            Questions? Reach us at{' '}
            <a href="mailto:support@pdflow.pro" className="text-blue-600 hover:underline">
              support@pdflow.pro
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  )
}
