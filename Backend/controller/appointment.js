import appointmentmodel from "../model/appointments.js";
import Doctor from "../model/doctor.js";
// add appintment
const addppoitment = async(req, res) => {
    try {
        const { doctorId, name, day, time, note } = req.body;

        if (!doctorId || !name || !day || !time || !note) {
            return res.status(400).json({
                success: false,
                message: "Please provide all appointment data"
            });
        }
        const finaldata = new appointmentmodel({ doctorId, name, day, time, note });
        await finaldata.save();
        await Doctor.findByIdAndUpdate(doctorId, {
            $push: { booking_users: finaldata._id }
        });

        res.status(201).json({
            success: true,
            message: "Appointment added successfully",
            data: finaldata
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding appointment data",
            error: error.message
        });
    }
};
//  show appintment
const showappointment = async(req, res) => {
    try {
        const datashow = await appointmentmodel.find({});
        res.status(200).json({
            success: true,
            message: "succsses data show in dashboard",
            data: datashow
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding appontment data",
            error: error.message
        });
    }
};
//  Edit doctor_data 
const editappontment = async(req, res) => {
    const { id } = req.params;
    const {
        name,
        day,
        time,
        note,
    } = req.body;
    const updatedata = {
        name,
        day,
        time,
        note,

    }

    const editdata = await appointmentmodel.findByIdAndUpdate(
        id, updatedata, { new: true }
    );
    if (!editdata) {
        return res.json({
            success: false,
            message: "Not Found Id from edit appointemnts",
        });
    }

    res.json({
        success: true,
        message: "Successfully Edited appotnments Data",
        data: editdata,
    });
};
//  delete doctor
const deleteappoinement = async(req, res) => {
    try {
        const { id } = req.params;
        const appintment = await appointmentmodel.findById(id);
        if (!appintment) {
            return res.status(404).json({
                success: false,
                message: "appintment not found"
            });
        }

        await appointmentmodel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "appintment removed successfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error occurred while deleting appintment",
            error: error.message
        });
    }
};
export {
    addppoitment,
    showappointment,
    editappontment,
    deleteappoinement
}