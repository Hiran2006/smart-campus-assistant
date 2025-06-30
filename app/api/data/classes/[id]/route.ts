import { NextResponse } from 'next/server'
import User from '@/models/User'

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
    if (!id) {
      return NextResponse.json(
        { error: 'Class ID is required' },
        { status: 400 }
      )
    }
    // Fetch students for the class
    const students = await User.find({ classId: id })

    const classData: ClassData = { id: id, name: '', teacher: '' }
    // Format student data
    const formattedStudents = students.map(student => ({
      id: student._id.toString(),
      name: student.name,
      email: student.email,
      picture: student.picture,
      authProvider: student.authProvider,
    }))

    return NextResponse.json({
      classData,
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
