import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  keywords: ["Next.js", "React", "JavaScript", "learning", "playground"],
  description: "Learning NextJS core concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen`}
      >
        <Navbar />
        <main className="h-screen max-h-[800px]">{children}</main>

        <footer className="text-center bg-slate-300">
          Awesome NextJS project
        </footer>
      </body>
    </html>
  );
}
