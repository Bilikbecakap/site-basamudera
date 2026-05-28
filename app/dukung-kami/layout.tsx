import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dukung Kami",
  description: "Salurkan donasi Anda untuk mendukung pelestarian budaya dan bahasa daerah Nusantara bersama Yayasan Basamudera Budaya Teknologi Indonesia.",
  openGraph: {
    title: "Dukung Kami | Basamudera",
    description: "Salurkan donasi Anda untuk mendukung pelestarian budaya dan bahasa daerah Nusantara bersama Yayasan Basamudera.",
  },
}

export default function DukungKamiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
