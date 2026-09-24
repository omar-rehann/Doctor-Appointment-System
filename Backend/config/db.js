import mongoose from "mongoose";
const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("sucsses mongodatabase connect")

    } catch (error) {
        console.log(error)
    }
}
export default connectdb