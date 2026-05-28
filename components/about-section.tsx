"use client"

import { motion } from "framer-motion"
import { Heart, Globe, Users, BookMarked } from "lucide-react"

const features = [
  {
    icon: BookMarked,
    title: "Digitalisasi Naskah",
    description: "Mengubah manuskrip kuno dan lontar tradisional menjadi arsip digital yang dapat diakses semua orang.",
    iconBg: "bg-ocean/8",
    iconColor: "text-ocean",
    hoverBg: "group-hover:bg-ocean/14",
  },
  {
    icon: Globe,
    title: "Preservasi Bahasa",
    description: "Mendokumentasikan bahasa daerah Indonesia sebelum punah dengan teknologi rekam modern.",
    iconBg: "bg-terracotta/10",
    iconColor: "text-terracotta",
    hoverBg: "group-hover:bg-terracotta/18",
  },
  {
    icon: Users,
    title: "Pemberdayaan Komunitas",
    description: "Melibatkan masyarakat lokal sebagai penjaga dan penerus tradisi budaya mereka sendiri.",
    iconBg: "bg-gold/12",
    iconColor: "text-gold-2",
    hoverBg: "group-hover:bg-gold/20",
  },
  {
    icon: Heart,
    title: "Akses Terbuka",
    description: "Menyediakan akses gratis ke seluruh arsip digital untuk pendidikan dan penelitian.",
    iconBg: "bg-ocean/8",
    iconColor: "text-ocean",
    hoverBg: "group-hover:bg-ocean/14",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-[#fdfaf3]">
      {/* Batik pattern background */}
      <div className="absolute inset-0 batik-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta/4 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
              Menjembatani <span className="text-terracotta">Tradisi</span> dan <span className="text-ocean">Inovasi</span>
            </h2>
            <p className="text-base sm:text-lg text-ink-3 leading-relaxed mb-6">
              Yayasan Basamudera Budaya Teknologi Indonesia didirikan dengan visi melestarikan kekayaan budaya Nusantara melalui pendekatan teknologi modern. Kami percaya bahwa warisan budaya adalah aset berharga yang harus dijaga untuk generasi mendatang.
            </p>
            <p className="text-ink-4 leading-relaxed mb-8">
              Dengan menggabungkan kearifan lokal dan teknologi digital, kami menciptakan platform dan program yang memungkinkan masyarakat untuk belajar, berbagi, dan melestarikan bahasa, seni, dan tradisi mereka.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-cream p-6 rounded-2xl border border-ink/10 hover:border-ink/20 hover:shadow-lg hover:shadow-ink/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.iconBg} ${feature.hoverBg} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-3">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
