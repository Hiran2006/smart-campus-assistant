import { getAuthUrl, getToken, verifyToken } from '@/lib/googleAuth'
import User from '@/models/User'
import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')
  if (!code) {
    return NextResponse.redirect(getAuthUrl())
  }
  const { tokens } = await getToken(code)
  const idToken = tokens.id_token
  const ticket = await verifyToken(idToken!)
  const payload = ticket.getPayload()
  const user = await User.findOne({ email: payload!.email })
  const response = NextResponse.redirect('http://localhost:3000/dashboard')
  if (!user) {
    const newUser = new User({
      name: payload!.name,
      email: payload!.email,
      authProvider: 'google',
      hashPassword: '',
      picture: payload!.picture,
    })
    await newUser.save()
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET || 'your-secret-key'
    )
    response.cookies.set('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })
  } else {
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key'
    )
    response.cookies.set('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })
  }
  return response
}
