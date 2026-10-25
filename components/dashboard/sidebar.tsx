"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Library,
  Archive,
  FolderOpen,
  Users,
  MessageSquare,
  Heart,
  Settings,
  ChevronDown,
  LogOut,
  Shield,
  X,
} from "lucide-react"

type User = { id: number; name: string; email: string; roles: string[] }

type NavItem =
  | { type: "item"; label: string; href: string; icon: React.ElementType; badge?: number }
  | { type: "group"; label: string; icon: React.ElementType; children: { label: string; href: string; icon: React.ElementType }[] }
  | { type: "divider" }

const navItems: NavItem[] = [
  { type: "item", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    type: "group",
    label: "Konten",
    icon: FileText,
    children: [
      { label: "Artikel", href: "#", icon: FileText },
      { label: "Berita", href: "#", icon: Newspaper },
      { label: "Koleksi Buku", href: "#", icon: Library },
      { label: "Arsip Budaya", href: "#", icon: Archive },
    ],
  },
  { type: "item", label: "Proyek", href: "#", icon: FolderOpen },
  { type: "item", label: "Pengguna", href: "#", icon: Users },
  { type: "item", label: "Pesan Masuk", href: "/dashboard/pesan", icon: MessageSquare, badge: 3 },
  { type: "item", label: "Donasi", href: "#", icon: Heart },
  { type: "divider" },
  { type: "item", label: "Pengaturan", href: "#", icon: Settings },
]

function NavLink({
  href,
  icon: Icon,
  label,
  active,
  badge,
}: {
  href: string
  icon: React.ElementType
  label: string
  active?: boolean
  badge?: number
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group relative ${
        active
          ? "bg-paper/12 text-paper"
          : "text-paper/55 hover:bg-paper/6 hover:text-paper/85"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-gold rounded-full" />
      )}
      <Icon className={`w-4 h-4 shrink-0 ${active ? "text-gold" : "text-paper/40 group-hover:text-paper/70"}`} />
      <span className="flex-1">{label}</span>
      {badge != null && badge > 0 && (
        <span className="bg-terracotta text-paper text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
          {badge}
        </span>
      )}
    </Link>
  )
}

export function Sidebar({
  user,
  mobileOpen,
  onClose,
}: {
  user: User
  mobileOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [groupOpen, setGroupOpen] = useState<Record<string, boolean>>({ Konten: true })
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout() {
    setLoggingOut(true)
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">

      {/* Logo */}
      <div className="px-5 py-5 border-b border-paper/8">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image
              src="/logo/logo-basamudera.webp"
              alt="Basamudera"
              width={120}
              height={60}
              className="h-7 w-auto object-contain brightness-0 invert"
            />
          </Link>
          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden text-paper/40 hover:text-paper transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] tracking-widest uppercase text-paper/30 mt-2 font-medium">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item, i) => {
          if (item.type === "divider") {
            return <div key={i} className="my-3 border-t border-paper/8" />
          }

          if (item.type === "group") {
            const open = groupOpen[item.label] ?? false
            const Icon = item.icon
            return (
              <div key={item.label}>
                <button
                  onClick={() => setGroupOpen((prev) => ({ ...prev, [item.label]: !open }))}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-paper/55 hover:bg-paper/6 hover:text-paper/85 transition-all"
                >
                  <Icon className="w-4 h-4 shrink-0 text-paper/40" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-paper/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div className="mt-0.5 ml-3 pl-3 border-l border-paper/10 space-y-0.5">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-paper/45 hover:bg-paper/6 hover:text-paper/80 transition-all"
                        >
                          <ChildIcon className="w-3.5 h-3.5 shrink-0 text-paper/30" />
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          }

          return (
            <NavLink
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              active={pathname === item.href}
            />
          )
        })}
      </nav>

      {/* User info + logout */}
      <div className="px-3 py-4 border-t border-paper/8">
        <div className="flex items-center gap-3 px-3 py-2.5 mb-1">
          <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
            <span className="text-gold text-xs font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-paper/90 truncate">{user.name}</p>
            <p className="text-[11px] text-paper/40 truncate">{user.email}</p>
          </div>
          {user.roles?.includes("super-admin") && (
            <Shield className="w-3.5 h-3.5 text-gold/60 shrink-0" />
          )}
        </div>

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-paper/40 hover:bg-paper/6 hover:text-terracotta transition-all"
        >
          {loggingOut
            ? <span className="w-4 h-4 border-2 border-paper/20 border-t-paper/50 rounded-full animate-spin" />
            : <LogOut className="w-4 h-4" />
          }
          Keluar
        </button>
      </div>

    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-[240px] shrink-0 bg-[#0c2a3c] min-h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-ink/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <aside className="fixed left-0 top-0 bottom-0 w-[240px] bg-[#0c2a3c] z-50 lg:hidden flex flex-col">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  )
}
