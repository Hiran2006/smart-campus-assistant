import '@/lib/mongodb'
import mongoose, { Schema, Types } from 'mongoose'

const Period = new Schema({
  period: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
})

const Day = new Schema({
  day: { type: String, required: true },
  periods: { type: [Period], required: true },
})

const TimeTableSchema = new Schema({
  _id: { type: Types.ObjectId, auto: true },
  classId: { type: String, required: true },
  weekDays: { type: [Day], required: true },
})

export default mongoose.models.TimeTables ||
  mongoose.model('TimeTables', TimeTableSchema)
