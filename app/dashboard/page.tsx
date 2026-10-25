import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  FileText, Newspaper, FolderOpen, Users,
  MessageSquare, Heart, TrendingUp, Clock,
} from "lucide-react"

const API_BASE_URL = process.env.API_BASE_URL ?? "https://bilikbecakap.com/api/v1"

async function getUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value
  if (!token) redirect("/login")

  const res = await fetch(`${API_BASE_URL}/user`, {
    headers: { "Accept": "application/json", "Authorization": `Bearer ${token}` },
    cache: "no-store",
  })
  if (res.status === 401) redirect("/login")
  return res.json()
}

const stats = [
  {
    label: "Total Artikel",
    value: "24",
    sub: "+3 bulan ini",
    icon: FileText,
    color: "bg-ocean/10 text-ocean border-ocean/15",
    iconColor: "text-ocean",
  },
  {
    label: "Total Berita",
    value: "18",
    sub: "+2 bulan ini",
    icon: Newspaper,
    color: "bg-terracotta/10 text-terracotta border-terracotta/15",
    iconColor: "text-terracotta",
  },
  {
    label: "Proyek Aktif",
    value: "6",
    sub: "2 selesai bulan ini",
    icon: FolderOpen,
    color: "bg-gold/10 text-gold-2 border-gold/15",
    iconColor: "text-gold-2",
  },
  {
    label: "Pengguna",
    value: "156",
    sub: "+12 bulan ini",
    icon: Users,
    color: "bg-teal/10 text-teal border-teal/15",
    iconColor: "text-teal",
  },
  {
    label: "Pesan Masuk",
    value: "12",
    sub: "3 belum dibaca",
    icon: MessageSquare,
    color: "bg-ocean/10 text-ocean border-ocean/15",
    iconColor: "text-ocean",
    badge: 3,
  },
  {
    label: "Total Donasi",
    value: "Rp 15,2jt",
    sub: "dari 48 donatur",
    icon: Heart,
    color: "bg-terracotta/10 text-terracotta border-terracotta/15",
    iconColor: "text-terracotta",
  },
]

const recentActivity = [
  { action: "Artikel baru ditambahkan", item: "Mengenal Aksara Sunda Kuno", time: "2 jam lalu", type: "artikel" },
  { action: "Pesan masuk dari", item: "Budi Santoso", time: "4 jam lalu", type: "pesan" },
  { action: "Donasi diterima dari", item: "Anonim — Rp 250.000", time: "6 jam lalu", type: "donasi" },
  { action: "Proyek diperbarui", item: "Digitalisasi Naskah Lontar", time: "1 hari lalu", type: "proyek" },
  { action: "Pengguna baru mendaftar", item: "sari.wulandari@gmail.com", time: "1 hari lalu", type: "pengguna" },
  { action: "Berita diterbitkan", item: "Basamudera Hadir di Festival Budaya Bekasi", time: "2 hari lalu", type: "berita" },
]

const activityColor: Record<string, string> = {
  artikel: "bg-ocean/10 text-ocean",
  pesan: "bg-gold/15 text-gold-2",
  donasi: "bg-terracotta/10 text-terracotta",
  proyek: "bg-teal/10 text-teal",
  pengguna: "bg-ocean/8 text-ocean",
  berita: "bg-terracotta/8 text-terracotta",
}

export default async function DashboardPage() {
  const user = await getUser()

  const hour = new Date().getHours()
  const greeting = hour < 11 ? "Selamat pagi" : hour < 15 ? "Selamat siang" : hour < 18 ? "Selamat sore" : "Selamat malam"

  return (
    <div className="space-y-7">

      {/* Welcome */}
      <div>
        <h1 className="font-serif text-2xl font-bold text-ink">
          {greeting}, {user?.name} 👋
        </h1>
        <p className="text-sm text-ink-4 mt-1">
          Berikut ringkasan aktivitas Basamudera hari ini.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-paper border border-ink/8 rounded-2xl p-5 hover:shadow-md hover:shadow-ink/5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.color}`}>
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                {stat.badge != null && (
                  <span className="bg-terracotta text-paper text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    {stat.badge} baru
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-ink">{stat.value}</p>
              <p className="text-sm text-ink-3 mt-0.5">{stat.label}</p>
              <p className="text-xs text-ink-4 mt-1.5 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.sub}
              </p>
            </div>
          )
        })}
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-3 gap-5">

        {/* Recent activity */}
        <div className="lg:col-span-2 bg-paper border border-ink/8 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-ink/8 flex items-center justify-between">
            <h2 className="font-semibold text-ink text-sm">Aktivitas Terbaru</h2>
            <button className="text-xs text-ocean hover:underline underline-offset-2">Lihat semua</button>
          </div>
          <div className="divide-y divide-ink/5">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-ink/2 transition-colors">
                <span className={`w-2 h-2 rounded-full shrink-0 ${activityColor[activity.type].split(" ")[0]}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink-2">
                    {activity.action}{" "}
                    <span className="font-medium text-ink">{activity.item}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-ink-4 shrink-0">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-paper border border-ink/8 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-ink/8">
            <h2 className="font-semibold text-ink text-sm">Aksi Cepat</h2>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: "Tulis Artikel Baru", icon: FileText, color: "hover:bg-ocean/8 hover:border-ocean/20 hover:text-ocean" },
              { label: "Tambah Berita", icon: Newspaper, color: "hover:bg-terracotta/8 hover:border-terracotta/20 hover:text-terracotta" },
              { label: "Buat Proyek Baru", icon: FolderOpen, color: "hover:bg-gold/10 hover:border-gold/20 hover:text-gold-2" },
              { label: "Tambah Pengguna", icon: Users, color: "hover:bg-teal/8 hover:border-teal/20 hover:text-teal" },
              { label: "Lihat Pesan Masuk", icon: MessageSquare, color: "hover:bg-ocean/8 hover:border-ocean/20 hover:text-ocean" },
            ].map(({ label, icon: Icon, color }) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-ink/8 text-sm text-ink-3 transition-all duration-150 ${color}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
