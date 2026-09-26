import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-source-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.nightcover.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nightcover — After-hours phone cover for UK businesses",
  description:
    "Nightcover staffs your phones evenings, nights and weekends in clear British English — inbound, appointments and overflow — without a UK night-shift hire.",
  openGraph: {
    title: "Nightcover — Someone answers, after hours",
    description:
      "UK-English support when your own team has gone home. Book a 15-minute call or request a 10-hour pilot.",
    url: siteUrl,
    siteName: "Nightcover",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nightcover — Someone answers, after hours",
    description:
      "UK-English support when your own team has gone home.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${sourceSerif.variable} ${instrumentSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
