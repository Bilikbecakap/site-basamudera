"use client"

import { Bell, Menu } from "lucide-react"

type User = { id: number; name: string; email: string; roles: string[] }

export function Topbar({
  user,
  onMenuClick,
}: {
  user: User
  onMenuClick: () => void
}) {
  return (
    <header className="h-14 bg-paper border-b border-ink/8 flex items-center justify-between px-5 sm:px-8 sticky top-0 z-30">

      {/* Left: hamburger (mobile) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-1.5 rounded-md text-ink-3 hover:bg-ink/6 transition-colors"
        aria-label="Buka menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Left: breadcrumb (desktop) */}
      <div className="hidden lg:flex items-center gap-2 text-sm">
        <span className="text-ink-4">Basamudera</span>
        <span className="text-ink/20">/</span>
        <span className="text-ink-2 font-medium">Dashboard</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Notification bell */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-lg text-ink-3 hover:bg-ink/6 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-terracotta" />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-ink/10 mx-1" />

        {/* User chip */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-ocean/12 border border-ocean/20 flex items-center justify-center shrink-0">
            <span className="text-ocean text-xs font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="hidden sm:block text-sm font-medium text-ink-2">
            {user.name}
          </span>
        </div>

      </div>
    </header>
  )
}
