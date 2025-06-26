import '@/lib/mongodb'
import { model, Schema, Types } from 'mongoose'

const userSchema = new Schema({
  _id: { type: Types.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  picture: { type: String },
  authProvider: { type: String, enum: ['local', 'google'], required: true },
  hashPassword: String,
  date: { type: Date, default: Date.now },
})

const User = model('Users', userSchema)

export default User
