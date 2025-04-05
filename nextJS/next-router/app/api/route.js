import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return NextResponse.json({ data })
}
// export async function POST() {
// }

// export async function PUT() {
// }

// export async function DELETE() {
// }

// export async function PATCH() {
// }

// export async function HEAD() {
// }

// export async function OPTIONS() {
// }