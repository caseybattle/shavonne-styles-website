import type { Metadata } from "next";
import { Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from '@/utils/trpc-provider';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import SparklingBackground from '@/components/ui/sparkling-background';
import Chatbot from '@/components/ui/chatbot';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

export const metadata: Metadata = {
  title: {
    default: "Shavonne Styles - Professional Hair Styling Services",
    template: "%s | Shavonne Styles",
  },
  description: "Professional hair styling services specializing in natural hair care, protective styles, and hair health. Book your appointment today with Shavonne Styles.",
  keywords: ["hair styling", "natural hair", "protective styles", "hair care", "professional stylist"],
  authors: [{ name: "Shavonne Styles" }],
  creator: "Shavonne Styles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shavonnestyles.net",
    title: "Shavonne Styles - Professional Hair Styling Services",
    description: "Professional hair styling services specializing in natural hair care, protective styles, and hair health.",
    siteName: "Shavonne Styles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shavonne Styles - Professional Hair Styling Services",
    description: "Professional hair styling services specializing in natural hair care, protective styles, and hair health.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${alexBrush.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SparklingBackground />
          <div className="relative z-10">
            <TRPCReactProvider>
              {children}
              <Toaster />
              <Chatbot />
            </TRPCReactProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
