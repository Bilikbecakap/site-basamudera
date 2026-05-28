"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "Bilikbecakap",
    tagline: "Ruang Bahasa dan Budaya Digital",
    description: "Platform digital untuk mendokumentasikan dan melestarikan tradisi lisan, cerita rakyat, dan kearifan lokal masyarakat pesisir Belitung.",
    location: "Belitung, Bangka Belitung",
    year: "2023",
    contributors: "50+",
    tags: ["Tradisi Lisan", "Pembelajaran", "Budaya"],
    image: "/images/bilikbecakap-proyek.png",
  },
  {
    id: 2,
    name: "Bilikmapur",
    tagline: "Revitalisasi Bahasa Mapur",
    description: "Revitalisasi Bahasa Mapur melalui Inovasi Teknologi Linguistik Berbasis Pembelajaran dan Pengarsipan Digital.",
    location: "Bangka, Bangka Belitung",
    year: "2026",
    contributors: "-",
    tags: ["Arsip Digital", "Melayu Bangka"],
    image: "/images/bilikmapur-proyek.png",
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden bg-paper-2/50"
    >
      {/* Batik pattern */}
      <div className="absolute inset-0 batik-pattern opacity-[0.06] pointer-events-none" />

      {/* Soft glow orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-ocean/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-terracotta/6 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Melestarikan <span className="text-terracotta">Warisan</span> Lokal
          </h2>
          <p className="text-ink-3 max-w-2xl mx-auto">
            Proyek kolaboratif bersama masyarakat lokal dan instansi pemerintah untuk mendokumentasikan dan menghidupkan kembali tradisi budaya
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8 lg:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group bg-cream rounded-2xl overflow-hidden
                border border-ink/10
                shadow-[0_8px_32px_-4px_rgba(12,42,60,0.12)]
                hover:shadow-[0_20px_48px_-8px_rgba(12,42,60,0.22)]
                hover:-translate-y-1.5
                transition-all duration-500">
                <div className="grid lg:grid-cols-2">

                  {/* Project Image */}
                  <div className={`relative h-56 lg:h-auto lg:min-h-[380px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-ink/50 backdrop-blur-sm border border-paper/20 px-3 py-1 rounded-full text-xs font-medium text-paper"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>

                    {/* Top accent stripe — gold */}
                    <div className="w-10 h-1 bg-gold rounded-full mb-6" />

                    <div className="space-y-5">
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-bold text-ink mb-1.5">
                          {project.name}
                        </h3>
                        <p className="text-terracotta font-medium text-sm">{project.tagline}</p>
                      </div>

                      <p className="text-ink-3 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-5 text-sm text-ink-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-gold shrink-0" />
                          {project.contributors} Kontributor
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="outline"
                          className="border-ocean/25 text-ocean hover:bg-ocean hover:text-paper hover:border-ocean bg-transparent group/btn rounded-sm transition-all duration-300"
                        >
                          Jelajahi Proyek
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-ocean text-paper hover:bg-ocean-2 rounded-sm tracking-wide shadow-lg shadow-ocean/15"
          >
            Lihat Semua Proyek
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
