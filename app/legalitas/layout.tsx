import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legalitas",
  description: "Dokumen dan status hukum resmi Yayasan Basamudera Budaya Teknologi Indonesia, terdaftar berdasarkan Akta Notaris sejak 26 April 2024.",
  openGraph: {
    title: "Legalitas | Basamudera",
    description: "Dokumen dan status hukum resmi Yayasan Basamudera Budaya Teknologi Indonesia, terdaftar berdasarkan Akta Notaris sejak 26 April 2024.",
  },
}

export default function LegalitasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
