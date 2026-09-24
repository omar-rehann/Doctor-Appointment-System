import express from "express"
import { login, register, showuser } from "../controller/user.js"
const controlluser = express.Router();
controlluser.post("/login", login);
controlluser.get("/showuser", showuser);
controlluser.post("/register", register);
export {
    controlluser
}