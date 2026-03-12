import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { promises as fs } from "fs";
import multer from "multer";
import csv from "async-csv";

const reportRouter = express.Router()

const upload = multer({ dest: "uploads/" });

reportRouter.post("/", upload.single("file"), async (req, res) => {
    try {
        const getHeader = req.headers.authorization
        const token = getHeader.split(" ")[1]
        // console.log(token);
        const decoded = jwt.verify(token, "abc123")
        // console.log(decoded);
        const { category, urgency, message } = req.body
        // console.log(category)
        // console.log(urgency)
        // console.log(message)
        const file = req.file
        // console.log(file);
        const data = {category: category, urgency: urgency, message: message}
        await fs.writeFile("./db/reports.json", JSON.stringify(data))
        return res.json({ message: "good conection" })
    } catch (err) {
        return res.json({ error: `the problem is on the server in /report: ${err}` })
    }
})

reportRouter.post("/csv", upload.single("csvFile"), async (req, res) => {
    try {
        const csvFile = req.file
        console.log(csvFile);
        const csvString = await fs.readFile(csvFile.path, 'utf-8');
        const rows = await csv.parse(csvString);
        console.log(rows);
        res.json({ message: "good" })
    } catch (error) {
        res.json({ error: `the problem is in the server in report/csv: ${error}` })
    }
})

reportRouter.get("/", async (req, res)=>{
    try {
        const getHeader = req.headers.authorization
        const token = getHeader.split(" ")[1]
        // console.log(token);
        const decoded = jwt.verify(token, "abc123")
        console.log(decoded);
        const getAllReports = await fs.readFile("./db/reports.json")
        console.log(JSON.parse(getAllReports));
        res.json({message: "great"})
    } catch (error) {
        res.json({error: `the problem is in get reports: ${error}`})
    }
})

export default reportRouter