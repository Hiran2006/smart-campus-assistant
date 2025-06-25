import mongoose from 'mongoose'

const mongoose_url = process.env.MONGODB_URI

await mongoose
  .connect(mongoose_url!, { dbName: 'smart-campus-assistant' })
  .then(() => console.log('Connected to MongoDB'))
