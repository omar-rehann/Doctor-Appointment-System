import mongoose from "mongoose";
const appointmnetschame = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
});
const appointmentmodel = mongoose.model("appointmnetschame", appointmnetschame);
export default appointmentmodel