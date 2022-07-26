const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI)
    console.log(`Server Connected ${conn.connection.host}`)
  } catch (error) {
    throw error
    process.exit(1)
  }
}
module.exports = connectDB