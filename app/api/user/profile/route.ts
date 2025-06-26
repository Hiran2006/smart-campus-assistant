import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import { verify, JwtPayload } from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    try {
      // Verify JWT token
      const decoded = verify(
        token?.value,
        process.env.JWT_SECRET || 'your-secret-key'
      )

      console.log(decoded)
      // Find user by ID from token
      const user = await User.findById((decoded as JwtPayload).userId)

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }

      return NextResponse.json({
        name: user.name,
        email: user.email,
        picture: user.picture,
      })
    } catch (jwtError) {
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
