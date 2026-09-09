import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BRBOT | OPG Brbot",
    template: "%s | BRBOT",
  },
  description:
    "BRBOT predstavlja OPG Brbot iz Lipica pokraj Brinja, s naglaskom na lički podkapelski češnjak, obiteljsko sjeme i domaće proizvode iz Like.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="page-noise" aria-hidden="true" />
        <div className="relative flex min-h-full flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
