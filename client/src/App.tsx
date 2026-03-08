import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login_page/LoginPage'
import AgentDashboardPage from './pages/agent_dashboard_page/AgentDashboardPage'
import AdminDashboardPage from './pages/admin_dashboard_page/AdminDashboardPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/agent_dashboard' element={<AgentDashboardPage></AgentDashboardPage>}></Route>
          <Route path='/admin_dashboard' element={<AdminDashboardPage></AdminDashboardPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
