import '@/lib/mongodb'
import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
})

const User = model('Users', userSchema)

export default User
