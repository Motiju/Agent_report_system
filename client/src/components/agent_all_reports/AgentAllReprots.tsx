import { useEffect, useState } from "react"

function AgentAllReprots() {

    const [agentReports, setAgentReports] = useState<any[]>([])

    async function getAllAgentReports() {
        const token = localStorage.getItem("token")
        const res = await fetch("http://localhost:3000/reports", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const getRes = await res.json()
        console.log(getRes);
        
    }

    useEffect(() => {
        getAllAgentReports()
    }, [])

    return (
        <div>
            {/* {agentReports.map((agent, index) => {
                return <p key={index}>{agent}</p>
            })} */}
            <p>hello</p>
        </div>
    )
}

export default AgentAllReprots