import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Odak Gelişim | Okuma Geliştirme ve Anlama Eğitimi - Trabzon",
  description:
    "Trabzon'da çocuklar için okuma, anlama ve odak geliştirme eğitimi. Birebir takip ve gerçek gelişim Odak Gelişim'de.",
  keywords: [
    "okuma geliştirme",
    "okuma eğitimi trabzon",
    "hızlı okuma",
    "çocuk okuma eğitimi",
    "okuduğunu anlama",
    "trabzon eğitim",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Odak Gelişim",
    title: "Odak Gelişim",
    description: "Okuma ve anlama gelişimi için birebir eğitim sistemi",
    images: ["/hero-reading-session.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odak Gelişim",
    description: "Okuma ve anlama gelişimi için birebir eğitim",
    images: ["/hero-reading-session.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Odak Gelişim",
  description: "Okuma ve anlama gelişimi eğitimi",
  areaServed: "Trabzon",
  telephone: "+905349104947",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
