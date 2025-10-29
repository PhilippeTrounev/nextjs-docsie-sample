import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docsie Next.js Examples",
  description: "Next.js integration examples for Docsie documentation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold cursor-pointer">Docsie Next.js Examples</h1>
              </Link>
              <div className="flex gap-6">
                <Link href="/public-docs" className="cursor-pointer hover:underline font-medium text-white">
                  Public Docs
                </Link>
                <Link href="/secure-docs" className="cursor-pointer hover:underline font-medium text-white">
                  Secure Docs
                </Link>
                <Link href="/inapp-help" className="cursor-pointer hover:underline font-medium text-white">
                  In-App Help
                </Link>
              </div>
            </div>
          </nav>

          <main className="flex-1 bg-gray-50">{children}</main>

          <footer className="bg-gray-800 text-gray-400 p-6 text-center">
            <p>
              Docsie Documentation Platform |{" "}
              <a
                href="https://discord.gg/rptfXQnq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Discord
              </a>{" "}
              |{" "}
              <a
                href="mailto:hello@docsie.io"
                className="text-blue-400 hover:underline"
              >
                hello@docsie.io
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
