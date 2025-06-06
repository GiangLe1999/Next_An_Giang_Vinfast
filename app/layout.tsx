import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/contexts/providers";
import { Mulish } from "next/font/google";
import { pageConstants } from "@/data/constants";
import Script from "next/script";
import JsonLd from "@/components/jsonld";
import { orgSchema } from "@/lib/orgSchema";

const mulish = Mulish({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: pageConstants.siteTitle,
  description: pageConstants.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body className={`${mulish.className} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCLN98R8');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager - noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCLN98R8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
