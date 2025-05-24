import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Acrux Code Solutions",
  description: "Equipo apasionado por la tecnología, especializados en crear sitios web y sistemas digitales a medida",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Header />
        <main>{children}</main>
        <Footer />
          
      </body>
    </html>
  );
}
