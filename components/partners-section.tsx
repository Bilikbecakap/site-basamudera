"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const partners = [
  { name: "Dana Indonesiana", image: "/images/mitra/danaindonesiana.webp" },
  { name: "Kementerian Kebudayaan Republik Indonesia", image: "/images/mitra/kemenbud.webp" },
  { name: "Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi", image: "/images/mitra/kemenristek.webp" },
  { name: "Kemah Budaya Kaum Muda", image: "/images/mitra/kemahbudaya.webp" },
  { name: "Pemerintah Kabupaten Belitung Timur", image: "/images/mitra/belitungtimur.webp" },
]

export function PartnersSection() {
  return (
    <section id="programs" className="py-20 md:py-32 relative overflow-hidden bg-[#fdfaf3]">
      <div className="absolute inset-0 batik-pattern opacity-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Dukungan <span className="text-ocean">Kelembagaan</span>
          </h2>
          <p className="text-lg text-ink-3 max-w-2xl mx-auto">
            Program kami didukung oleh hibah pemerintah, kemitraan akademik, dan kolaborasi lintas sektor untuk menjaga warisan budaya Indonesia
          </p>
        </motion.div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              title={partner.name}
              className="relative h-16 w-36 md:h-20 md:w-44 grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="176px"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-cream border border-ink/10 rounded-2xl p-5 sm:p-8 md:p-12"
        >
          {/* Gold accent line */}
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
            Bergabung Bersama Kami
          </h3>
          <p className="text-ink-3 mb-8 max-w-xl mx-auto">
            Jadilah bagian dari gerakan pelestarian budaya Indonesia. Kami menyambut kolaborasi dari semua pihak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ocean text-paper hover:bg-ocean-2 rounded-sm tracking-wide">
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-terracotta/40 text-terracotta hover:bg-terracotta/8 rounded-sm tracking-wide">
              Profile Yayasan
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
