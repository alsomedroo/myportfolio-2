import { Inter } from "next/font/google";
import "./globals.css";
//import Below from "@/components/belowheader";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "ALSOMEDROO Dhruv Jain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}