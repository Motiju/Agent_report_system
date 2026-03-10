import { useNavigate } from "react-router-dom";

function AgentDashboard() {

    const navigate = useNavigate();

    function goToAgentNewReport(){
        navigate("/agent_new_report")
    }

    function goToAgentCsvUpload(){
        navigate("/agent_CSV_Upload")
    }

    function goToAgentAllReports(){
        navigate("/agent_all_report")
    }

    return (
        <div>
            <button onClick={goToAgentNewReport}>New Report</button><br /><br />
            <button onClick={goToAgentCsvUpload}>CSV Upload</button><br /><br />
            <button onClick={goToAgentAllReports}>My Reports</button>
        </div>
    )
}

export default AgentDashboard