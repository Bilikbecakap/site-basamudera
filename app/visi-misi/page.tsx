"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const misi = [
  {
    no: "01",
    title: "Terjemahan Berkualitas",
    desc: "Memberikan proyek terjemahan yang akurat dan berkualitas tinggi dari bahasa Indonesia ke bahasa daerah untuk memudahkan komunikasi antara dua budaya.",
  },
  {
    no: "02",
    title: "Pendokumentasian Bahasa Daerah",
    desc: "Membangun dan memelihara kamus bahasa yang komprehensif dan menggali kekayaan linguistik dari bahasa daerah untuk generasi masa depan.",
  },
  {
    no: "03",
    title: "Infografis yang Mendidik",
    desc: "Membuat dan menampilkan infografis yang informatif dan menarik tentang geografi, sejarah, budaya, dan destinasi wisata daerah untuk memperluas pengetahuan.",
  },
  {
    no: "04",
    title: "Pendukung Pendidikan",
    desc: "Menyediakan sumber daya yang berguna bagi pendidik, peneliti, dan pelajar untuk memahami dan mempelajari bahasa dan budaya lebih dalam.",
  },
  {
    no: "05",
    title: "Kemudahan Akses",
    desc: "Memastikan proyek digital mudah diakses oleh semua orang yang ingin memahami dan berkomunikasi dalam bahasa daerah.",
  },
  {
    no: "06",
    title: "Privasi & Keamanan",
    desc: "Menyediakan lingkungan yang aman dan menghormati privasi pengguna dalam setiap penggunaan proyek digital kami.",
  },
  {
    no: "07",
    title: "Kontinuitas Pengembangan",
    desc: "Melakukan pemeliharaan berkala untuk memastikan proyek tetap relevan, up-to-date, dan memberikan nilai tambah yang berkelanjutan.",
  },
  {
    no: "08",
    title: "Kemitraan Budaya",
    desc: "Membangun kemitraan dengan komunitas lokal dan kelompok budaya untuk mendukung dan mempromosikan warisan budaya mereka.",
  },
]

const fungsi = [
  {
    label: "Sosial",
    points: [
      "Mendorong kolaborasi antar sektoral dalam pemajuan kebudayaan melalui bahasa dengan pendekatan proyek bahasa dan budaya sebagai sarana pemersatu antar elemen masyarakat, pelaku kebudayaan, institusi pendidikan, dan OPD.",
      "Meningkatkan kebanggaan dan identitas budaya masyarakat lokal terhadap warisan bahasa daerah mereka.",
      "Memperkuat jaringan sosial antara generasi muda dan lansia dalam penggunaan bahasa daerah.",
      "Mendorong inklusi sosial dengan memberdayakan komunitas untuk memelihara dan mengembangkan budaya lokal yang berkelanjutan.",
      "Menyediakan platform bagi masyarakat untuk berbagi pengetahuan dan pengalaman budaya, mempererat solidaritas antar warga.",
    ],
  },
  {
    label: "Budaya",
    points: [
      "Meningkatkan partisipasi pelaku budaya untuk menyalurkan pengetahuannya dari satu generasi ke generasi berikutnya melalui platform bilikbecakap.",
      "Melestarikan dan mengembangkan penggunaan bahasa daerah sebagai sarana ekspresi seni dan budaya lokal seperti seni pertunjukan, musik tradisional, dan sastra.",
      "Mendorong pemahaman dan apresiasi terhadap keberagaman budaya di Indonesia",
      "Menjadi landasan bagi generasi muda untuk memahami dan mempertahankan warisan budaya leluhur mereka.",
    ],
  },
  {
    label: "Pendidikan",
    points: [
      "Meningkatkan literasi bahasa daerah di kalangan siswa dan mahasiswa melalui aplikasi bahasa dan budaya sebagai media pembelajaran yang interaktif.",
      "Memperkaya kurikulum pendidikan lokal dengan pengetahuan tentang bahasa dan budaya yang bersumber dari praktisi lokal, tenaga pendidik, kelompok kerja guru, dan pelaku budaya.",
      "Meningkatkan partisipasi aktif dari kalangan tenaga pendidik dalam pembuatan materi pembelajaran berbasis digital untuk muatan lokal.",
      "Mendorong minat belajar siswa terhadap bahasa daerah dengan pembelajaran yang inovatif dan menyenangkan.",
    ],
  },
  {
    label: "Pariwisata Daerah",
    points: [
      "Menciptakan aplikasi bahasa dan budaya sebagai sarana informasi pariwisata dan kebudayaan bagi wisatawan maupun para peneliti.",
      "Meningkatkan daya tarik pariwisata dengan menyediakan informasi yang lebih akurat dan mendalam tentang budaya dan sejarah lokal.",
      "Memfasilitasi interaksi langsung yang lebih mudah antara wisatawan serta peneliti lokal dan internasional dengan komunitas lokal melalui fitur pengenalan suara di translator.",
    ],
  },
  {
    label: "Ekonomi",
    points: [
      "Memberikan dorongan ekonomi dengan mendukung UMKM lokal dalam meningkatkan visibilitas dan aksesibilitas produk dan jasa mereka kepada wisatawan luar daerah.",
      "Membuka peluang baru dalam industri kreatif dan budaya lokal, seperti pembuatan konten digital dan layanan terkait penggunaan bahasa daerah.",
      "Meningkatkan pendapatan dan kesejahteraan ekonomi masyarakat lokal, terutama yang terlibat dalam industri pariwisata, pelaku seni, dan kerajinan berbasis budaya.",
    ],
  },
]

