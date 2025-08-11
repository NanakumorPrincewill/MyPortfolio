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
  title: "Princewill | Frontend Developer",
  description:
    "Crafting modern web experiences with clean code and innovative design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
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
