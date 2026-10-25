import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { MessageSquare, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { PesanSearch } from "@/components/dashboard/pesan-search"

const API_BASE_URL = process.env.API_BASE_URL ?? "https://bilikbecakap.com/api/v1"
const SUMBER = "basamudera.or.id"

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

type PaginatedResponse = {
  current_page: number
  data: Pesan[]
  per_page: number
  total: number
  last_page: number
}

async function getMessages(page: number, search: string): Promise<PaginatedResponse | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value
  if (!token) redirect("/login")

  const params = new URLSearchParams({
    sumber: SUMBER,
    per_page: "15",
    page: String(page),
  })
  if (search) params.set("search", search)

  const res = await fetch(`${API_BASE_URL}/kontak?${params}`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (res.status === 401) redirect("/login")
  if (!res.ok) return null
  return res.json()
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default async function PesanPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, Number(params.page ?? 1))
  const search = params.search ?? ""

  const data = await getMessages(page, search)

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">Pesan Masuk</h1>
          <p className="text-sm text-ink-4 mt-0.5">
            {data ? `${data.total} pesan dari basamudera.or.id` : "Memuat…"}
          </p>
        </div>
      </div>

      {/* Search */}
      <PesanSearch defaultValue={search} />

      {/* Table or empty */}
      {!data ? (
        <div className="bg-paper border border-ink/8 rounded-2xl flex flex-col items-center justify-center py-16 gap-3">
          <MessageSquare className="w-10 h-10 text-ink/15" />
          <p className="text-ink-3 font-medium">Gagal memuat pesan</p>
          <p className="text-sm text-ink-4">Coba muat ulang halaman</p>
        </div>
      ) : data.data.length === 0 ? (
        <div className="bg-paper border border-ink/8 rounded-2xl flex flex-col items-center justify-center py-16 gap-3">
          <MessageSquare className="w-10 h-10 text-ink/15" />
          <p className="text-ink-3 font-medium">Belum ada pesan</p>
          <p className="text-sm text-ink-4">
            {search ? `Tidak ada hasil untuk "${search}"` : "Pesan dari form kontak akan muncul di sini"}
          </p>
        </div>
      ) : (
        <div className="bg-paper border border-ink/8 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ink/8 bg-ink/2">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-ink-4 uppercase tracking-wide w-10">#</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-ink-4 uppercase tracking-wide">Pengirim</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-ink-4 uppercase tracking-wide hidden md:table-cell">Subjek</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-ink-4 uppercase tracking-wide hidden lg:table-cell">Tanggal</th>
                  <th className="px-5 py-3.5 w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {data.data.map((pesan, i) => (
                  <tr key={pesan.id} className="hover:bg-ink/2 transition-colors">
                    <td className="px-5 py-4 text-ink-4 text-xs">
                      {(page - 1) * 15 + i + 1}
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-ink">{pesan.nama}</p>
                      <p className="text-xs text-ink-4 mt-0.5">{pesan.email}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <p className="text-ink-2 max-w-[240px] truncate">{pesan.subjek}</p>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <p className="text-xs text-ink-4 whitespace-nowrap">{formatDate(pesan.created_at)}</p>
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/dashboard/pesan/${pesan.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-ocean hover:text-ocean-2 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {data.last_page > 1 && (
            <div className="px-5 py-4 border-t border-ink/8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-ink-4">
                Halaman {data.current_page} dari {data.last_page} · {data.total} pesan
              </p>
              <div className="flex items-center gap-2">
                {page > 1 && (
                  <Link
                    href={`/dashboard/pesan?page=${page - 1}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-ink/10 text-xs text-ink-3 hover:border-ocean/30 hover:text-ocean transition-all"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    Sebelumnya
                  </Link>
                )}
                {page < data.last_page && (
                  <Link
                    href={`/dashboard/pesan?page=${page + 1}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-ink/10 text-xs text-ink-3 hover:border-ocean/30 hover:text-ocean transition-all"
                  >
                    Berikutnya
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
