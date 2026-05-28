"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Proyek", href: "#" },
  { name: "Tentang", href: "#" },
  { name: "Kontak", href: "#" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#fdfaf3]/95 backdrop-blur-md border-b border-ink/10 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo/logo-basamudera.png"
              alt="Basamudera"
              width={200}
              height={100}
              className={`h-11 md:h-13 w-[88px] md:w-[104px] object-contain transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide font-medium transition-all duration-300 relative group pb-0.5 ${
                  pathname === item.href
                    ? scrolled ? "text-ocean" : "text-white"
                    : scrolled
                    ? "text-ink-3 hover:text-ocean"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] transition-all duration-300 ${
                    scrolled ? "bg-terracotta" : "bg-white"
                  } ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}

            <div className={`h-4 w-px mx-1 transition-colors duration-300 ${scrolled ? "bg-ink/15" : "bg-white/30"}`} />

            <Button
              asChild
              size="sm"
              className={`tracking-wide px-5 rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-ocean text-paper hover:bg-ocean-2"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/40 hover:bg-white/25"
              }`}
            >
              <Link href="#">Dukung Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-ink-3 hover:text-ink" : "text-white/80 hover:text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#fdfaf3] border-t border-ink/10 overflow-hidden"
          >
            <nav className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-wide font-medium transition-colors py-3 border-b border-ink/8 last:border-0 ${
                    pathname === item.href
                      ? "text-ocean"
                      : "text-ink-3 hover:text-ocean"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-5 bg-ocean text-paper hover:bg-ocean-2 w-full rounded-sm tracking-wide"
              >
                <Link href="#" onClick={() => setIsOpen(false)}>
                  Dukung Kami
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
