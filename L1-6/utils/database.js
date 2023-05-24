import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb+srv://Neel:lovecoding@cluster0.qymvclt.mongodb.net/?retryWrites=true",
            {
                dbName: "NextJS",
            }
        )
        console.log(`Database connected on ${connection.host}`);
    } catch (error) {
        console.log(`Error`, error);
    }
}