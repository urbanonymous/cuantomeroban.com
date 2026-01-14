import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "¿Cuánto me roban? - Calculadora de Impuestos España",
  description:
    "Descubre cuánto pagas en impuestos en España según tu salario neto. Calculadora de IRPF y Seguridad Social con contexto para expats.",
  keywords: [
    "impuestos",
    "España",
    "IRPF",
    "Seguridad Social",
    "IVA",
    "calculadora",
    "salario",
    "neto",
    "bruto",
    "expats"
  ],
  authors: [{ name: "cuantomeroban.com" }],
  openGraph: {
    title: "¿Cuánto me roban? - Calculadora de Impuestos España",
    description:
      "Descubre cuánto pagas en impuestos en España según tu salario neto",
    type: "website",
    locale: "es_ES",
    siteName: "Cuanto me roban"
  },
  other: {
    "geo.region": "ES",
    "geo.placename": "España"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