export default function VisiMisiPage() {
  const [openFungsi, setOpenFungsi] = useState<number | null>(null)

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
            Visi & Misi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-paper/60 max-w-xl mx-auto leading-relaxed"
          >
            Landasan arah perjuangan kami dalam melestarikan bahasa dan budaya Nusantara
            untuk generasi yang akan datang.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14 text-paper" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Visi & Misi ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#fdfaf3]">
        <div className="absolute inset-0 batik-pattern opacity-35 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-xs tracking-widest uppercase text-gold-2 font-semibold mb-4">Visi</p>
            <div className="w-full h-px bg-ink/10 mb-8" />
            <p className="font-serif text-xl sm:text-2xl text-ink-2 leading-relaxed italic">
              Menjadi wadah yang mendorong kemajuan budaya lewat digital teknologi unggulan dalam
              menjembatani pemahaman, apresiasi, dan komunikasi antara bahasa Indonesia dan bahasa
              Daerah, serta menjadi sumber daya utama untuk memperkaya pengetahuan budaya.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-gold-2 font-semibold mb-4">Misi</p>
            <div className="w-full h-px bg-ink/10 mb-8" />

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0">
              {misi.map((item, i) => (
                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-5 py-7 border-b border-ink/8"
                >
                  <span className="font-serif text-2xl font-bold text-gold/50 leading-none pt-0.5 shrink-0 w-8 text-right">
                    {item.no}
                  </span>
                  <div>
                    <p className="font-semibold text-ink mb-1.5 leading-snug">{item.title}</p>
                    <p className="text-sm text-ink-4 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tujuan & Fungsi ── */}
      <section className="py-20 md:py-28 bg-paper-2/50 relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-ocean/4 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

          {/* Tujuan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-xs tracking-widest uppercase text-gold-2 font-semibold mb-4">Tujuan</p>
            <div className="w-full h-px bg-ink/10 mb-8" />
            <p className="text-ink-3 text-base leading-relaxed">
              Pelestarian bahasa dan budaya menjadi fokus utama yayasan dalam melestarikan dan memajukan
              bahasa daerah serta budaya. Tujuan ini mencakup penekanan pada karakteristik linguistik dan
              aspek budaya yang unik, dengan harapan bahwa yayasan akan menjadi instrumen penting dalam
              menjaga keberlanjutan dan vitalitas elemen-elemen kultural di Indonesia.
            </p>
          </motion.div>

          {/* Fungsi */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase text-gold-2 font-semibold mb-4">Fungsi</p>
            <div className="w-full h-px bg-ink/10 mb-2" />

            {fungsi.map((item, i) => {
              const isOpen = openFungsi === i
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="border-b border-ink/8"
                >
                  <button
                    onClick={() => setOpenFungsi(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-sm text-gold/60 w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-semibold text-base transition-colors duration-200 ${isOpen ? "text-ocean" : "text-ink-2 group-hover:text-ink"}`}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-ocean" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pl-10 pb-6 flex flex-col gap-3">
                          {item.points.map((point, j) => (
                            <li key={j} className="flex gap-3 text-sm text-ink-4 leading-relaxed">
                              <span className="mt-2 w-1 h-1 rounded-full bg-ink/25 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
