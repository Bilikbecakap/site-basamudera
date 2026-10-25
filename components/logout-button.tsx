"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      disabled={loading}
      className="border-ink/15 text-ink-3 hover:border-terracotta/40 hover:text-terracotta gap-2"
    >
      {loading
        ? <span className="w-3.5 h-3.5 border-2 border-ink/20 border-t-ink/60 rounded-full animate-spin" />
        : <LogOut className="w-3.5 h-3.5" />
      }
      Keluar
    </Button>
  )
}
