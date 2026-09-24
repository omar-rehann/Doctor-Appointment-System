import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import connectdb from "./config/db.js";
import Doctorrouter from "./routes/routing.js";
import { controlluser } from "./routes/use.js";
dotenv.config();
const app = express();
connectdb();
app.use(express.json());
app.use(cors());
const port = 4000;
app.use("/admin/opreation", Doctorrouter)
app.use("/user/controller", controlluser)
app.get("/", (req, res) => {
    res.send("Api Good Working")
})
app.listen(port, () => {
    console.log("This is run server")
})