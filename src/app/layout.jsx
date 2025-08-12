import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Primary Font: Inter - Modern, clean, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Secondary Font: Poppins - Modern geometric font (Google Fonts alternative to Satoshi)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Mono Font: JetBrains Mono - Clean developer font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Nanakumor Princewill | Web Developer",
  description:
    "Crafting modern web experiences with clean code and innovative design. Expert in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Nanakumor Princewill Wosowei",
    "Princewill Nanakumor",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Development",
    "Modern Web Applications",
    "Responsive Design",
    "Clean Code",
    "Portfolio",
    "Developer Portfolio",
  ].join(", "),
  authors: [{ name: "Princewill" }],
  creator: "Princewill ",
  publisher: "Princewill",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://princewill-nanakumor-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nanakumor Princewill | Web Developer",
    description:
      "Crafting modern web experiences with clean code and innovative design. Expert in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://princewill-nanakumor-portfolio.vercel.app",
    siteName: "Princewill Portfolio",
    images: [
      {
        url: "/aboutme.gif",
        width: 1200,
        height: 630,
        alt: "Princewill - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Princewill | Frontend Developer",
    description:
      "Crafting modern web experiences with clean code and innovative design. Expert in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/aboutme.gif"],
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
  // verification: {
  //   google: "your-google-verification-code", // Add your Google Search Console verification code
  //   // yandex: "your-yandex-verification-code",
  //   // yahoo: "your-yahoo-verification-code",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />

        {/* Structured Data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Princewill",
              jobTitle: "Frontend Developer",
              description:
                "Crafting modern web experiences with clean code and innovative design",
              url: "https://your-domain.com", // Replace with your actual domain
              sameAs: [
                "https://github.com/your-github", // Replace with your GitHub
                "https://linkedin.com/in/your-linkedin", // Replace with your LinkedIn
                "https://twitter.com/your-twitter", // Replace with your Twitter
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Web Development",
                "Frontend Development",
                "UI/UX Design",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0f172a",
              color: "#f8fafc",
              border: "1px solid #334155",
              borderRadius: "12px",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
