'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ClassesPage() {
  const [classes, setClasses] = useState<String[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('/api/data/classes')
        const data = await response.json()
        setClasses(data.classes)
      } catch (error) {
        console.error('Error fetching classes:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchClasses()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Classes</h1>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Add New Class
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <input
                    type="text"
                    placeholder="Search classes..."
                    className="flex-1 bg-transparent border-none outline-none text-gray-600 placeholder-gray-400"
                  />
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {classes.map((className, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-gray-800">{className}</span>
                      <Link
                        href={`/admin/class/${className}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
