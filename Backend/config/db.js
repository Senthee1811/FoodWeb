import mongoose from "mongoose"; 

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sentheepan6780:93rleoRDyiR2yTfP@cluster0.kj3qd2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("DB Connected")})
}

 