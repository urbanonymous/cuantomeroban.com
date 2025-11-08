import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "¿Cuánto me roban? - Calculadora de Impuestos España",
  description: "Descubre cuánto pagas en impuestos en España según tu salario neto. Calculadora de IRPF y Seguridad Social actualizada para 2024.",
  keywords: ["impuestos", "España", "IRPF", "Seguridad Social", "calculadora", "salario", "neto", "bruto"],
  authors: [{ name: "cuantomeroban.com" }],
  openGraph: {
    title: "¿Cuánto me roban? - Calculadora de Impuestos España",
    description: "Descubre cuánto pagas en impuestos en España según tu salario neto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
