"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart, Building2, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const rekening = [
  { bank: "Bank Mandiri", norek: "123-00-0251120-4", atas: "Yayasan Basamudera Budaya Teknologi Indonesia" },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded text-ink-4 hover:text-ocean transition-colors"
      title="Salin nomor rekening"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-teal" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  )
}

export default function DukungKamiPage() {
  return (
    <main className="min-h-screen paper-texture">
      <Header />

      {/* ── Hero ── */}
      <section className="relative bg-ocean overflow-hidden pt-32 pb-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-navy/40 blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-terracotta to-gold opacity-60" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-paper leading-tight mb-5"
          >
            Dukung Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-paper/60 max-w-xl mx-auto leading-relaxed"
          >
            Setiap dukungan Anda adalah nyala lentera bagi budaya dan bahasa daerah yang hampir padam.
            Bersama, kita rawat warisan leluhur untuk generasi mendatang.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14 text-paper" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Donasi ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#fdfaf3]">
        <div className="absolute inset-0 batik-pattern opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/4 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — penjelasan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase text-terracotta font-medium mb-4">Donasi</p>
              <div className="w-full h-px bg-ink/10 mb-8" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-6 leading-snug">
                Salurkan Dukungan Anda<br />
                <span className="text-ocean">untuk Bahasa Nusantara</span>
              </h2>
              <p className="text-ink-3 leading-relaxed mb-5">
                Donasi Anda digunakan sepenuhnya untuk pengembangan teknologi preservasi bahasa daerah,
                produksi konten edukatif, dan kegiatan komunitas Basamudera di seluruh Indonesia.
              </p>
              <p className="text-ink-4 leading-relaxed mb-8">
                Setiap rupiah yang Anda berikan berkontribusi langsung pada upaya mendokumentasikan budaya
                bahasa-bahasa daerah sebelum hilang ditelan zaman.
              </p>

              <div className="flex flex-col gap-3 border-t border-ink/8 pt-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-terracotta" />
                  </span>
                  <p className="text-sm text-ink-4">
                    Yayasan terdaftar resmi —{" "}
                    <Link href="/legalitas" className="text-ocean hover:underline underline-offset-2">
                      lihat legalitas
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — rekening */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {rekening.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                  className="bg-cream border border-ink/8 rounded-2xl px-6 py-5 shadow-sm flex items-center gap-4"
                >
                  <span className="w-10 h-10 rounded-xl bg-ocean/10 border border-ocean/15 flex items-center justify-center shrink-0">
                    <Building2 className="w-4.5 h-4.5 text-ocean" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink-4 uppercase tracking-widest mb-0.5">{r.bank}</p>
                    <div className="flex items-center">
                      <span className="font-mono text-lg font-semibold text-ink tracking-wider">{r.norek}</span>
                      <CopyButton text={r.norek} />
                    </div>
                    <p className="text-xs text-ink-4 mt-0.5">a.n. {r.atas}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className="bg-ocean/5 border border-ocean/15 rounded-2xl px-6 py-5"
              >
                <p className="text-sm text-ink-3 leading-relaxed mb-4">
                  Setelah transfer, mohon konfirmasi donasi Anda agar kami dapat mencatat
                  dan mengirimkan tanda terima.
                </p>
                <Button
                  asChild
                  className="w-full bg-ocean text-paper hover:bg-ocean-2 tracking-wide gap-2"
                >
                  <Link href="/kontak">Konfirmasi via Kontak</Link>
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
