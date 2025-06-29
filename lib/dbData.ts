import TimeTable from '@/models/TimeTable'
export async function getTimeTableData() {
  try {
    const timeTables = await TimeTable.findOne({ classId: '' })
    return timeTables
  } catch (error) {
    console.log(error)
    return null
  }
}
