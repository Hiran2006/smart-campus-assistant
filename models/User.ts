import '@/lib/mongodb'
import mongoose, { Schema, Types } from 'mongoose'

const userSchema = new Schema({
  _id: { type: Types.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  picture: { type: String },
  authProvider: { type: String, enum: ['local', 'google'], required: true },
  hashPassword: String,
  classId: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

export default mongoose.models.Users || mongoose.model('Users', userSchema)
