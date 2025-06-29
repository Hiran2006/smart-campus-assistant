'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClassPage() {
  const params = useParams()
  const [classDetails, setClassDetails] = useState<any>(null)

  useEffect(() => {
    const fetchClassDetails = async () => {
      const response = await fetch(`/api/data/classes/${params.id}`)
      const data = await response.json()
      console.log(data)
      setClassDetails(data)
    }
    fetchClassDetails()
  }, [params.id])

  if (!classDetails) {
    return <div>Loading class details...</div>
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-extrabold mb-4">Class Details</h1>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Class Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Class ID:</span>
              <span>{classDetails.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Name:</span>
              <span>{classDetails.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Teacher:</span>
              <span>{classDetails.teacher || 'Not assigned'}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Students</h2>
          <div className="space-y-3">
            {classDetails.students.map((student: any) => (
              <div
                key={student.id}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.email}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Student ID: {student.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
