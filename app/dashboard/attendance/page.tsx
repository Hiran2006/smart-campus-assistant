'use client'

export default function AttendancePage() {
  // Sample attendance data for the last three months
  const attendanceData = [
    {
      month: 'June',
      percentage: 95,
      daysPresent: 28,
      totalDays: 30,
      subjects: [
        { name: 'Mathematics', percentage: 98 },
        { name: 'Physics', percentage: 95 },
        { name: 'Chemistry', percentage: 97 },
        { name: 'Biology', percentage: 96 },
        { name: 'Computer Science', percentage: 99 },
      ],
    },
    {
      month: 'May',
      percentage: 92,
      daysPresent: 26,
      totalDays: 28,
      subjects: [
        { name: 'Mathematics', percentage: 95 },
        { name: 'Physics', percentage: 92 },
        { name: 'Chemistry', percentage: 98 },
        { name: 'Biology', percentage: 94 },
        { name: 'Computer Science', percentage: 97 },
      ],
    },
    {
      month: 'April',
      percentage: 98,
      daysPresent: 27,
      totalDays: 28,
      subjects: [
        { name: 'Mathematics', percentage: 100 },
        { name: 'Physics', percentage: 97 },
        { name: 'Chemistry', percentage: 99 },
        { name: 'Biology', percentage: 98 },
        { name: 'Computer Science', percentage: 100 },
      ],
    },
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Attendance</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {attendanceData.map((monthData) => (
            <div key={monthData.month} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{monthData.month}</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">{monthData.percentage}%</div>
                <div className="text-sm text-gray-600">
                  {monthData.daysPresent}/{monthData.totalDays} days
                </div>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-600 rounded-full"
                  style={{ width: `${monthData.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject-wise Attendance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attendanceData[0].subjects.map((subject) => (
              <div key={subject.name} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold text-green-600">{subject.percentage}%</div>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
