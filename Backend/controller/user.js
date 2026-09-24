import Usermodel from "../model/user.js"
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Doctor from "../model/doctor.js";

const getToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};
//  login
const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        // Check User
        const user = await Usermodel.findOne({ email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.json({
                    success: false,
                    message: "Invalid credentials",
                });
            }

            const logintoken = getToken(user._id);

            return res.json({
                success: true,
                logintoken

            });
        }

        // Check Doctor
        const doctor = await Doctor.findOne({ email });
        console.log("EMAIL:", email);
        console.log("PASSWORD FROM REQUEST:", password);
        console.log("PASSWORD FROM DB:", doctor.password);

        const match = await bcrypt.compare(password, doctor.password);

        console.log("MATCH:", match);


        if (doctor) {
            const match = await bcrypt.compare(
                password,
                doctor.password
            );
            console.log("Match:", match);
            if (!match) {
                return res.json({
                    success: false,
                    message: "Invalid credentials",
                });
            }

            const logintoken = getToken(doctor._id);

            return res.json({
                success: true,
                logintoken
            });
        }

        return res.json({
            success: false,
            message: "User not found",
        });

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Server error",
        });
    }
};


//  register
const register = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name) {
            return res.json({
                success: false,
                message: "Name is required"
            });
        }

        if (!email) {
            return res.json({
                success: false,
                message: "Email is required"
            });
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid email"
            });
        }

        if (!password || password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters"
            });
        }

        const existemail = await Usermodel.findOne({ email });

        if (existemail) {
            return res.json({
                success: false,
                message: "Email already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newmodeluser = new Usermodel({
            name,
            email,
            password: hashedPassword
        });

        const savemodel = await newmodeluser.save();

        const registertoken = getToken(savemodel._id);

        return res.json({
            success: true,
            registertoken
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "Error occurred while registering",
            error: error.message
        });
    }
};
// show user
const showuser = async(reg, res) => {
    try {
        const alluser = await Usermodel.find({});
        res.status(200).json({
            success: true,
            message: "succsses data show in dashboard",
            data: alluser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding doctor data",
            error: error.message

        });
    }

}
export {
    login,
    register,
    showuser
}