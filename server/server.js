import express from "express";
import cors from "cors";
// import jwt from "jsonwebtoken";
// import { promises as fs } from "fs";
// import multer from "multer";
// import csv from "async-csv";
import authRouter from "./routes/authRoutes.js";
import reportRouter from "./routes/reportRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
// app.use("/uploads", express.static("uploads"));

// const upload = multer({ dest: "uploads/" });

app.use("/auth", authRouter)
app.use("/report", reportRouter)
app.use("/admin", adminRouter)

// app.post("/auth/login", async (req, res) => {
//     try {
//         const { agentCode, agentPassword } = req.body
//         let isGoodCode = false
//         let id;
//         let fullName;
//         let role;
//         // console.log(agentCode, agentPassword);
//         const readAllUsers = await fs.readFile("./db/users.json", "utf8")
//         const ChangeToJson = JSON.parse(readAllUsers)
//         for (let user of ChangeToJson) {
//             // console.log(user);
//             if ((user.agentCode === agentCode) && (user.password === agentPassword)) {
//                 isGoodCode = true
//                 id = user.id
//                 fullName = user.fullName
//                 role = user.role
//             }
//         }
//         if (isGoodCode) {
//             const payload = { agentCode: agentCode, role: role }
//             const secret = "abc123"
//             const token = jwt.sign(payload, secret, {
//                 expiresIn: "1h"
//             })
//             // console.log(token);
//             return res.status(200).json({ token: token, user: { id: id, agentCode: agentCode, fullName: fullName, role: role } })
//         } else {
//             return res.status(401).json({ error: "the agent code or the password is incorrect" })
//         }
//     } catch (error) {
//         return res.status(400).json({ error: "the problem is in the server in /auth/login: " })
//     }
// })

// app.get("/auth/me", (req, res) => {
//     try {
//         console.log("hello");
//     } catch (error) {
//         console.log("hello");
//     }
// })

// app.post("/report", upload.single("file"), async (req, res) => {
//     try {
//         const getHeader = req.headers.authorization
//         const token = getHeader.split(" ")[1]
//         // console.log(token);
//         const decoded = jwt.verify(token, "abc123")
//         // console.log(decoded);
//         const { category, urgency, message } = req.body
//         // console.log(category)
//         // console.log(urgency)
//         // console.log(message)
//         const file = req.file
//         // console.log(file);
//         const data = {category: category, urgency: urgency, message: message}
//         await fs.writeFile("./db/reports.json", JSON.stringify(data))
//         return res.json({ message: "good conection" })
//     } catch (err) {
//         return res.json({ error: `the problem is on the server in /report: ${err}` })
//     }
// })

// app.post("/reports/csv", upload.single("csvFile"), async (req, res) => {
//     try {
//         const csvFile = req.file
//         console.log(csvFile);
//         const csvString = await fs.readFile(csvFile.path, 'utf-8');
//         const rows = await csv.parse(csvString);
//         console.log(rows);
//         res.json({ message: "good" })
//     } catch (error) {
//         res.json({ error: `the problem is in the server in report/csv: ${error}` })
//     }
// })

// app.get("/reports", async (req, res)=>{
//     try {
//         const getHeader = req.headers.authorization
//         const token = getHeader.split(" ")[1]
//         // console.log(token);
//         const decoded = jwt.verify(token, "abc123")
//         console.log(decoded);
//         const getAllReports = await fs.readFile("./db/reports.json")
//         console.log(JSON.parse(getAllReports));
//         res.json({message: "great"})
//     } catch (error) {
//         res.json({error: `the problem is in get reports: ${error}`})
//     }
// })

// app.post("/admin/users", (req, res)=>{
//     try {
//         const header = req.headers.authorization
//         const token = req.split(" ")[1]
//         const decoded = jwt.verify(token, "abc123")
        
//         res.json({message: "the user added succesfully"})
//     } catch (error){
//         res.json({error: `the problem is in admin/users: ${error}`})
//     }
// })

app.listen(3000, () => {
    console.log("the server is ready on port 3000: ");
})