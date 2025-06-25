'use client'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <img
                  src="/default-avatar.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs">•</span>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  John Doe
                </h1>
                <p className="text-gray-600 mb-4">john.doe@example.com</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Class:</span>
                    <span className="font-medium text-gray-900">
                      B.Tech CSE
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Roll No:</span>
                    <span className="font-medium text-gray-900">123456</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Batch:</span>
                    <span className="font-medium text-gray-900">2021-2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/dashboard/attendance"
                    className="text-blue-600 hover:text-blue-500 block"
                  >
                    View Attendance
                  </Link>
                  <Link
                    href="/dashboard/timetable"
                    className="text-blue-600 hover:text-blue-500 block"
                  >
                    Check Timetable
                  </Link>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <p className="text-gray-600">No recent activity yet</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Notifications
                </h3>
                <p className="text-gray-600">No new notifications</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
