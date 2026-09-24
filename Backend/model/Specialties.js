import mongoose from "mongoose";


const Specialtiesshema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

});


const Specialtiesmodel = mongoose.model("Specialtiesshema", Specialtiesshema);
export default Specialtiesmodel