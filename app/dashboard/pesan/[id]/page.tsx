import { cookies } from "next/headers"
import { redirect, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, Calendar, Globe } from "lucide-react"

const API_BASE_URL = process.env.API_BASE_URL ?? "https://bilikbecakap.com/api/v1"

type Pesan = {
  id: number
  nama: string
  email: string
  nomor_telepon: string | null
  subjek: string
  pesan: string
  sumber: string
  created_at: string
}

async function getMessage(id: string): Promise<Pesan> {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value
  if (!token) redirect("/login")

  const res = await fetch(`${API_BASE_URL}/kontak/${id}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (res.status === 401) redirect("/login")
  if (res.status === 404) notFound()
  const json = await res.json()
  // Handle both direct object and Laravel Resource wrapper { data: {...} }
  return json.data ?? json
}

function formatDateFull(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default async function PesanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const pesan = await getMessage(id)

  return (
    <div className="max-w-2xl space-y-5">

      {/* Back */}
      <Link
        href="/dashboard/pesan"
        className="inline-flex items-center gap-1.5 text-sm text-ink-4 hover:text-ocean transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        Kembali ke Pesan Masuk
      </Link>

      {/* Subjek header */}
      <div className="bg-paper border border-ink/8 rounded-2xl p-6">
        <p className="text-xs tracking-widest uppercase text-terracotta font-medium mb-2">Pesan Masuk</p>
        <h1 className="font-serif text-xl font-bold text-ink mb-2 leading-snug">{pesan.subjek}</h1>
        <p className="text-xs text-ink-4 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {formatDateFull(pesan.created_at)}
        </p>
      </div>

      {/* Info pengirim */}
      <div className="bg-paper border border-ink/8 rounded-2xl p-6">
        <h2 className="text-xs font-semibold text-ink-4 uppercase tracking-wide mb-4">Informasi Pengirim</h2>
        <div className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ocean/10 border border-ocean/15 flex items-center justify-center shrink-0">
              <span className="text-ocean text-sm font-bold">
                {pesan.nama?.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="font-semibold text-ink">{pesan.nama}</p>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-ink-3">
            <Mail className="w-4 h-4 text-ink-4 shrink-0" />
            <a href={`mailto:${pesan.email}`} className="hover:text-ocean transition-colors">
              {pesan.email}
            </a>
          </div>
          {pesan.nomor_telepon && (
            <div className="flex items-center gap-2.5 text-sm text-ink-3">
              <Phone className="w-4 h-4 text-ink-4 shrink-0" />
              <span>{pesan.nomor_telepon}</span>
            </div>
          )}
          <div className="flex items-center gap-2.5 text-sm text-ink-3">
            <Globe className="w-4 h-4 text-ink-4 shrink-0" />
            <span>{pesan.sumber}</span>
          </div>
        </div>
      </div>

      {/* Isi pesan */}
      <div className="bg-paper border border-ink/8 rounded-2xl p-6">
        <h2 className="text-xs font-semibold text-ink-4 uppercase tracking-wide mb-4">Isi Pesan</h2>
        <p className="text-ink-2 leading-relaxed whitespace-pre-wrap text-sm">{pesan.pesan}</p>
      </div>

    </div>
  )
}
