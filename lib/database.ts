/* eslint-disable no-useless-return */
import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected.')

    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '', {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // user: ''
    })

    isConnected = true

    console.log('Mongo DB is connected!')
  } catch (error) {
    console.log(error)
  }
}
