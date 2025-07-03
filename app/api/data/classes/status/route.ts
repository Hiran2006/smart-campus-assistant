import { NextResponse, NextRequest } from 'next/server'
import User from '@/models/User'
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
}
