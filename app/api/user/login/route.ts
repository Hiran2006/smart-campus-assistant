import { NextResponse } from 'next/server'
import User from '@/models/User'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }
    try {
      const user = await User.findOne({ email })
      console.log(user)
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }
    } catch (error) {
      console.error(error)
    }
    return NextResponse.json({ message: 'User logged in successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
