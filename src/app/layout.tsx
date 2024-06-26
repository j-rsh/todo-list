"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';
import client from './graphql/client';
import { ApolloProvider } from '@apollo/client';

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-violet-300">
      <ApolloProvider client={client}>{children}</ApolloProvider>
        </body>
    </html>
  );
}
