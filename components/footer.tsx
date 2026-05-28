"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper relative overflow-hidden">

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
              <div>
                <span className="font-serif text-xl font-bold text-paper">BASAMUDERA</span>
              </div>
            </div>
            <p className="text-paper/60 leading-relaxed mb-6 max-w-md">
              Yayasan Basamudera Budaya Teknologi Indonesia berkomitmen melestarikan warisan budaya Nusantara melalui inovasi teknologi digital untuk generasi mendatang.
            </p>

            {/* Newsletter */}
            <div className="bg-paper/6 border border-paper/10 p-4 rounded-xl">
              <p className="text-sm font-medium text-paper/80 mb-3">Dapatkan informasi terbaru dari kami</p>
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
                  Kabupaten Bekasi,<br />
                  Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-paper/55 text-sm">info@basamudera.or.id</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/basamudera.id/" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Youtube, label: "Youtube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
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
            © 2026 Yayasan Basamudera Budaya Teknologi Indonesia. Hak cipta dilindungi.
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
