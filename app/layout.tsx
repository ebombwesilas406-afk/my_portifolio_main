import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import favicon from "@/assests/favicon.jpg";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Silas Omulama | Developer Portfolio",
  description:
    "Student and aspiring software developer building practical web applications, automation tools, and backend systems.",
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${spaceMono.variable} font-ui`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
