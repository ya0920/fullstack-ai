import { NextResponse } from "next/server"

export async function POST(request) {
  const article = await request.json()

  return NextResponse.json({
    id: Math.random().toString(36).slice(-8),
    data: article
  }, {status: 201})
}