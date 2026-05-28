"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroImages = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="Kegiatan budaya Yayasan Basamudera"
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlays — warm dark ink */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/58 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20">
        <div className="max-w-2xl">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-bold text-paper leading-[1.1] text-4xl sm:text-5xl lg:text-[4.5rem] mb-6 drop-shadow-lg"
          >
            Melestarikan
            <br />
            Bahasa dan Budaya
          </motion.h1>

          {/* Tagline badge — terracotta */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <span className="bg-terracotta/80 backdrop-blur-sm text-paper text-sm sm:text-base lg:text-lg font-serif tracking-wide px-4 py-2 inline-block">
              Melalui Inovasi Digital
            </span>
          </motion.div>

          {/* Divider — restrained gold */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="w-10 h-[1.5px] bg-gold/70 mb-7 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-paper/70 text-sm sm:text-base leading-loose max-w-lg"
          >
            Mendokumentasikan dan melestarikan kekayaan bahasa daerah, naskah kuno,
            dan kearifan lokal Indonesia untuk generasi mendatang.
          </motion.p>

        </div>
      </div>

      {/* Slide indicators — gold active, paper inactive */}
      <div className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[3px] rounded-full transition-all duration-500 ${
              i === current ? "bg-gold h-8" : "bg-paper/30 h-3 hover:bg-paper/60"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
