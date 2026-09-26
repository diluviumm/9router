import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "material-symbols/outlined.css";
import "./globals.css";
import { ThemeProvider } from "@/shared/components/ThemeProvider";
import "@/lib/network/initOutboundProxy"; // Auto-initialize outbound proxy env
import "@/shared/services/bootstrap"; // Auto-run initializeApp (watchdog, auto-resume tunnel)
import { initConsoleLogCapture } from "@/lib/consoleLogBuffer";
import { RuntimeI18nProvider } from "@/i18n/RuntimeI18nProvider";

// Hook console immediately at module load time (server-side only, runs once)
initConsoleLogCapture();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  // Base absolut utk openGraph/sitemap (Next warning: metadataBase wajib dgn og images)
  metadataBase: new URL(process.env.APP_URL || "http://localhost:20128"),
  title: "MeAI - Mael Stack",
  description: "One endpoint for all your AI providers. Manage keys, monitor usage, and scale effortlessly.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "MeAI - Mael Stack",
    description: "One endpoint for all your AI providers. Manage keys, monitor usage, and scale effortlessly.",
    url: "http://127.0.0.1:20128/",
    siteName: "MeAI",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "MeAI dashboard" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeAI - Mael Stack",
    description: "One endpoint for all your AI providers. Manage keys, monitor usage, and scale effortlessly.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#141318",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply persisted theme before first paint so a reload does not flash the
            default (light) theme before the client store hydrates. Mirrors the
            zustand-persist "theme" key and the `dark` class applyTheme() sets. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s?(JSON.parse(s).state||{}).theme:'system';t=t||'system';var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t==='system'&&m)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document,r=d.documentElement,f=function(){r.classList.add('fonts-loaded')};if(d.fonts&&d.fonts.load){d.fonts.load('24px "Material Symbols Outlined"').then(f).catch(f);setTimeout(f,3000)}else{f()}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.matchMedia||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;var cur=null,raf=0,ev=null;function apply(){raf=0;if(!cur)return;var r=cur.getBoundingClientRect();var px=((ev.clientX-r.left)/r.width)-0.5,py=((ev.clientY-r.top)/r.height)-0.5;cur.classList.add('is-tilting');cur.style.transform='perspective(900px) rotateX('+(-py*3.5).toFixed(2)+'deg) rotateY('+(px*3.5).toFixed(2)+'deg)';}addEventListener('pointermove',function(e){var el=e.target&&e.target.closest?e.target.closest('[data-tilt]'):null;if(el!==cur){if(cur){cur.style.transform='';cur.classList.remove('is-tilting');}cur=el;}if(!cur||raf)return;ev=e;raf=requestAnimationFrame(apply);},{passive:true});addEventListener('pointerdown',function(){if(cur){cur.style.transform='';cur.classList.remove('is-tilting');cur=null;}});})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <RuntimeI18nProvider>
            {children}
          </RuntimeI18nProvider>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} /> : null}
      </body>
    </html>
  );
}
