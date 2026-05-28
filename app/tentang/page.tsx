"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TentangPage() {
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
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-paper/60 max-w-xl mx-auto leading-relaxed"
          >
            Yayasan yang berkomitmen melestarikan bahasa daerah Nusantara melalui teknologi digital,
            digerakkan oleh semangat kaum muda.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14 text-paper" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Siapa Kami ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#fdfaf3]">
        <div className="absolute inset-0 batik-pattern opacity-35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/4 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase text-terracotta font-medium mb-3">Siapa Kami</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
                Menjaga Bahasa,<br />
                <span className="text-ocean">Merawat Identitas</span>
              </h2>
              <p className="text-ink-4 leading-relaxed mb-5">
                Basamudera adalah sebuah yayasan yang berkomitmen untuk mempertahankan keberlanjutan
                bahasa daerah melalui pemanfaatan teknologi digital.
                Basamudera digerakan oleh kaum muda yang berasal dari berbagai latar belakang asal daerah,
                keilmuan dan bidang keahlian yang berbeda-beda — mulai dari bahasa, teknologi, pendidikan,
                hukum hingga keuangan. Basamudera hadir dari program Kemah Budaya Kaum Muda (KBKM) 2023
                sebagai ruang inkubator yang mewadahi inisiatif kaum muda dalam menciptakan aplikasi
                dan prakarya, serta menjadi jembatan yang mempertemukan antara gagasan dengan
                eksperimentasi di bidang STEAM (Science, Technology, Engineering, Art, Mathematics).
              </p>
                
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-ink/10">
                <Image
                  src="/images/hero-1.webp"
                  alt="Kegiatan Yayasan Basamudera"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-terracotta/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Makna Nama ── */}
      <section className="py-20 md:py-28 bg-paper-2/50 relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ocean/4 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-widest uppercase text-gold-2 font-medium mb-3">Makna Nama</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
              Di Balik Nama Basamudera
            </h2>
            <p className="text-ink-4 max-w-md mx-auto text-sm leading-relaxed">
              Sebuah mononim yang merangkum semangat dan cita-cita kami dalam satu kata
            </p>
          </motion.div>

          {/* Etymology cards */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream border border-ink/8 rounded-2xl p-8 text-center flex-1 max-w-sm shadow-sm"
            >
              <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-2 mb-3">Basa</p>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <p className="text-xs uppercase tracking-widest text-ink-4 mb-2.5">Sansekerta</p>
              <p className="text-ink-3 text-sm leading-relaxed">
                Bahasa — medium komunikasi yang menghubungkan manusia dengan budaya dan identitasnya
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center justify-center self-center"
            >
              <span className="text-ink-4 text-4xl font-thin leading-none select-none">+</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-cream border border-ink/8 rounded-2xl p-8 text-center flex-1 max-w-sm shadow-sm"
            >
              <p className="font-serif text-5xl sm:text-6xl font-bold text-gold-2 mb-3">Samudera</p>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <p className="text-xs uppercase tracking-widest text-ink-4 mb-2.5">Lautan Luas</p>
              <p className="text-ink-3 text-sm leading-relaxed">
                Lautan yang tak berbatas — simbol keluasan dan kekayaan bahasa-bahasa daerah Indonesia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="flex items-center justify-center self-center"
            >
              <span className="text-ink-4 text-4xl font-thin leading-none select-none">=</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-ocean border border-ocean rounded-2xl p-8 text-center flex-1 max-w-sm shadow-sm"
            >
              <p className="font-serif text-4xl sm:text-5xl font-bold text-paper mb-3">Basamudera</p>
              <div className="w-8 h-px bg-paper/30 mx-auto mb-4" />
              <p className="text-xs uppercase tracking-widest text-paper/50 mb-2.5">Mononim</p>
              <p className="text-paper/75 text-sm leading-relaxed">
                Bahasa yang seluas samudera — menggambarkan kekayaan dan tekad kami untuk melestarikannya
              </p>
            </motion.div>
          </div>

          {/* Philosophy quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-10 h-px bg-ink/12 mx-auto mb-6" />
            <p className="text-ink-3 text-base sm:text-lg leading-relaxed font-serif italic">
              &ldquo;Demikian yang membawa kami sebagai Basamudera ke titik ini, dimana kami akan
              mewujudkan satu demi satu cita bangsa dalam merawat budaya agar kekal dan tak
              usai oleh pergolakan budaya asing dunia.&rdquo;
            </p>
            <div className="w-10 h-px bg-ink/12 mx-auto mt-6" />
          </motion.blockquote>
        </div>
      </section>

      <Footer />
    </main>
  )
}
