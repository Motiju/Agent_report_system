import { useNavigate } from "react-router-dom";

function AdnminDashboard() {

    const navigate = useNavigate();

    function goToAdminUsersPage() {
        navigate("/admin_users")
    }

    function goToAdminReportPag(){
        navigate("/admin_report")
    }

    return (
        <div>
            <button onClick={goToAdminUsersPage}>create or show users</button><br /><br />
            <button onClick={goToAdminReportPag}>show repotrs</button>
        </div>
    )
}

export default AdnminDashboard