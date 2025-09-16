// Lokasi: src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local"; // <-- Kita impor 'localFont'
import "./globals.css";

// --- INI BAGIAN PENTINGNYA ---
// Kita definisikan font lokal kita
const monaSans = localFont({
  src: './fonts/Mona-Sans.ttf',

  display: 'swap',
  variable: '--font-mona-sans', // Kita kasih nama variabel CSS
});
// -----------------------------

export const metadata: Metadata = {
  title: "ChatSakti Dashboard",
  description: "Your AI Agents Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Kita terapkan variabel font-nya di sini
    <html lang="en">
      <body className={`${monaSans.variable} font-sans`}>{children}</body>
    </html>
  );
}