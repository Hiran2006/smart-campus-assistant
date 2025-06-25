'use client'

export default function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const timeSlots = [
    '08:00-09:00',
    '09:00-10:00',
    '10:00-11:00',
    '11:00-12:00',
    '12:00-01:00',
    '01:00-02:00',
  ]

  // Sample timetable data
  const timetableData = [
    [
      { subject: 'Mathematics', room: '101' },
      { subject: 'Physics', room: '102' },
      { subject: 'Chemistry', room: '103' },
      { subject: 'Biology', room: '104' },
      { subject: 'Computer Science', room: '105' },
      { subject: 'English', room: '106' },
    ],
    [
      { subject: 'Physics', room: '102' },
      { subject: 'Chemistry', room: '103' },
      { subject: 'Biology', room: '104' },
      { subject: 'Computer Science', room: '105' },
      { subject: 'Mathematics', room: '101' },
      { subject: 'English', room: '106' },
    ],
    [
      { subject: 'Chemistry', room: '103' },
      { subject: 'Biology', room: '104' },
      { subject: 'Computer Science', room: '105' },
      { subject: 'Mathematics', room: '101' },
      { subject: 'Physics', room: '102' },
      { subject: 'English', room: '106' },
    ],
    [
      { subject: 'Biology', room: '104' },
      { subject: 'Computer Science', room: '105' },
      { subject: 'Mathematics', room: '101' },
      { subject: 'Physics', room: '102' },
      { subject: 'Chemistry', room: '103' },
      { subject: 'English', room: '106' },
    ],
    [
      { subject: 'Computer Science', room: '105' },
      { subject: 'Mathematics', room: '101' },
      { subject: 'Physics', room: '102' },
      { subject: 'Chemistry', room: '103' },
      { subject: 'Biology', room: '104' },
      { subject: 'English', room: '106' },
    ],
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Weekly Timetable
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-x divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {timeSlots.map(time => (
                  <th
                    key={time}
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-x divide-gray-200">
              {days.map((day, dI) => (
                <tr key={day}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {day}
                  </td>
                  {timeSlots.map((time, tI) => (
                    <td
                      key={dI + tI}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {timetableData[dI][tI].subject}
                          </div>
                          <div className="text-sm text-gray-500">
                            Room {timetableData[dI][tI].room}
                          </div>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
