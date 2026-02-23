import type { Metadata } from "next";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itechsol.ae"),
  title: {
    default: "Itechsol | Innovative Technical Solutions",
    template: "%s | Itechsol",
  },
  description:
    "Itechsol delivers smart industrial locking, RFID asset tracking, and intelligent key management systems for EPCs, oil and gas, and process industries in UAE and GCC.",
  keywords: [
    "Smart industrial locking UAE",
    "RFID asset tracking GCC",
    "Intelligent key management oil and gas",
    "EPC process industry security solutions",
  ],
  openGraph: {
    title: "Itechsol | Innovative Technical Solutions",
    description:
      "Engineering intelligent control for critical and demanding operations.",
    siteName: "Itechsol",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${rajdhani.variable} antialiased`}>
        <div className="site-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
