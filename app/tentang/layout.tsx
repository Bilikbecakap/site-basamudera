import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil dan sejarah Yayasan Basamudera — yayasan yang berkomitmen melestarikan budaya dan bahasa daerah Nusantara melalui teknologi digital, digerakkan oleh semangat kaum muda.",
  openGraph: {
    title: "Tentang Kami | Basamudera",
    description: "Profil dan sejarah Yayasan Basamudera — yayasan yang berkomitmen melestarikan budaya dan bahasa daerah Nusantara melalui teknologi digital.",
  },
}

export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
