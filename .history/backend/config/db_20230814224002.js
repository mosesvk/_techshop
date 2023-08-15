import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoURI is Connected: ${conn.connection.host}`.green)
    } catch (err) {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    }
}

export default connectDB