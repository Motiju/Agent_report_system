import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login_page/LoginPage'
import AgentDashboardPage from './pages/agent_dashboard_page/AgentDashboardPage'
import AdminDashboardPage from './pages/admin_dashboard_page/AdminDashboardPage'
import AgentNewReportPage from './pages/agent_new_report_page/AgentNewReportPage'
import AgentCsvUploadPage from './pages/agent_csv_upload_page/AgentCsvUploadPage'
import AgentAllReportsPage from './pages/agent_all_reports_page/AgentAllReportsPage'
import AdminUsersPage from './pages/admin_users_page/AdminUsersPage'
import AdminReportPage from './pages/admin_reports_page/AdminReportPage'
import ProtectedRoute from './components/protcted_router/ProtectedRouter'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/agent_dashboard' element={
            <ProtectedRoute>
              <AgentDashboardPage></AgentDashboardPage>
            </ProtectedRoute>
          }></Route>
          <Route path='/admin_dashboard' element={<AdminDashboardPage></AdminDashboardPage>}></Route>
          <Route path='/agent_new_report' element={<AgentNewReportPage></AgentNewReportPage>}></Route>
          <Route path='/agent_CSV_Upload' element={<AgentCsvUploadPage></AgentCsvUploadPage>}></Route>
          <Route path='/agent_all_report' element={<AgentAllReportsPage></AgentAllReportsPage>}></Route>
          <Route path='/admin_users' element={<AdminUsersPage></AdminUsersPage>}></Route>
          <Route path='/admin_report' element={<AdminReportPage></AdminReportPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
