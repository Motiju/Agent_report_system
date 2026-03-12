import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { promises as fs } from "fs";

const adminRouter = express.Router()

adminRouter.post("/users", (req, res)=>{
    try {
        const header = req.headers.authorization
        const token = req.split(" ")[1]
        const decoded = jwt.verify(token, "abc123")
        
        res.json({message: "the user added succesfully"})
    } catch (error){
        res.json({error: `the problem is in admin/users: ${error}`})
    }
})

adminRouter.get("/users", async (req, res)=>{
    try {
        const allUsers = fs.readFile("./db/users.json")
        const ChangeToJson = JSON.parse(allUsers)
        console.log(ChangeToJson);
        res.json({message: "get all users"})
    } catch (error) {
        res.json({error: `the problem is on the server get users: ${error}`})
    }
})

export default adminRouter