/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SGT Coding Test 2",
  description: "SGT Coding Test 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}

        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>

        <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>

        <Script src="js/scrollmagic/uncompressed/ScrollMagic.js"></Script>
      </body>
    </html>
  );
}
