"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background">
        <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-16 text-ink" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-ocean flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-paper">
                  <path
                    fill="currentColor"
                    d="M20 5c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 4c2.5 0 4.5 2 4.5 4.5S22.5 18 20 18s-4.5-2-4.5-4.5S17.5 9 20 9zm-8 13c0-2.5 4-4 8-4s8 1.5 8 4v2H12v-2z"
                  />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-paper">BASAMUDERA</span>
                <p className="text-xs text-paper/50">Budaya • Teknologi • Indonesia</p>
              </div>
            </div>
            <p className="text-paper/60 leading-relaxed mb-6 max-w-md">
              Yayasan Basamudera Budaya Teknologi Indonesia berkomitmen melestarikan warisan budaya Nusantara melalui inovasi teknologi digital untuk generasi mendatang.
            </p>

            {/* Newsletter */}
            <div className="bg-paper/6 border border-paper/10 p-4 rounded-xl">
              <p className="text-sm font-medium text-paper/80 mb-3">Berlangganan buletin kami</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="email@contoh.com"
                  className="bg-paper/8 border-paper/15 text-paper placeholder:text-paper/40 focus-visible:ring-gold/50"
                />
                <Button className="bg-terracotta text-paper hover:bg-terracotta-2 shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-paper/90 mb-6 tracking-wide text-sm uppercase">Tautan</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Program", "Proyek", "Donasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-paper/55 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-paper/90 mb-6 tracking-wide text-sm uppercase">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-paper/55 text-sm">
                  Jl. Kebudayaan No. 123<br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-paper/55 text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-paper/55 text-sm">info@basamudera.or.id</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "Youtube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-paper/8 border border-paper/10 rounded-full flex items-center justify-center hover:bg-terracotta hover:border-terracotta transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper/40 text-sm text-center md:text-left">
            © 2024 Yayasan Basamudera Budaya Teknologi Indonesia. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-paper/40">
            <a href="#" className="hover:text-gold transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gold transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
