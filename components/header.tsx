"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Info, Eye, Scale, Newspaper, BookOpen, Library, Film } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type SubItem = { name: string; desc: string; href: string; icon: React.ElementType }
type NavItemLink     = { name: string; href: string; children?: undefined }
type NavItemDropdown = { name: string; href?: undefined; children: SubItem[] }
type NavItem = NavItemLink | NavItemDropdown

function isDropdown(item: NavItem): item is NavItemDropdown {
  return Array.isArray((item as NavItemDropdown).children)
}

const navItems: NavItem[] = [
  { name: "Beranda", href: "/" },
  {
    name: "Tentang",
    children: [
      { name: "Tentang Kami",  desc: "Profil dan sejarah yayasan",          href: "/tentang", icon: Info      },
      { name: "Visi & Misi",   desc: "Arah dan tujuan perjuangan kami",     href: "/visi-misi", icon: Eye       },
      { name: "Legalitas",     desc: "Badan hukum dan dokumen resmi",       href: "/legalitas", icon: Scale     },
    ],
  },
  {
    name: "Publikasi",
    children: [
      { name: "Berita",        desc: "Kabar terkini yayasan",         href: "#", icon: Newspaper },
      { name: "Artikel",       desc: "Tulisan mendalam tentang budaya",     href: "#", icon: BookOpen  },
      { name: "Koleksi Buku",  desc: "Pustaka digital yayasan",             href: "#", icon: Library   },
      { name: "Arsip Budaya",  desc: "Foto, video, dan dokumentasi",        href: "#", icon: Film      },
    ],
  },
  { name: "Proyek", href: "#" },
  { name: "Kontak", href: "/kontak" },
]

function DropdownMenu({
  items,
  scrolled,
  onClose,
}: {
  items: SubItem[]
  scrolled: boolean
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-cream border border-ink/10 rounded-xl shadow-[0_8px_32px_-4px_rgba(22,19,16,0.18)] overflow-hidden z-50"
    >
      {/* Tip arrow */}
      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-cream border-t border-l border-ink/10 rotate-45" />

      <div className="py-2">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3 px-4 py-3 hover:bg-paper-2/60 transition-colors group"
            >
              <span className="mt-0.5 w-7 h-7 rounded-lg bg-paper-2 border border-ink/8 flex items-center justify-center shrink-0 group-hover:bg-gold/15 group-hover:border-gold/20 transition-colors">
                <Icon className="w-3.5 h-3.5 text-ink-4 group-hover:text-gold transition-colors" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink group-hover:text-ocean transition-colors">
                  {item.name}
                </span>
                <span className="block text-xs text-ink-4 mt-0.5">{item.desc}</span>
              </span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  function openDropdown(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(name)
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfaf3]/95 backdrop-blur-md border-b border-ink/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo/logo-basamudera.webp"
              alt="Basamudera"
              width={200}
              height={100}
              className={`h-11 md:h-13 w-[88px] md:w-[104px] object-contain transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map((item) => {
              const isActive = "href" in item && pathname === item.href
              const baseText = scrolled
                ? "text-ink-3 hover:text-ocean"
                : "text-white/75 hover:text-white"
              const activeText = scrolled ? "text-ocean" : "text-white"

              if (isDropdown(item)) {
                const open = activeDropdown === item.name
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.name)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm tracking-wide font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                        open
                          ? scrolled ? "text-ocean" : "text-white"
                          : baseText
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {open && (
                        <DropdownMenu
                          items={item.children}
                          scrolled={scrolled}
                          onClose={() => setActiveDropdown(null)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm tracking-wide font-medium px-3 py-2 rounded-md transition-all duration-200 group ${
                    isActive ? activeText : baseText
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-all duration-300 ${
                      scrolled ? "bg-terracotta" : "bg-white"
                    } ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </Link>
              )
            })}

            <div
              className={`h-4 w-px mx-2 transition-colors duration-300 ${
                scrolled ? "bg-ink/15" : "bg-white/30"
              }`}
            />

            <Button
              asChild
              size="sm"
              className={`tracking-wide px-5 rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-ocean text-paper hover:bg-ocean-2"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/40 hover:bg-white/25"
              }`}
            >
              <Link href="/dukung-kami">Dukung Kami</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-ink-3 hover:text-ink" : "text-white/80 hover:text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#fdfaf3] border-t border-ink/10 overflow-hidden"
          >
            <nav className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-4 flex flex-col">
              {navItems.map((item) => {
                if (isDropdown(item)) {
                  const expanded = mobileExpanded === item.name
                  return (
                    <div key={item.name} className="border-b border-ink/8">
                      <button
                        onClick={() => setMobileExpanded(expanded ? null : item.name)}
                        className="w-full flex items-center justify-between py-3.5 text-sm font-medium text-ink-3 hover:text-ocean transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-2 pl-3 flex flex-col gap-0.5">
                              {item.children.map((sub) => {
                                const Icon = sub.icon
                                return (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-paper-2/60 transition-colors group"
                                  >
                                    <span className="w-6 h-6 rounded-md bg-paper-2 flex items-center justify-center shrink-0">
                                      <Icon className="w-3 h-3 text-ink-4" />
                                    </span>
                                    <span>
                                      <span className="block text-sm font-medium text-ink-2">{sub.name}</span>
                                      <span className="block text-xs text-ink-4">{sub.desc}</span>
                                    </span>
                                  </Link>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3.5 text-sm font-medium border-b border-ink/8 last:border-0 transition-colors ${
                      pathname === item.href ? "text-ocean" : "text-ink-3 hover:text-ocean"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

              <Button
                asChild
                className="mt-5 bg-ocean text-paper hover:bg-ocean-2 w-full rounded-sm tracking-wide"
              >
                <Link href="/dukung-kami" onClick={() => setMobileOpen(false)}>
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
