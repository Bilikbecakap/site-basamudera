"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


export default function KontakPage() {
  const [form, setForm] = useState({ nama: "", email: "", nomor: "", pesan: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulasi pengiriman (dummy)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main className="min-h-screen paper-texture">
      <Header />

      {/* ── Hero ── */}
      <section className="relative bg-ocean overflow-hidden pt-32 pb-20">
        {/* decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 rounded-full bg-navy/40 blur-2xl pointer-events-none" />

        {/* batik-like top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-terracotta to-gold opacity-60" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-paper leading-tight mb-5"
          >
            Hubungi Kami
            <br />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-paper/60 max-w-xl mx-auto leading-relaxed"
          >
            Punya pertanyaan, ide kolaborasi, atau ingin berkontribusi pada pelestarian budaya Nusantara?
            Jangan ragu untuk menghubungi kami.
          </motion.p>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-14 text-paper" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 h-full"
          >
            <div className="bg-cream border border-ink/8 rounded-2xl p-7 sm:p-10 shadow-sm h-full">
              <h2 className="font-serif text-2xl font-bold text-ink mb-1">Kirim Pesan</h2>
              <p className="text-sm text-ink-4 mb-8">Isi formulir di bawah dan tim kami akan merespons secepatnya.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <CheckCircle2 className="w-14 h-14 text-teal" />
                  <h3 className="font-serif text-xl font-bold text-ink">Pesan Terkirim!</h3>
                  <p className="text-sm text-ink-4 max-w-sm leading-relaxed">
                    Terima kasih, <span className="font-medium text-ink">{form.nama}</span>. Kami telah menerima
                    pesan Anda dan akan menghubungi Anda melalui email dalam 1–2 hari kerja.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-ink/20 text-ink-3 hover:border-ocean hover:text-ocean"
                    onClick={() => { setSubmitted(false); setForm({ nama: "", email: "", nomor: "", pesan: "" }) }}
                  >
                    Kirim Pesan Lain
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nama */}
                  <div className="space-y-1.5">
                    <Label htmlFor="nama" className="text-sm font-medium text-ink-2">
                      Nama Lengkap <span className="text-terracotta">*</span>
                    </Label>
                    <Input
                      id="nama"
                      name="nama"
                      value={form.nama}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama lengkap Anda"
                      className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60"
                    />
                  </div>

                  {/* Email & Nomor */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium text-ink-2">
                        Alamat Email <span className="text-terracotta">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="email@contoh.com"
                        className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="nomor" className="text-sm font-medium text-ink-2">
                        Nomor Telepon
                        <span className="ml-1.5 text-xs font-normal text-ink-4">(opsional)</span>
                      </Label>
                      <Input
                        id="nomor"
                        name="nomor"
                        type="tel"
                        value={form.nomor}
                        onChange={handleChange}
                        placeholder="+62 8xx-xxxx-xxxx"
                        className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60"
                      />
                    </div>
                  </div>

                  {/* Pesan */}
                  <div className="space-y-1.5">
                    <Label htmlFor="pesan" className="text-sm font-medium text-ink-2">
                      Pesan <span className="text-terracotta">*</span>
                    </Label>
                    <Textarea
                      id="pesan"
                      name="pesan"
                      value={form.pesan}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tuliskan pesan, pertanyaan, atau ide kolaborasi Anda di sini…"
                      className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-ocean text-paper hover:bg-ocean-2 tracking-wide px-8 gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                        Mengirim…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8 h-full"
          >
            {/* Cultural Illustration Card */}
            <div className="bg-ocean rounded-2xl overflow-hidden text-paper relative flex flex-col flex-1">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/60 via-terracotta/40 to-gold/60 z-10" />

              {/* Mandala Nusantara SVG */}
              <div className="flex-1 min-h-0 overflow-hidden">
              <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                {/* Background */}
                <rect width="280" height="220" fill="#0c2a3c"/>

                {/* Subtle diagonal parang texture */}
                <g stroke="#b48a4c" strokeWidth="0.5" opacity="0.05">
                  <line x1="-60" y1="0" x2="0" y2="220"/>
                  <line x1="-28" y1="0" x2="32" y2="220"/>
                  <line x1="4" y1="0" x2="64" y2="220"/>
                  <line x1="36" y1="0" x2="96" y2="220"/>
                  <line x1="68" y1="0" x2="128" y2="220"/>
                  <line x1="100" y1="0" x2="160" y2="220"/>
                  <line x1="132" y1="0" x2="192" y2="220"/>
                  <line x1="164" y1="0" x2="224" y2="220"/>
                  <line x1="196" y1="0" x2="256" y2="220"/>
                  <line x1="228" y1="0" x2="288" y2="220"/>
                  <line x1="260" y1="0" x2="320" y2="220"/>
                </g>

                {/* Outer border frame */}
                <rect x="10" y="10" width="260" height="200" rx="4" stroke="#b48a4c" strokeWidth="0.8" fill="none" opacity="0.45"/>
                <rect x="14" y="14" width="252" height="192" rx="2" stroke="#b48a4c" strokeWidth="0.3" fill="none" opacity="0.2"/>

                {/* Corner L-brackets */}
                <polyline points="10,30 10,10 30,10" stroke="#c9a868" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="10" cy="10" r="2.5" fill="#c9a868" opacity="0.7"/>
                <polyline points="270,30 270,10 250,10" stroke="#c9a868" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="270" cy="10" r="2.5" fill="#c9a868" opacity="0.7"/>
                <polyline points="10,190 10,210 30,210" stroke="#c9a868" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="10" cy="210" r="2.5" fill="#c9a868" opacity="0.7"/>
                <polyline points="270,190 270,210 250,210" stroke="#c9a868" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="270" cy="210" r="2.5" fill="#c9a868" opacity="0.7"/>

                {/* Top decorative divider */}
                <line x1="50" y1="22" x2="230" y2="22" stroke="#b48a4c" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="140" cy="22" r="2.5" fill="#b48a4c" opacity="0.55"/>
                <circle cx="50" cy="22" r="1.5" fill="#b48a4c" opacity="0.3"/>
                <circle cx="230" cy="22" r="1.5" fill="#b48a4c" opacity="0.3"/>
                <circle cx="95" cy="22" r="1" fill="#b48a4c" opacity="0.25"/>
                <circle cx="185" cy="22" r="1" fill="#b48a4c" opacity="0.25"/>

                {/* Bottom decorative divider */}
                <line x1="50" y1="198" x2="230" y2="198" stroke="#b48a4c" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="140" cy="198" r="2.5" fill="#b48a4c" opacity="0.55"/>
                <circle cx="50" cy="198" r="1.5" fill="#b48a4c" opacity="0.3"/>
                <circle cx="230" cy="198" r="1.5" fill="#b48a4c" opacity="0.3"/>

                {/* Side wave decorations (traditional sulur motif) */}
                <path d="M 24 82 Q 33 90 24 98 Q 33 106 24 114 Q 33 122 24 130 Q 33 138 24 146" stroke="#b48a4c" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>
                <path d="M 256 82 Q 247 90 256 98 Q 247 106 256 114 Q 247 122 256 130 Q 247 138 256 146" stroke="#b48a4c" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round"/>

                {/* Mandala support rings — center (140, 110) */}
                <circle cx="140" cy="110" r="30" stroke="#b48a4c" strokeWidth="0.4" fill="none" opacity="0.2"/>
                <circle cx="140" cy="110" r="48" stroke="#b48a4c" strokeWidth="0.4" fill="none" opacity="0.15"/>
                <circle cx="140" cy="110" r="63" stroke="#b48a4c" strokeWidth="0.5" fill="none" opacity="0.28"/>
                <circle cx="140" cy="110" r="67" stroke="#b48a4c" strokeWidth="0.3" fill="none" opacity="0.12"/>

                {/* Outer kawung ring — 8 ellipses at r=56, tangential orientation */}
                <ellipse cx="196" cy="110" rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22"/>
                <ellipse cx="180" cy="150" rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(45,180,150)"/>
                <ellipse cx="140" cy="166" rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(90,140,166)"/>
                <ellipse cx="100" cy="150" rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(135,100,150)"/>
                <ellipse cx="84"  cy="110" rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22"/>
                <ellipse cx="100" cy="70"  rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(45,100,70)"/>
                <ellipse cx="140" cy="54"  rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(90,140,54)"/>
                <ellipse cx="180" cy="70"  rx="14" ry="8" fill="#b48a4c" fillOpacity="0.22" transform="rotate(135,180,70)"/>

                {/* Outer lotus petals — 8 petals, same path rotated around center */}
                {/* base petal (→ 0°): tip(180,110) sides(160,101)&(160,119) back(152,110) */}
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(45,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(90,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(135,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(180,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(225,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(270,140,110)"/>
                <path d="M 180 110 L 160 101 L 152 110 L 160 119 Z" fill="#b48a4c" fillOpacity="0.42" transform="rotate(315,140,110)"/>

                {/* Inner petals — 8 terracotta petals, offset 22.5° */}
                {/* base petal (→ 0°): tip(166,110) sides(151,104)&(151,116) back(144,110) */}
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(22.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(67.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(112.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(157.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(202.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(247.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(292.5,140,110)"/>
                <path d="M 166 110 L 151 104 L 144 110 L 151 116 Z" fill="#b35a3a" fillOpacity="0.62" transform="rotate(337.5,140,110)"/>

                {/* Center medallion */}
                <circle cx="140" cy="110" r="13" fill="#b48a4c" fillOpacity="0.5"/>
                <circle cx="140" cy="110" r="9"  fill="#0c2a3c"/>
                <circle cx="140" cy="110" r="4.5" fill="#b48a4c" fillOpacity="0.88"/>
                <circle cx="140" cy="110" r="1.5" fill="#0c2a3c"/>

                {/* Outer ring diamonds — 4 cardinal points (r=65) */}
                <rect x="201" y="106" width="8" height="8" fill="#c9a868" fillOpacity="0.6" transform="rotate(45,205,110)"/>
                <rect x="136" y="171" width="8" height="8" fill="#c9a868" fillOpacity="0.6" transform="rotate(45,140,175)"/>
                <rect x="71"  y="106" width="8" height="8" fill="#c9a868" fillOpacity="0.6" transform="rotate(45,75,110)"/>
                <rect x="136" y="41"  width="8" height="8" fill="#c9a868" fillOpacity="0.6" transform="rotate(45,140,45)"/>

                {/* Outer ring diamonds — 4 diagonal points (r=65) */}
                <rect x="183" y="153" width="6" height="6" fill="#c9a868" fillOpacity="0.4" transform="rotate(45,186,156)"/>
                <rect x="91"  y="153" width="6" height="6" fill="#c9a868" fillOpacity="0.4" transform="rotate(45,94,156)"/>
                <rect x="91"  y="61"  width="6" height="6" fill="#c9a868" fillOpacity="0.4" transform="rotate(45,94,64)"/>
                <rect x="183" y="61"  width="6" height="6" fill="#c9a868" fillOpacity="0.4" transform="rotate(45,186,64)"/>

                {/* Scattered ambient dots */}
                <circle cx="48"  cy="46"  r="1"   fill="#b48a4c" opacity="0.45"/>
                <circle cx="64"  cy="36"  r="1.5" fill="#b48a4c" opacity="0.35"/>
                <circle cx="38"  cy="60"  r="0.8" fill="#b48a4c" opacity="0.3"/>
                <circle cx="232" cy="46"  r="1"   fill="#b48a4c" opacity="0.45"/>
                <circle cx="216" cy="36"  r="1.5" fill="#b48a4c" opacity="0.35"/>
                <circle cx="242" cy="60"  r="0.8" fill="#b48a4c" opacity="0.3"/>
                <circle cx="48"  cy="178" r="1"   fill="#b48a4c" opacity="0.45"/>
                <circle cx="64"  cy="188" r="1.5" fill="#b48a4c" opacity="0.35"/>
                <circle cx="232" cy="178" r="1"   fill="#b48a4c" opacity="0.45"/>
                <circle cx="216" cy="188" r="1.5" fill="#b48a4c" opacity="0.35"/>
              </svg>
              </div>

              {/* Contact info */}
              <div className="px-6 py-5 flex flex-col gap-3 border-t border-paper/10 shrink-0">
                <div className="flex items-center gap-2.5 text-sm text-paper/75">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span>info@basamudera.or.id</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-paper/75">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Kabupaten Bekasi, Jawa Barat</span>
                </div>
              </div>
            </div>


          </motion.aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
