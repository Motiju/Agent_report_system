import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/auth/login", (req, res) => {
    try {
        const { agentCode, agentPassword } = req.body
        // console.log(agentCode, agentPassword);
        const payload = { agentCode: agentCode }
        const secret = "abc123"
        const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
        })
        // console.log(token);
        res.status(200).json({ token: token, user: { id: 1, agentCode: agentCode, fullName: "moti", role: "Amin" } })
    } catch (error) {
        res.status(400).send("the problem is in the server in /auth/login: ", error)
    }
})

app.listen(3000, () => {
    console.log("the server is ready on port 3000: ");
})