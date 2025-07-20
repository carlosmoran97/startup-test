"use client";

import { Amiko, ABeeZee } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const amiko = Amiko({
  variable: "--font-amiko",
  subsets: ["latin"],
  weight: ['400', '700']
});

const aBeeZee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ['400']
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amiko.variable} ${aBeeZee.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
