import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { promises as fs } from "fs";

const authRouter = express.Router()

authRouter.post("/login", async (req, res) => {
    try {
        const { agentCode, agentPassword } = req.body
        let isGoodCode = false
        let id;
        let fullName;
        let role;
        // console.log(agentCode, agentPassword);
        const readAllUsers = await fs.readFile("./db/users.json", "utf8")
        const ChangeToJson = JSON.parse(readAllUsers)
        for (let user of ChangeToJson) {
            // console.log(user);
            if ((user.agentCode === agentCode) && (user.password === agentPassword)) {
                isGoodCode = true
                id = user.id
                fullName = user.fullName
                role = user.role
            }
        }
        if (isGoodCode) {
            const payload = { agentCode: agentCode, role: role }
            const secret = "abc123"
            const token = jwt.sign(payload, secret, {
                expiresIn: "1h"
            })
            // console.log(token);
            return res.status(200).json({ token: token, user: { id: id, agentCode: agentCode, fullName: fullName, role: role } })
        } else {
            return res.status(401).json({ error: "the agent code or the password is incorrect" })
        }
    } catch (error) {
        return res.status(400).json({ error: "the problem is in the server in /auth/login: " })
    }
})

export default authRouter