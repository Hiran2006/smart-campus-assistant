import { NextResponse } from 'next/server'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const { name, email, password } = await request.json()
  console.log(name, email, password)
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'Name, email, and password are required' },
      { status: 400 }
    )
  }
  try {
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
      const user = new User({ name, email, password: hashedPassword })
      user.save()
      return NextResponse.json(
        { message: 'User created successfully', success: true },
        { status: 201 }
      )
    } catch (error) {
      console.error(error)
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
