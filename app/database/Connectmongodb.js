import mongoose from "mongoose"
const Connectmongodb = async () => {
try {
    await mongoose.connect('mongodb://localhost:27017/google_auth_test')
console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error connecting to database",error)
}
}

export default Connectmongodb