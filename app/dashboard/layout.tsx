import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { DashboardShell } from "@/components/dashboard/shell"

export const metadata: Metadata = {
  title: "Dashboard — Basamudera",
  robots: { index: false, follow: false },
}

const API_BASE_URL = process.env.API_BASE_URL ?? "https://bilikbecakap.com/api/v1"

async function getUser() {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value
  if (!token) redirect("/login")

  const res = await fetch(`${API_BASE_URL}/user`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    cache: "no-store",
  })

  if (res.status === 401) redirect("/login")
  return res.json()
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser()

  return <DashboardShell user={user}>{children}</DashboardShell>
}
