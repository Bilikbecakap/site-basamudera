import { NextRequest, NextResponse } from "next/server"

const API_BASE_URL = process.env.API_BASE_URL ?? "https://bilikbecakap.com/api/v1"
const SUMBER = "basamudera.or.id"

export async function POST(request: NextRequest) {
  const body = await request.json()

  try {
    const res = await fetch(`${API_BASE_URL}/kontak`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        nama: body.nama,
        email: body.email,
        nomor_telepon: body.nomor_telepon || undefined,
        subjek: body.subjek,
        pesan: body.pesan,
        sumber: SUMBER,
      }),
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json(
      { message: "Gagal terhubung ke server." },
      { status: 500 }
    )
  }
}
