import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    about: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },

    degree: {
        type: String,
        required: true
    },

    booking_users: [
        { type: mongoose.Schema.Types.ObjectId, ref: "appointmnetschame" }
    ],
}, {
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;