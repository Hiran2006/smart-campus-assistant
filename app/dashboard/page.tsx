'use client'

import { auth } from '@/lib/firebase'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Your Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dashboard Cards */}
              <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Quick Actions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    View Profile
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Update Settings
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Recent Activity
                </h3>
                <p className="text-gray-600">No recent activity yet</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
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
