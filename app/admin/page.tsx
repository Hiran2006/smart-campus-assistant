'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [classes, setClasses] = useState<string[]>([])
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await fetch('/api/data/classes')
      const data = await response.json()
      setClasses(data.classes)
    }
    fetchClasses()
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8">Admin Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map(classId => (
            <Link 
              key={classId} 
              href={`/admin/class/${classId}`}
              className="group relative block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {classId}
                </h3>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Click to view class details
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
