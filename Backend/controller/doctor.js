import Doctor from "../model/doctor.js"
import validator from "validator";
import bcrypt from "bcrypt";
import imagekit from "../config/imagekit.js";

const adddoctor = async(req, res) => {
    try {
        const { name, email, password, address, about, experience, date, specialty, degree } = req.body;
        const image = req.file;

        if (!name || !email || !password || !address || !about || !experience || !date || !specialty || !degree || !image) {
            return res.status(400).json({
                success: false,
                message: "Please provide all doctor data"
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("RECEIVED PASSWORD:", JSON.stringify(password), password.length);
        console.log("SELF CHECK:", await bcrypt.compare(password, hashedPassword));
        // Upload image to ImageKit
        const fileName = `${Date.now()}-${image.originalname.replace(/\s+/g, "-")}`;

        const uploadResponse = await imagekit.upload({
            file: image.buffer.toString('base64'),
            fileName: fileName,
            folder: "/doctors"
        });

        const imageUrl = uploadResponse.url;

        console.log("IMAGE URL:", imageUrl);

        const doctordata = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            address,
            about,
            experience,
            date,
            specialty,
            degree
        };

        const finaldata = new Doctor(doctordata);
        await finaldata.save();
        const saved = await Doctor.findById(finaldata._id);
        console.log("DB CHECK:", await bcrypt.compare(password, saved.password));


        res.status(201).json({
            success: true,
            message: "Sucsses send data in server",
            date: finaldata
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding doctor data",
            error: error.message
        });
    }
};

//  show doctor
const showdoctor = async(req, res) => {
    try {
        const datashow = await Doctor.find({});
        res.status(200).json({
            success: true,
            message: "succsses data show in dashboard",
            data: datashow
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding doctor data",
            error: error.message

        });
    }


};
//  Edit doctor_data 
const editdoctor = async(req, res) => {
    const { id } = req.params;

    const {
        name,
        email,
        password,
        address,
        about,
        experience,
        date,
        specialty,
        degree,
    } = req.body;
    const updatedata = {
        name,
        email,
        password,
        address,
        about,
        experience,
        date,
        specialty,
        degree,
    }
    if (req.file) {
        updatedata.image = req.file.filename
    }
    const editdata = await Doctor.findByIdAndUpdate(
        id, updatedata, { new: true }
    );
    if (!editdata) {
        return res.json({
            success: false,
            message: "Not Found Id from edit data",
        });
    }

    res.json({
        success: true,
        message: "Successfully Edited Doctor Data",
        data: editdata,
    });
};
//  delete doctor
const deletedoctor = async(req, res) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }

        await Doctor.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Doctor removed successfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error occurred while deleting doctor",
            error: error.message
        });
    }
};
export {
    adddoctor,
    showdoctor,
    editdoctor,
    deletedoctor

}