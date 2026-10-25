import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const API_BASE_URL = process.env.API_BASE_URL ?? "http://127.0.0.1:8000/api/v1"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("basamudera_token")?.value

  if (!token) {
    return NextResponse.json({ message: "Unauthenticated." }, { status: 401 })
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user`, {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      cache: "no-store",
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json(
      { message: "Gagal terhubung ke server API." },
      { status: 500 }
    )
  }
}
