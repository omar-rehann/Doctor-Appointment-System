import mongoose from "mongoose";
const serviceschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

});
const servicemodel = mongoose.model("serviceschema", serviceschema);
export default servicemodel