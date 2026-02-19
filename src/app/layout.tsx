import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ryosta.my.id"),
  title: {
    default: "Ryosta Docs",
    template: "%s | Ryosta Docs",
  },
  description: "Cybersecurity notes, CTF writeups, and technical documentation by Ryosta.",
  keywords: [
    "cybersecurity",
    "CTF writeup",
    "digital forensics",
    "web security",
    "reverse engineering"
  ],
  authors: [{ name: "Ryosta" }],
  openGraph: {
    images: [ { url: "https://ryosta.my.id/og", width: 1200, height: 630, }, ],
    title: "Ryosta Docs",
    description: "Cybersecurity notes and technical documentation",
    url: "https://ryosta.my.id",
    siteName: "Ryosta Docs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ryosta Docs",
    description: "Cybersecurity notes and technical documentation",
  },
};

const inter = Inter({
  subsets: ['latin'],
});


export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
