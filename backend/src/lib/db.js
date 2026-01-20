import mongoose from 'mongoose'

export const connectDB=async ()=>{
        try {
             const conn= await mongoose.connect(process.env.MONGODB_URI)
             console.log("MONGODB is connected Successfully :",conn.connection.host)
        } catch (error) {
            console.log("Error connecting to MONGODB:",error)
            process.exit(1) //1 status code is failed and 0 is success
        }
}