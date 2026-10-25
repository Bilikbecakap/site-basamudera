import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Masuk — Basamudera",
  description: "Halaman masuk internal Yayasan Basamudera. Khusus pengguna terdaftar.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
