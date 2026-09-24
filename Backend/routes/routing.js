import express from "express";
import upload from "../middleware/multer.js";
//  opration doctor
import { adddoctor, showdoctor, editdoctor, deletedoctor } from "../controller/doctor.js";
// opreation Specialties
import {
    addSpecialties,
    showSpecialties,
    editSpecialties,
    deleteSpecialties
} from "../controller/Specialties.js";
// opreation services
import { addservice, showservice, editservices, deleteservices } from "../controller/services.js";
import { addppoitment, editappontment, showappointment, deleteappoinement } from "../controller/appointment.js"

const Doctorrouter = express.Router();
//  opration doctor
Doctorrouter.post('/adddoctor', upload.single("image"), adddoctor);
Doctorrouter.get('/showdoctor', showdoctor);
Doctorrouter.post('/editdoctor/:id', upload.single("image"), editdoctor);
Doctorrouter.delete('/deletedoctor/:id', deletedoctor);
// opreation Specialties
Doctorrouter.post('/addSpecialties', upload.single("image"), addSpecialties);
Doctorrouter.get('/showSpecialties', showSpecialties);
Doctorrouter.post('/editSpecialties/:id', upload.single("image"), editSpecialties);
Doctorrouter.delete('/deleteSpecialties/:id', deleteSpecialties);
// opreation Service
Doctorrouter.post('/addservice', upload.single("image"), addservice);
Doctorrouter.get('/showservice', showservice);
Doctorrouter.post('/editservice/:id', upload.single("image"), editservices);
Doctorrouter.delete('/deleteservice/:id', deleteservices);
// opreation appoinemtnes
Doctorrouter.post('/addappointment', addppoitment);
Doctorrouter.get('/showappointment', showappointment);
Doctorrouter.post('/editappointment/:id', editappontment);
Doctorrouter.delete('/deleteappointment/:id', deleteappoinement);

export default Doctorrouter