"use client"

import { useState, useTransition } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export function PesanSearch({ defaultValue }: { defaultValue: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [value, setValue] = useState(defaultValue)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    startTransition(() => {
      const params = new URLSearchParams()
      if (value.trim()) params.set("search", value.trim())
      params.set("page", "1")
      router.push(`${pathname}?${params.toString()}`)
    })
  }

  function handleClear() {
    setValue("")
    router.push(pathname)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-4 pointer-events-none" />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Cari nama, email, subjek…"
          className="pl-9 pr-8 bg-paper border-ink/15 focus-visible:ring-ocean/30 focus-visible:border-ocean/40 placeholder:text-ink-4/60 text-sm"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-4 hover:text-ink-2 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 rounded-lg bg-ocean text-paper text-sm font-medium hover:bg-ocean-2 transition-colors disabled:opacity-60 shrink-0"
      >
        Cari
      </button>
    </form>
  )
}
