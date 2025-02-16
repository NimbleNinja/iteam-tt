import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import Header from "@/components/Header";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "ITeam jobs task",
  description: "Jobs search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex flex-grow flex-col container mx-auto p-4">
            {children}
          </main>

          <footer className="footer items-center p-4 bg-base-200 text-base-content">
            <div className="container mx-auto text-center">
              <p>© 2025 My App. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
