import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visi & Misi",
  description: "Landasan arah perjuangan Yayasan Basamudera dalam melestarikan bahasa dan budaya Nusantara untuk generasi yang akan datang.",
  openGraph: {
    title: "Visi & Misi | Basamudera",
    description: "Landasan arah perjuangan Yayasan Basamudera dalam melestarikan bahasa dan budaya Nusantara untuk generasi yang akan datang.",
  },
}

export default function VisiMisiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
