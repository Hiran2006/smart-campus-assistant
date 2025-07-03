'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8">Admin Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Link
              href="/admin/students"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full justify-center"
            >
              Manage Students
            </Link>
          </div>
          <div>
            <Link
              href="/admin/classes"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full justify-center"
            >
              Manage Classes
            </Link>
          </div>
          <div>
            <Link
              href="/admin/teachers"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full justify-center"
            >
              Manage Teachers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
