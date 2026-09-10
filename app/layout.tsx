import type { Metadata } from 'next'
import { IBM_Plex_Sans, Newsreader } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Link from 'next/link'
import { APP_STORE_URL } from '@/lib/constants'

// Plain Paper's type pairing, approved 2026-09-10. Newsreader carries every heading
// and every number; IBM Plex Sans carries the body, the labels and everything inside
// the phone. Both are the families named in the brand block on the product doc.
const display = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const text = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-text',
})

export const metadata: Metadata = {
  title: 'PDFlow, PDF Editor for iPhone',
  description: 'Merge, compress, split, rotate and protect PDFs on iPhone. No subscription. One-time payment. Works offline.',
  metadataBase: new URL('https://pdflow.pro'),
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'PDFlow',
    url: '/',
    images: [{ url: '/icon.png', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDFlow, PDF Editor for iPhone',
    description: 'Merge, compress, split, rotate and protect PDFs on iPhone. No subscription. One-time payment. Works offline.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>
        <Script id="mm-posthog" strategy="afterInteractive">
          {`window.MM = {ids: {}, purchase: null};
(function () { var q = new URLSearchParams(location.search), u = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) { u[k] = q.get(k) || ""; });
  window.MM.utm = u; })();
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
// visits, checkout clicks and sign-ups for the marketing machine's funnel: pageviews are automatic,
// every event carries the campaign properties read from the URL, and no person profile is created
// for an anonymous reader.
// The page view is sent from the library's own loaded callback, not from its window load
// listener: on a page this small, load fires before the async script arrives and the listener
// never runs, so capture_pageview stays off and the callback sends exactly one page view after
// the campaign properties are registered.
posthog.init("phc_suDHFRRpJHHqY5NaAW6emgqSPg8WZ6ZT9nHEt3DYsgsz", { api_host: "https://us.i.posthog.com", person_profiles: "identified_only", capture_pageview: false, capture_pageleave: false, autocapture: false,
  loaded: function (ph) {
    var u = (window.MM && window.MM.utm) || {};
    ph.register({ $utm_source: u.utm_source || "", $utm_medium: u.utm_medium || "", $utm_campaign: u.utm_campaign || "pdflow", $utm_content: u.utm_content || "", $utm_term: u.utm_term || "", product: "pdflow" });
    ph.capture("$pageview");
  } });
function mmWireCtas() {
  document.querySelectorAll("[data-cta]").forEach(function (el) {
    el.addEventListener("click", function () { posthog.capture("cta_click", { plan: el.dataset.plan || "", position: el.dataset.position || "", product: "pdflow" }); });
  });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mmWireCtas); else mmWireCtas();`}
        </Script>
        {/* The mark is the brand's own: a folded page with a flow stroke through it, then
            the name with `low` in the serif italic and a short rule under `PDF`. It sits on
            paper, never on a dark ground, and it is never recoloured. */}
        <header className="border-b border-rule bg-paper sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" aria-label="PDFlow, home" className="inline-flex items-center">
              <svg width="150" height="32" viewBox="0 0 150 32" role="img" aria-label="PDFlow" className="h-8 w-auto">
                <path d="M3 6 h15 l6 6 v14 H3 Z" fill="none" stroke="#270C71" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M18 6 v6 h6" fill="none" stroke="#270C71" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 20 c4 -6 7 2 11 -4" fill="none" stroke="#270C71" strokeWidth="1.8" strokeLinecap="round" />
                <text x="34" y="24" fontFamily="var(--font-display), Georgia, serif" fontSize="24" fontWeight="600" letterSpacing="-.4" fill="#270C71">
                  PDF<tspan fontStyle="italic" fontWeight="400">low</tspan>
                </text>
                <rect x="34" y="27.5" width="42" height="1.6" fill="#270C71" />
              </svg>
            </Link>
            <a
              href={APP_STORE_URL}
              data-cta
              data-position="header"
              data-plan="app-store"
              className="text-[0.84rem] font-semibold tracking-[0.02em] text-signature border-b-2 border-signature pb-0.5 hover:opacity-70 transition-opacity"
            >
              Download Free
            </a>
          </div>
        </header>

        <main>{children}</main>

        {/* No top margin: every other page ends with its own padding, and the home
            page's closing band has to meet the footer edge to edge. */}
        <footer className="border-t border-rule py-10 bg-canvas">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-muted">
            <p className="font-serif text-[1.0625rem] text-signature mb-2">PDFlow, the PDF editor for iPhone</p>
            <p className="mb-4">One-time payment. No subscription. Works offline.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-muted">
              <Link href="/merge-pdf-iphone" className="hover:text-signature">Merge PDF</Link>
              <Link href="/compress-pdf-iphone" className="hover:text-signature">Compress PDF</Link>
              <Link href="/split-pdf-iphone" className="hover:text-signature">Split PDF</Link>
              <Link href="/rotate-pdf-iphone" className="hover:text-signature">Rotate PDF</Link>
              <Link href="/unlock-pdf-iphone" className="hover:text-signature">Unlock PDF</Link>
              <Link href="/protect-pdf-iphone" className="hover:text-signature">Protect PDF</Link>
              <Link href="/reorder-pdf-iphone" className="hover:text-signature">Reorder Pages</Link>
              <Link href="/remove-pages-pdf-iphone" className="hover:text-signature">Remove Pages</Link>
              <Link href="/pdf-to-image-iphone" className="hover:text-signature">PDF to Image</Link>
            </div>
            <div className="flex justify-center gap-6 mb-4 text-xs text-muted">
              <Link href="/privacy" className="hover:text-signature">Privacy Policy</Link>
              <Link href="/support" className="hover:text-signature">Support</Link>
            </div>
            <p className="text-xs text-muted">&copy; {new Date().getFullYear()} PDFlow. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
