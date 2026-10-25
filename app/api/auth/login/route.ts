import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

const API_BASE_URL = process.env.API_BASE_URL ?? "http://127.0.0.1:8000/api/v1"

export async function POST(request: NextRequest) {
  const body = await request.json()

  try {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: body.email, password: body.password }),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status })
    }

    const cookieStore = await cookies()
    cookieStore.set("basamudera_token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      // Jika "ingat saya" dikirim true: 30 hari. Jika tidak: session cookie
      ...(body.remember ? { maxAge: 60 * 60 * 24 * 30 } : {}),
    })

    return NextResponse.json(data)
  } catch {
    return NextResponse.json(
      { message: "Gagal terhubung ke server API." },
      { status: 500 }
    )
  }
}
