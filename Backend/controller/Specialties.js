import Specialtiesmodel from "../model/Specialties.js";
import imagekit from "../config/imagekit.js";
// add Specialties

const addSpecialties = async(req, res) => {
    try {
        // start valdtion
        const { name } = req.body;
        const image = req.file;
        if (!name || !image) {
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
            folder: "/specialties"
        });

        const imageUrl = uploadResponse.url;

        const Specialtiesdata = {
            name,
            image: imageUrl,
        };

        const finaldata = new Specialtiesmodel(Specialtiesdata);
        await finaldata.save();

        res.status(201).json({
            success: true,
            message: "Sucsses send Specialties in server"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding Specialties data",
            error: error.message
        });
    }
};

const showSpecialties = async(req, res) => {

    try {
        const Specialties = await Specialtiesmodel.find({});
        res.status(200).json({
            success: true,
            message: "succsses data show in dashboard",
            data: Specialties
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding Specialties data",
            error: error.message

        });
    }

}




//  Edit Specialties
const editSpecialties = async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updateSpecialties = {
            name,
        };

        if (req.file) {
            updateSpecialties.image = req.file.filename;
        }
        const finaledit = await Specialtiesmodel.findByIdAndUpdate(
            id,
            updateSpecialties, { new: true }
        );

        if (!finaledit) {
            return res.json({
                success: false,
                message: "Specialties not found",
            });
        }

        res.json({
            success: true,
            message: "Successfully edited Specialties data",
            data: finaledit,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Error occurred while editing Specialties data",
            error: error.message,
        });
    }
};



//  Delete Specialties
const deleteSpecialties = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteSpecialties = await Specialtiesmodel.findById(id);
        if (!deleteSpecialties) {
            return res.status(404).json({
                success: false,
                message: "Specialties not found"
            });
        }
        await Specialtiesmodel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Specialties removed successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while adding Specialties data",
            error: error.message

        });
    }

}
export { addSpecialties, showSpecialties, editSpecialties, deleteSpecialties }