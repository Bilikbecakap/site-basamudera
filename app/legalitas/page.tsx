"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LegalitasPage() {
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
            Legalitas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-paper/60 max-w-xl mx-auto leading-relaxed"
          >
            Dokumen dan status hukum resmi Yayasan Basamudera Budaya Teknologi Indonesia.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14 text-paper" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Legalitas ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#fdfaf3]">
        <div className="absolute inset-0 batik-pattern opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/4 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase text-gold-2 font-medium mb-4">Status Hukum</p>
              <div className="w-full h-px bg-ink/10 mb-8" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-6 leading-snug">
                Yayasan Basamudera Budaya Teknologi Indonesia
              </h2>
              <p className="text-ink-3 leading-relaxed mb-5">
                Resmi terdaftar sebagai badan hukum pada{" "}
                <span className="font-medium text-ink">26 April 2024</span>, berdasarkan Akta Notaris
                Nomor 84 di hadapan Notaris{" "}
                <span className="font-medium text-ink">Tunjung Widhi Wasesa Suwadji, S.H., M.Kn.</span>
              </p>
              <p className="text-ink-4 leading-relaxed mb-8">
                Pengesahan badan hukum ditetapkan oleh Kementerian Hukum dan Hak Asasi Manusia
                Republik Indonesia dengan nomor{" "}
                <span className="font-medium text-ink">AHU-0006287.AH.01.04.Tahun 2024</span>.
              </p>

              <div className="flex flex-col gap-4 border-t border-ink/8 pt-6">
                {[
                  { label: "Email",    value: "info@basamudera.or.id" },
                  { label: "Domisili", value: "Kabupaten Bekasi, Jawa Barat" },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4">
                    <span className="text-xs uppercase tracking-wide text-ink-4 w-20 shrink-0">{item.label}</span>
                    <span className="text-sm font-medium text-ink">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — document preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/20 -z-10" />

              <div className="rounded-2xl overflow-hidden shadow-lg shadow-ink/10 max-w-xs mx-auto">
                <Image
                  src="/images/badan-hukum.webp"
                  alt="Dokumen Badan Hukum Yayasan Basamudera"
                  width={400}
                  height={566}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
