import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/contexts/providers";
import GoogleAnalytics from "@/components/google-analytics";
import { Mulish } from "next/font/google";
import { pageConstants } from "@/data/constants";

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
      <body className={`${mulish.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>

      <GoogleAnalytics />
    </html>
  );
}
