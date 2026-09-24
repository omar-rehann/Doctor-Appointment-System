import servicemodel from "../model/services.js";
import imagekit from "../config/imagekit.js";
// add service

const addservice = async(req, res) => {
    try {
        // start valdtion
        const { name, description } = req.body;
        const image = req.file;
        if (!name || !image || !description) {
            return res.status(400).json({
                success: false,
                message: "Error In data one condtion in doctor js",
            });
        }

        // Upload image to ImageKit
        const fileName = `${Date.now()}-${image.originalname.replace(/\s+/g, "-")}`;

        const uploadResponse = await imagekit.upload({
            file: image.buffer.toString('base64'),
            fileName: fileName,
            folder: "/services"
        });

        const imageUrl = uploadResponse.url;

        const servicesdata = {
            name,
            description,
            image: imageUrl,
        };
        const finaldata = new servicemodel(servicesdata);
        await finaldata.save();

        res.status(201).json({
            success: true,
            message: "Sucsses send services in server"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding services data",
            error: error.message
        });
    }
};

// show service
const showservice = async(req, res) => {
    try {
        const datashow = await servicemodel.find({});
        res.status(200).json({
            success: true,
            message: "succsses services show in dashboard",
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


// edit service
const editservices = async(req, res) => {
    const { id } = req.params;
    const {
        name,
        description
    } = req.body;
    const updateservice = {
        name,
        description
    }
    if (req.file) {
        updateservice.image = req.file.filename
    }
    const editservice = await servicemodel.findByIdAndUpdate(
        id, updateservice, { new: true }
    );
    if (!editservice) {
        return res.json({
            success: false,
            message: "Not Found Id from edit data",
        });
    }
    res.json({
        success: true,
        message: "Successfully Edited Doctor Data",
        data: editservice,
    });
};

// delete service
const deleteservices = async(req, res) => {
    try {
        const { id } = req.params;
        const chooseservices = await servicemodel.findById(id);
        if (!chooseservices) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found"
            });
        }
        await servicemodel.findByIdAndDelete(id);
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
export { addservice, showservice, editservices, deleteservices }