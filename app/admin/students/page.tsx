import { useState } from 'react'
import { Table, Input, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface Student {
  id: number
  name: string
  email: string
  rollNumber: string
  department: string
}

const mockStudents: Student[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    rollNumber: 'CS1001',
    department: 'Computer Science',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    rollNumber: 'ME1002',
    department: 'Mechanical Engineering',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    rollNumber: 'EE1003',
    department: 'Electrical Engineering',
  },
]

export default function StudentPage() {
  const [searchText, setSearchText] = useState('')

  const columns: ColumnsType<Student> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Roll Number',
      dataIndex: 'rollNumber',
      key: 'rollNumber',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
  ]

  const filteredStudents = mockStudents.filter(
    student =>
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.email.toLowerCase().includes(searchText.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchText.toLowerCase()) ||
      student.department.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Students</h1>
        <div className="flex gap-2">
          <Input
            placeholder="Search students..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="w-80"
          />
          <Button type="primary">Add New Student</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredStudents}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </div>
  )
}
