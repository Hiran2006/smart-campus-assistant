'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import defaulAvatar from '@/assets/default-avatar.jpg'
import Image from 'next/image'

interface UserProfile {
  _id: string
  name: string
  email: string
  authProvider: 'local' | 'google'
  picture?: string
  date: Date
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Check if we have a token cookie
        const token = Cookies.get('token')
        if (!token) {
          window.location.href = '/login'
          return
        }
        // Fetch profile using the token
        const response = await axios.get('/api/user/profile')

        const data = response.data
        setUser(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [])
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                {user?.picture ? (
                  <Image
                    src={user?.picture}
                    alt="Profile"
                    width={192}
                    height={192}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src={defaulAvatar}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                    width={192}
                    height={192}
                  />
                )}
              </div>
              <div className="flex-1">
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-48"></div>
                  </div>
                ) : user ? (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {user.name}
                    </h1>
                    <p className="text-blue-600 mb-4">{user.email}</p>
                  </>
                ) : (
                  <div className="text-red-500">
                    Failed to load profile information
                  </div>
                )}
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
