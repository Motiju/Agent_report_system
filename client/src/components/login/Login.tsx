import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [agentCode, setAgentCode] = useState<string>("")
    const [agentPassword, setAgentPassword] = useState<string>("")

    function updateAgentCode(e: React.ChangeEvent<HTMLInputElement>) {
        setAgentCode(e.target.value)
    }

    function updateAgentPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setAgentPassword(e.target.value)
    }

    async function sendUserInput() {
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ agentCode, agentPassword }),
            })
            const getResponse = await res.json()
            console.log(getResponse);
            if (getResponse.error){
                return ""
            }
            localStorage.setItem("token", getResponse.token)
            if (getResponse.user.role === "Admin"){
                navigate("/admin_dashboard")
            } else if (getResponse.user.role === "Agent"){
                navigate("/agent_dashboard")
            }
        } catch (error) {
            console.log("the problem is in post the user input: ", error);
        }
    }

    return (
        <div>
            <label htmlFor="agent_code">agent code:</label>
            <input type="text" name="agent_code" id="agent_code" onChange={updateAgentCode} /><br /><br />
            <label htmlFor="agent_password">agent password:</label>
            <input type="password" name="agent_password" id="agent_password" onChange={updateAgentPassword} /><br /><br />
            <button onClick={sendUserInput}>submit</button>
        </div>
    )
}

export default Login