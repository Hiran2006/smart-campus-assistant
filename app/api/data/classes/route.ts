import { NextResponse, NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'
import User from '@/models/User'
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
  try {
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    try {
      // Verify JWT token
      const decoded = verify(
        token?.value,
        process.env.JWT_SECRET_ADMIN || 'your-secret-key'
      )

      if (decoded) {
        const classes = await User.distinct('classId')
        return NextResponse.json({ classes }, { status: 200 })
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
