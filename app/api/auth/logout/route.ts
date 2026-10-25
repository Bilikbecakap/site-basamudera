import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const API_BASE_URL = process.env.API_BASE_URL ?? "http://127.0.0.1:8000/api/v1"

export async function POST() {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value

  if (token) {
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
    } catch {
      // Tetap lanjutkan hapus cookie meski API gagal
    }
  }

  cookieStore.delete("basamudera_token")
  return NextResponse.json({ message: "Berhasil logout." })
}
