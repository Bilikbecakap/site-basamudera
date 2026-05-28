import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Punya pertanyaan, ide kolaborasi, atau ingin berkontribusi pada pelestarian budaya Nusantara? Hubungi Yayasan Basamudera melalui formulir kontak kami.",
  openGraph: {
    title: "Hubungi Kami | Basamudera",
    description: "Punya pertanyaan atau ingin berkolaborasi? Hubungi Yayasan Basamudera melalui formulir kontak kami.",
  },
}

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
