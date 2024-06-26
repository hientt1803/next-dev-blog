import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

// CSS
import "@/styles/globals.css";
import "@/styles/mdx-editor.css";
import "@mdxeditor/editor/style.css";

// provider
import ClerkAuthenticationProvider from "@/lib/clerk-convex-provider";
import { ThemeProvider } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/lib/LenisProvider";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

import Loading from "./loading";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Suspense fallback={<Loading />}>
          <LenisProvider>
            <ClerkAuthenticationProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
              <Toaster />
            </ClerkAuthenticationProvider>
          </LenisProvider>
        </Suspense>
      </body>
    </html>
  );
}
