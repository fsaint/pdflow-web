import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — PDFlow',
  description: 'Get help with PDFlow — PDF Editor for iPhone.',
}

const faqs = [
  {
    q: 'Does PDFlow work offline?',
    a: 'Yes. All processing happens on your device. No internet connection required.',
  },
  {
    q: 'Is there a subscription?',
    a: 'No. PDFlow is a one-time purchase. Buy once, use forever.',
  },
  {
    q: 'How do I merge PDF files?',
    a: 'Open the app, tap Merge, then select the PDF files you want to combine. Drag to reorder them, then tap Merge.',
  },
  {
    q: 'How do I compress a PDF?',
    a: 'Tap Compress, select your PDF, choose a quality level, and tap Compress. The reduced file will be saved to your device.',
  },
  {
    q: 'How do I unlock a password-protected PDF?',
    a: 'Tap Unlock, select the PDF, enter the current password, and tap Unlock. The unlocked file is saved locally.',
  },
  {
    q: 'My purchase is not restoring. What should I do?',
    a: 'Tap the Restore Purchases button in the app settings. Make sure you are signed in to the same Apple ID used for the original purchase.',
  },
  {
    q: 'How do I split a PDF?',
    a: 'Tap Split, select your PDF, then choose the pages or page ranges you want to extract. Each range is saved as a separate file.',
  },
  {
    q: 'Can I reorder pages in a PDF?',
    a: 'Yes. Tap Reorder Pages, select your PDF, then drag the page thumbnails to the order you want.',
  },
]

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Support</h1>
      <p className="text-gray-500 mb-10">
        Need help with PDFlow? Start with the FAQ below, or contact us directly.
      </p>

      <section className="mb-14">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-gray-900 mb-1">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Send us an email and we&apos;ll get back to you within 1 business day.
        </p>
        <a
          href="mailto:support@pdflow.pro"
          className="inline-block bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Email Support
        </a>
        <p className="text-xs text-gray-400 mt-4">support@pdflow.pro</p>
      </section>
    </div>
  )
}
