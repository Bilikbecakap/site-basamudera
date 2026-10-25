"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, LogIn, ArrowLeft, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, remember }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message ?? "Email atau password salah.")
        return
      }

      router.push("/dashboard")
    } catch {
      setError("Gagal terhubung ke server.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fdfaf3] relative overflow-hidden flex flex-col">

      {/* Batik pattern background */}
      <div className="absolute inset-0 batik-pattern opacity-30 pointer-events-none" />

      {/* Warm gradient overlays */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vh] rounded-full bg-terracotta/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vh] rounded-full bg-ocean/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[25vw] h-[25vh] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-terracotta to-gold opacity-70 z-10" />

      {/* Back to home link */}
      <div className="relative z-10 px-6 sm:px-10 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-ink-4 hover:text-ocean transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Kembali ke Beranda
        </Link>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[420px]">

          {/* Logo + heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-8"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo/logo-basamudera.webp"
                alt="Basamudera"
                width={160}
                height={80}
                className="h-10 w-auto object-contain brightness-0 mx-auto"
                priority
              />
            </Link>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-sm text-ink-4 leading-relaxed">
              Masuk untuk mengakses panel Basamudera
            </p>
          </motion.div>

          {/* Login card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-cream border border-ink/10 rounded-2xl shadow-[0_4px_32px_-4px_rgba(22,19,16,0.12)] p-7 sm:p-8"
          >
            {/* Decorative top border */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-full mb-7" />

            {/* Error alert */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive rounded-xl px-4 py-3 mb-5 text-sm"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-ink-2">
                  Alamat Email <span className="text-terracotta">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@contoh.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium text-ink-2">
                    Kata Sandi <span className="text-terracotta">*</span>
                  </Label>
                  <Link
                    href="#"
                    className="text-xs text-ocean hover:text-ocean-2 hover:underline underline-offset-2 transition-colors"
                  >
                    Lupa kata sandi?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Masukkan kata sandi Anda"
                    value={form.password}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors"
                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                  >
                    {showPassword
                      ? <EyeOff className="w-4 h-4" />
                      : <Eye className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2.5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  disabled={loading}
                  className="w-4 h-4 rounded border-ink/20 accent-ocean cursor-pointer"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-ink-3 font-normal cursor-pointer"
                >
                  Ingat saya
                </Label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-ocean text-paper hover:bg-ocean-2 tracking-wide gap-2 mt-1"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Masuk
                  </>
                )}
              </Button>

            </form>

          </motion.div>
        </div>
      </div>

      {/* Bottom footer bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="relative z-10 text-center py-5 border-t border-ink/8"
      >
        <p className="text-xs text-ink-4">
          © 2026 Yayasan Basamudera Budaya Teknologi Indonesia.{" "}
          <Link href="#" className="hover:text-ocean transition-colors">Kebijakan Privasi</Link>
          {" · "}
          <Link href="#" className="hover:text-ocean transition-colors">Syarat & Ketentuan</Link>
        </p>
      </motion.div>

    </div>
  )
}
