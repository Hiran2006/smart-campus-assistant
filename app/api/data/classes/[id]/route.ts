import { NextResponse } from 'next/server'
import User from '@/models/User'
import { promises } from 'dns'

interface ClassData {
  id: string
  name: string
  teacher: string
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    console.log(id)
    if (!id) {
      return NextResponse.json(
        { error: 'Class ID is required' },
        { status: 400 }
      )
    }

    // Fetch students for the class
    const students = await User.find({ classId: id })
    // Format student data
    const formattedStudents = students.map(student => ({
      id: student._id.toString(),
      name: student.name,
      email: student.email,
      picture: student.picture,
      authProvider: student.authProvider,
    }))

    return NextResponse.json({
      students: formattedStudents,
    })
  } catch (error) {
    console.error('Error fetching class data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
